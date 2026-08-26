import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import {
  Field,
  SubmitButton,
  SuccessPanel,
  YEARS,
  inputClass,
  validateEmail,
  validatePhone,
} from "./form-primitives";

type Values = {
  full_name: string;
  phone_number: string;
  email: string;
  department: string;
  year_of_study: string;
};

const empty: Values = {
  full_name: "",
  phone_number: "",
  email: "",
  department: "",
  year_of_study: "",
};

export function RegistrationForm({
  kind,
  eventName,
  successTitle,
  successMessage,
  submitLabel,
}: {
  kind: "member" | "event";
  eventName?: string;
  successTitle: string;
  successMessage: string;
  submitLabel: string;
}) {
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [pending, setPending] = useState(false);
  const [done, setDone] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const set = (key: keyof Values, value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = () => {
    const next: Partial<Record<keyof Values, string>> = {};
    if (!values.full_name.trim()) next.full_name = "Full name is required.";
    if (!values.phone_number.trim()) next.phone_number = "Phone number is required.";
    else if (!validatePhone(values.phone_number))
      next.phone_number = "Enter a valid phone number with at least 10 digits.";
    if (!values.email.trim()) next.email = "Email is required.";
    else if (!validateEmail(values.email)) next.email = "Enter a valid email address.";
    if (!values.department.trim()) next.department = "Department is required.";
    if (!values.year_of_study) next.year_of_study = "Select your year of study.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    if (!validate()) return;
    setPending(true);

    const payload = {
      full_name: values.full_name.trim(),
      phone_number: values.phone_number.trim(),
      email: values.email.trim(),
      department: values.department.trim(),
      year_of_study: values.year_of_study,
    };

    const { error } =
      kind === "event"
        ? await supabase
            .from("event_registrations")
            .insert({ ...payload, event_name: eventName ?? "" })
        : await supabase.from("member_registrations").insert(payload);

    setPending(false);
    if (error) {
      setFormError("Something went wrong while submitting. Please try again.");
      return;
    }
    setValues(empty);
    setDone(true);
  };

  if (done) return <SuccessPanel title={successTitle} message={successMessage} />;

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <Field label="Full name" htmlFor="full_name" error={errors.full_name}>
        <input
          id="full_name"
          className={inputClass}
          value={values.full_name}
          onChange={(e) => set("full_name", e.target.value)}
          placeholder="e.g. Aarav Kulkarni"
        />
      </Field>

      <Field label="Phone number" htmlFor="phone_number" error={errors.phone_number}>
        <input
          id="phone_number"
          inputMode="tel"
          className={inputClass}
          value={values.phone_number}
          onChange={(e) => set("phone_number", e.target.value)}
          placeholder="10-digit mobile number"
        />
      </Field>

      <Field label="Email address" htmlFor="email" error={errors.email}>
        <input
          id="email"
          type="email"
          className={inputClass}
          value={values.email}
          onChange={(e) => set("email", e.target.value)}
          placeholder="you@example.com"
        />
      </Field>

      <Field label="Department" htmlFor="department" error={errors.department}>
        <input
          id="department"
          className={inputClass}
          value={values.department}
          onChange={(e) => set("department", e.target.value)}
          placeholder="e.g. Computer Engineering"
        />
      </Field>

      <Field label="Year of study" htmlFor="year_of_study" error={errors.year_of_study}>
        <select
          id="year_of_study"
          className={inputClass}
          value={values.year_of_study}
          onChange={(e) => set("year_of_study", e.target.value)}
        >
          <option value="">Select year</option>
          {YEARS.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </Field>

      {kind === "event" && eventName ? (
        <Field label="Event" htmlFor="event_name">
          <input id="event_name" className={inputClass} value={eventName} readOnly />
        </Field>
      ) : null}

      <div className="sm:col-span-2">
        {formError ? <p className="mb-2 text-sm text-destructive">{formError}</p> : null}
        <SubmitButton pending={pending}>{submitLabel}</SubmitButton>
      </div>
    </form>
  );
}
