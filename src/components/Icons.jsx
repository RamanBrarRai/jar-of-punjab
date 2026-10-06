// src/components/Icons.jsx
// Central icon set — all inline SVG, styled via currentColor.

const base = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  strokeWidth: 1.6,
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function CartIcon({ className = "w-5 h-5" }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
      <circle cx="9" cy="20" r="1.5" />
      <circle cx="18" cy="20" r="1.5" />
    </svg>
  );
}

export function SearchIcon({ className = "w-5 h-5" }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

export function MenuIcon({ className = "w-6 h-6" }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon({ className = "w-6 h-6" }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function StarIcon({ filled = true, className = "w-4 h-4" }) {
  return (
    <svg
      {...base}
      className={className}
      fill={filled ? "currentColor" : "none"}
      aria-hidden="true"
    >
      <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 17l-5.2 2.6 1-5.8L3.5 9.7l5.9-.9L12 3.5Z" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.5 3.5A10.4 10.4 0 0 0 3.1 16.1L2 22l6-1.1A10.4 10.4 0 1 0 20.5 3.5Zm-8.5 17a8.6 8.6 0 0 1-4.4-1.2l-.3-.2-3.5.7.7-3.4-.2-.3a8.6 8.6 0 1 1 7.7 4.4Zm4.7-6.4c-.3-.2-1.6-.8-1.9-.9s-.4-.1-.6.1-.7.9-.9 1.1-.3.2-.6.1a7 7 0 0 1-2.1-1.3 7.9 7.9 0 0 1-1.4-1.8c-.2-.3 0-.4.1-.6l.5-.5.3-.5c.1-.2 0-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-1 2.3 5.4 5.4 0 0 0 1.2 2.9 11.6 11.6 0 0 0 4.5 4c1.9.8 2.4.7 2.8.7a2.7 2.7 0 0 0 1.7-1.2 2.1 2.1 0 0 0 .2-1.2c-.1-.2-.3-.3-.6-.4Z" />
    </svg>
  );
}

export function InstagramIcon({ className = "w-5 h-5" }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H8v-2.9h2.4V9.8c0-2.4 1.4-3.8 3.6-3.8 1 0 2 .2 2 .2v2.3h-1.1c-1.1 0-1.5.7-1.5 1.4v1.7h2.5l-.4 2.9h-2.1v7A10 10 0 0 0 22 12Z" />
    </svg>
  );
}

export function MailIcon({ className = "w-5 h-5" }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function PhoneIcon({ className = "w-5 h-5" }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M5 4h3l2 5-2 1a12 12 0 0 0 6 6l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export function MapPinIcon({ className = "w-5 h-5" }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function ClockIcon({ className = "w-5 h-5" }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function LeafIcon({ className = "w-6 h-6" }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M20 4S8 4 5 10s1 10 1 10 3-6 12-8c0 0 3-2 2-8Z" />
      <path d="M5 20c3-4 6-7 10-9" />
    </svg>
  );
}

export function JarIcon({ className = "w-6 h-6" }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M8 3h8v2.5l1.5 2v11.5A2 2 0 0 1 15.5 21h-7A2 2 0 0 1 6.5 19V7.5L8 5.5V3Z" />
      <path d="M8 8h8" />
    </svg>
  );
}

export function SparkleIcon({ className = "w-6 h-6" }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.5 5.5l2.8 2.8M15.7 15.7l2.8 2.8M5.5 18.5l2.8-2.8M15.7 8.3l2.8-2.8" />
    </svg>
  );
}

export function HeartIcon({ className = "w-6 h-6" }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z" />
    </svg>
  );
}

export function ChevronDownIcon({ className = "w-5 h-5" }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function ArrowRightIcon({ className = "w-5 h-5" }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

export function PlusIcon({ className = "w-5 h-5" }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function MinusIcon({ className = "w-5 h-5" }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M5 12h14" />
    </svg>
  );
}
