import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

const fieldClass =
  "w-full max-w-full rounded-md border border-border bg-background px-4 py-2.5 text-base text-foreground shadow-[0_1px_2px_rgba(30,34,39,0.04)] outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-muted/60 focus:border-accent focus:shadow-[0_0_0_3px_rgba(65,152,142,0.12)]";

type FieldLabelProps = {
  label: string;
  htmlFor: string;
  required?: boolean;
};

function FieldLabel({ label, htmlFor, required }: FieldLabelProps) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-foreground">
      {label}
      {required ? <span className="text-accent"> *</span> : null}
    </label>
  );
}

type InputProps = {
  label: string;
  name: string;
  required?: boolean;
} & ComponentPropsWithoutRef<"input">;

export function Input({ label, name, required, className, id, ...props }: InputProps) {
  const inputId = id ?? name;
  return (
    <div>
      <FieldLabel label={label} htmlFor={inputId} required={required} />
      <input
        id={inputId}
        name={name}
        required={required}
        className={cn(fieldClass, className)}
        {...props}
      />
    </div>
  );
}

type TextareaProps = {
  label: string;
  name: string;
  required?: boolean;
} & ComponentPropsWithoutRef<"textarea">;

export function Textarea({ label, name, required, className, id, ...props }: TextareaProps) {
  const inputId = id ?? name;
  return (
    <div>
      <FieldLabel label={label} htmlFor={inputId} required={required} />
      <textarea
        id={inputId}
        name={name}
        required={required}
        className={cn(fieldClass, "resize-y min-h-[120px]", className)}
        {...props}
      />
    </div>
  );
}

type SelectProps = {
  label: string;
  name: string;
  required?: boolean;
  children: ReactNode;
} & ComponentPropsWithoutRef<"select">;

export function Select({ label, name, required, children, className, id, ...props }: SelectProps) {
  const inputId = id ?? name;
  return (
    <div>
      <FieldLabel label={label} htmlFor={inputId} required={required} />
      <select
        id={inputId}
        name={name}
        required={required}
        className={cn(fieldClass, className)}
        {...props}
      >
        {children}
      </select>
    </div>
  );
}
