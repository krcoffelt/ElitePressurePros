import { NextResponse } from "next/server";

import { sendEstimateEmail } from "@/lib/email/sendEstimate";
import { estimateLeadSchema, toFieldErrors } from "@/lib/validation/estimate";
import type { EstimateErrorResponse, EstimateSuccessResponse } from "@/types/estimate";

export async function POST(request: Request) {
  try {
    const json = (await request.json()) as unknown;
    const parsed = estimateLeadSchema.safeParse(json);

    if (!parsed.success) {
      const errorPayload: EstimateErrorResponse = {
        ok: false,
        error: "Please fix the highlighted fields and submit again.",
        fieldErrors: toFieldErrors(parsed.error.issues)
      };

      return NextResponse.json(errorPayload, { status: 400 });
    }

    const lead = parsed.data;

    // Honeypot field should remain empty for humans; return a normal success for bots.
    if (lead.website && lead.website.trim().length > 0) {
      const botPayload: EstimateSuccessResponse = {
        ok: true,
        leadId: crypto.randomUUID()
      };

      return NextResponse.json(botPayload, { status: 200 });
    }

    const emailResult = await sendEstimateEmail(lead);

    const successPayload: EstimateSuccessResponse = {
      ok: true,
      leadId: emailResult.messageId || crypto.randomUUID()
    };

    return NextResponse.json(successPayload, { status: 200 });
  } catch {
    const errorPayload: EstimateErrorResponse = {
      ok: false,
      error: "We could not submit your request right now. Please call or text us directly."
    };

    return NextResponse.json(errorPayload, { status: 500 });
  }
}
