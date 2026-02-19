import { z } from "zod";

import { serviceTypeOptions } from "@/types/estimate";

const phoneRegex = /^[0-9()+\-\s]{10,20}$/;

export const estimateLeadSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(80),
  phone: z
    .string()
    .trim()
    .regex(phoneRegex, "Phone number must be 10-20 digits and symbols"),
  address: z.string().trim().min(5, "Address is required").max(200),
  serviceType: z.enum(serviceTypeOptions),
  details: z.string().trim().min(10, "Please share a few project details").max(1200),
  website: z.string().optional()
});

export type EstimateLeadInput = z.infer<typeof estimateLeadSchema>;

export function toFieldErrors(issues: z.ZodIssue[]): Record<string, string> {
  return issues.reduce<Record<string, string>>((acc, issue) => {
    const key = issue.path[0];
    if (typeof key === "string" && !acc[key]) {
      acc[key] = issue.message;
    }
    return acc;
  }, {});
}
