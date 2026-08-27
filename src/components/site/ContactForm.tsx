import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { contactSchema, fieldErrorsFromZod } from "@/lib/form-schemas";
import { Field, SubmitButton, SuccessPanel, inputClass } from "./form-primitives";

const TYPES = ["Suggestion", "Query", "Feedback"] as const;

type Values = { name: string; email: string; message_type: string; message: string };
const empty: Values = { name: "", email: "", message_type: "", message: "" };

export function ContactForm() {
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [pending, setPending] = useState(false);
  const [done, setDone] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const set = (key: keyof Values, value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      setErrors(fieldErrorsFromZod(parsed));
      return;
    }

    setPending(true);
    const { error } = await supabase.from("contact_messages").insert(parsed.data);
    setPending(false);
    if (error) {
      setFormError("Something went wrong while sending your message. Please try again.");
      return;
    }
    setValues(empty);
    setDone(true);
  };

  if (done)
    return (
      <SuccessPanel
        title="Message received"
        message="Thank you for reaching out to Vamint. Our team will review your message and reply by email soon."
      />
    );

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <Field label="Name" htmlFor="name" error={errors.name}>
        <input
          id="name"
          className={inputClass}
          value={values.name}
          onChange={(e) => set("name", e.target.value)}
          placeholder="Your name"
        />
      </Field>

      <Field label="Email address" htmlFor="c_email" error={errors.email}>
        <input
          id="c_email"
          type="email"
          className={inputClass}
          value={values.email}
          onChange={(e) => set("email", e.target.value)}
          placeholder="you@example.com"
        />
      </Field>

      <Field label="Message type" htmlFor="message_type" error={errors.message_type}>
        <select
          id="message_type"
          className={inputClass}
          value={values.message_type}
          onChange={(e) => set("message_type", e.target.value)}
        >
          <option value="">Select type</option>
          {TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </Field>

      <div className="sm:col-span-2">
        <Field label="Message" htmlFor="message" error={errors.message}>
          <textarea
            id="message"
            rows={6}
            className={inputClass}
            value={values.message}
            onChange={(e) => set("message", e.target.value)}
            placeholder="Tell us what's on your mind…"
          />
        </Field>
      </div>

      <div className="sm:col-span-2">
        {formError ? <p className="mb-2 text-sm text-destructive">{formError}</p> : null}
        <SubmitButton pending={pending}>Send message</SubmitButton>
      </div>
    </form>
  );
}
