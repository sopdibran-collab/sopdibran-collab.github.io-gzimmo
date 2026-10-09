import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

const fieldClass =
  "w-full max-w-full min-h-12 rounded-md border border-border bg-background px-4 py-2.5 text-base text-foreground shadow-[0_1px_2px_rgba(30,34,39,0.04)] outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-muted/60 focus:border-accent-ink focus:shadow-[0_0_0_3px_rgba(47,112,104,0.16)] aria-[invalid=true]:border-danger";

type FieldLabelProps = {
  label: string;
  htmlFor: string;
  required?: boolean;
};

function FieldLabel({ label, htmlFor, required }: FieldLabelProps) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-foreground">
      {label}
      {required ? <span className="text-accent-ink"> *</span> : null}
    </label>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 text-sm text-danger">
      {message}
    </p>
  );
}

type InputProps = {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
} & ComponentPropsWithoutRef<"input">;

export function Input({ label, name, required, error, className, id, ...props }: InputProps) {
  const inputId = id ?? name;
  const errorId = `${inputId}-error`;
  return (
    <div>
      <FieldLabel label={label} htmlFor={inputId} required={required} />
      <input
        id={inputId}
        name={name}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={cn(fieldClass, className)}
        {...props}
      />
      <FieldError id={errorId} message={error} />
    </div>
  );
}

type TextareaProps = {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
} & ComponentPropsWithoutRef<"textarea">;

export function Textarea({ label, name, required, error, className, id, ...props }: TextareaProps) {
  const inputId = id ?? name;
  const errorId = `${inputId}-error`;
  return (
    <div>
      <FieldLabel label={label} htmlFor={inputId} required={required} />
      <textarea
        id={inputId}
        name={name}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={cn(fieldClass, "resize-y min-h-[120px]", className)}
        {...props}
      />
      <FieldError id={errorId} message={error} />
    </div>
  );
}

type SelectProps = {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
} & ComponentPropsWithoutRef<"select">;

export function Select({
  label,
  name,
  required,
  error,
  children,
  className,
  id,
  ...props
}: SelectProps) {
  const inputId = id ?? name;
  const errorId = `${inputId}-error`;
  return (
    <div>
      <FieldLabel label={label} htmlFor={inputId} required={required} />
      <select
        id={inputId}
        name={name}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={cn(fieldClass, className)}
        {...props}
      >
        {children}
      </select>
      <FieldError id={errorId} message={error} />
    </div>
  );
}
