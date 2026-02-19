import { describe, expect, it } from "vitest";

import { estimateLeadSchema } from "@/lib/validation/estimate";

describe("estimateLeadSchema", () => {
  it("accepts valid estimate payload", () => {
    const result = estimateLeadSchema.safeParse({
      name: "Alex Parker",
      phone: "(816) 555-0123",
      address: "123 Main St, Kansas City, MO",
      serviceType: "Driveway",
      details: "Need driveway pressure washing and edge cleanup.",
      website: ""
    });

    expect(result.success).toBe(true);
  });

  it("rejects invalid payload", () => {
    const result = estimateLeadSchema.safeParse({
      name: "A",
      phone: "abc",
      address: "12",
      serviceType: "Other",
      details: "short"
    });

    expect(result.success).toBe(false);
  });
});
