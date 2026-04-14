import { z } from "zod";

export const EnquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit mobile number"),
  email: z.string().email("Please enter a valid email address").or(z.literal("")),
  timing: z.string().min(1, "Please select an expected visit timing"),
  intent: z.string().min(1, "Please select an investment goal"),
  source_url: z.string().optional(),
  form_id: z.string().optional(),
  plot_id: z.string().optional(),
  source_meta: z.string().optional(),
});

export type EnquiryData = z.infer<typeof EnquirySchema>;

export interface LeadResponse {
  success: boolean;
  message?: string;
  error?: string;
  vault?: string;
  telemetry?: {
    google_sheets?: { success: boolean; detail: string };
    local_ledger?: string;
    email?: string;
  };
}
