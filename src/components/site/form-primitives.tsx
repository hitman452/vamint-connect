import type { ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";

export const YEARS = ["First Year", "Second Year", "Third Year", "Final Year"] as const;

export function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-primary">
        {label}
      </label>
      {children}
      {error ? <p className="text-xs font-medium text-destructive">{error}</p> : null}
    </div>
  );
}

export const inputClass =
  "w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-gold focus:ring-2 focus:ring-gold/30";

export function SubmitButton({ pending, children }: { pending: boolean; children: ReactNode }) {
  return (
    <button
      type="submit"
      disabled={pending}
      className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground shadow-card transition-opacity hover:opacity-90 disabled:opacity-60 sm:w-auto"
    >
      {pending ? "Submitting…" : children}
    </button>
  );
}

export function SuccessPanel({ title, message }: { title: string; message: string }) {
  return (
    <div className="rounded-xl border border-gold/40 bg-gold-soft p-6">
      <div className="flex items-start gap-3">
        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
        <div>
          <h3 className="font-display text-lg font-semibold text-primary">{title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{message}</p>
        </div>
      </div>
    </div>
  );
}

export function validateEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function validatePhone(value: string) {
  const digits = value.replace(/\D/g, "");
  return /^[0-9+\-\s()]+$/.test(value.trim()) && digits.length >= 10;
}
