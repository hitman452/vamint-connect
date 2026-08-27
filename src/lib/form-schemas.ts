import { z } from "zod";

export const YEARS = ["First Year", "Second Year", "Third Year", "Final Year"] as const;
export const MESSAGE_TYPES = ["Suggestion", "Query", "Feedback"] as const;

const nameRegex = /^[A-Za-z][A-Za-z.\s'-]{1,99}$/;
const departmentRegex = /^[A-Za-z][A-Za-z\s&.-]{1,99}$/;

function cleanPhone(raw: string): string {
  let digits = raw.replace(/\D/g, "");
  if (digits.length === 12 && digits.startsWith("91")) {
    digits = digits.slice(2);
  }
  if (digits.length === 11 && digits.startsWith("0")) {
    digits = digits.slice(1);
  }
  return digits;
}

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(100, { message: "Name must be less than 100 characters." })
    .regex(nameRegex, { message: "Please enter a valid name (letters and spaces only)." }),
  email: z
    .string()
    .trim()
    .email({ message: "Enter a valid email address." })
    .max(255, { message: "Email must be less than 255 characters." })
    .transform((v) => v.toLowerCase()),
  message_type: z.enum(MESSAGE_TYPES, { message: "Select a message type." }),
  message: z
    .string()
    .trim()
    .min(5, { message: "Message must be at least 5 characters." })
    .max(1000, { message: "Message must be less than 1000 characters." }),
});

export type ContactValues = z.infer<typeof contactSchema>;

export const registrationSchema = z.object({
  full_name: z
    .string()
    .trim()
    .min(2, { message: "Full name must be at least 2 characters." })
    .max(100, { message: "Full name must be less than 100 characters." })
    .regex(nameRegex, { message: "Please enter a valid full name (letters and spaces only)." }),
  phone_number: z
    .string()
    .trim()
    .transform((raw) => cleanPhone(raw))
    .pipe(z.string().regex(/^[6-9]\d{9}$/, { message: "Enter a valid 10-digit mobile number." })),
  email: z
    .string()
    .trim()
    .email({ message: "Enter a valid email address." })
    .max(255, { message: "Email must be less than 255 characters." })
    .transform((v) => v.toLowerCase()),
  department: z
    .string()
    .trim()
    .min(2, { message: "Department must be at least 2 characters." })
    .max(100, { message: "Department must be less than 100 characters." })
    .regex(departmentRegex, { message: "Please enter a valid department name." }),
  year_of_study: z.enum(YEARS, { message: "Select your year of study." }),
});

export type RegistrationValues = z.infer<typeof registrationSchema>;

export function fieldErrorsFromZod<T extends Record<string, unknown>>(
  result: z.SafeParseReturnType<T, T>,
): Partial<Record<keyof T, string>> {
  const errors: Partial<Record<keyof T, string>> = {};
  if (!result.success) {
    for (const issue of result.error.issues) {
      const key = issue.path[0] as keyof T;
      if (!errors[key]) errors[key] = issue.message;
    }
  }
  return errors;
}
