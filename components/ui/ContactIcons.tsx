type ContactIconProps = {
  className?: string;
};

export function PhoneIcon({ className = "size-[18px]" }: ContactIconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
      <path
        d="M5.5 3.5h2l1.2 3-1.6 1.1a9.5 9.5 0 0 0 4.3 4.3L12.5 10l3 1.2v2a1 1 0 0 1-1 1A12.5 12.5 0 0 1 3.5 5.5a1 1 0 0 1 1-2Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MailIcon({ className = "size-[18px]" }: ContactIconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
      <rect
        x="2.75"
        y="4.25"
        width="14.5"
        height="11.5"
        rx="1.75"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="m3.5 5 5.27 4.22a2 2 0 0 0 2.46 0L16.5 5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowRightIcon({ className = "size-4" }: ContactIconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" className={className}>
      <path
        d="M3 8h10M9.5 4.5 13 8l-3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
