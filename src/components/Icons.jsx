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

export function WhatsAppIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
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


// ============================================================
// FRUIT ICONS — cute filled versions for Flavours tabs
// ============================================================

export function MangoIcon({ className = "w-6 h-6" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Mango body */}
      <path
        d="M16 28c-6 0-10-4.5-10-10.5C6 11 11 5 16 4c1 3.5 5 4.5 7 7 2.5 3 2.5 11-3 15-1.5 1-2.7 2-4 2Z"
        fill="currentColor"
        opacity="0.9"
      />
      {/* Highlight */}
      <ellipse cx="12.5" cy="13" rx="2.5" ry="3.5" fill="white" opacity="0.25" />
      {/* Stem */}
      <path
        d="M16 4c0-1.5 1.5-2.5 3.5-2.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LemonIcon({ className = "w-6 h-6" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Lemon body */}
      <ellipse cx="16" cy="18" rx="11" ry="9" fill="currentColor" opacity="0.9" />
      {/* Highlight */}
      <ellipse cx="11" cy="14" rx="3" ry="4" fill="white" opacity="0.25" />
      {/* Leaf */}
      <path
        d="M16 8c1-3 4-3 6-3-1 2-2 3-4 4"
        fill="currentColor"
      />
      <path
        d="M16 8c-1-3-4-3-6-3 1 2 2 3 4 4"
        fill="currentColor"
        opacity="0.7"
      />
      {/* Stem */}
      <path
        d="M16 9V6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ChilliIcon({ className = "w-6 h-6" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Chilli body */}
      <path
        d="M14 8c6 0 12 4 12 12 0 4-3 7-7 7-6 0-12-4-12-11 0-5 3-8 7-8Z"
        fill="currentColor"
        opacity="0.9"
      />
      {/* Highlight */}
      <ellipse cx="11" cy="18" rx="1.5" ry="4" fill="white" opacity="0.2" />
      {/* Stem */}
      <path
        d="M14 8c-1-2-1-4 0-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Stem cap */}
      <circle cx="15" cy="7" r="2" fill="currentColor" />
    </svg>
  );
}

export function AmlaIcon({ className = "w-6 h-6" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Amla body */}
      <circle cx="16" cy="18" r="11" fill="currentColor" opacity="0.9" />
      {/* Vertical lines (amla ridges) */}
      <path
        d="M16 7v22M11 8c-1 3-1.5 6-1.5 10s.5 7 1.5 10M21 8c1 3 1.5 6 1.5 10s-.5 7-1.5 10"
        stroke="white"
        strokeWidth="0.9"
        strokeLinecap="round"
        opacity="0.35"
      />
      {/* Highlight */}
      <ellipse cx="11" cy="14" rx="2" ry="3" fill="white" opacity="0.3" />
      {/* Stem */}
      <path
        d="M16 7V4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CarrotIcon({ className = "w-6 h-6" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Carrot body */}
      <path
        d="M16 30L6 14c3-1.5 6.5-2 10-2s7 .5 10 2L16 30Z"
        fill="currentColor"
        opacity="0.9"
      />
      {/* Ridges */}
      <path
        d="M12 15l1.5 3M16 17l1.5 3M10.5 20l1 2M21.5 20l-1 2M16 22l1 2"
        stroke="white"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.4"
      />
      {/* Highlight */}
      <ellipse cx="12.5" cy="18" rx="1" ry="3" fill="white" opacity="0.25" />
      {/* Leaves */}
      <path
        d="M16 12c0-3-2-5-4-5 0 2 1 4 3 5"
        fill="currentColor"
      />
      <path
        d="M16 12c0-3 2-5 4-5 0 2-1 4-3 5"
        fill="currentColor"
      />
      <path
        d="M16 12c-1-3 0-6 0-8 1 2 2 5 1 8"
        fill="currentColor"
        opacity="0.85"
      />
    </svg>
  );
}

export function MixedJarIcon({ className = "w-6 h-6" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Jar body */}
      <path
        d="M10 11h12v14a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V11Z"
        fill="currentColor"
        opacity="0.9"
      />
      {/* Jar lid */}
      <rect x="9" y="5" width="14" height="6" rx="2" fill="currentColor" />
      {/* Jar lid line */}
      <path
        d="M9 8.5h14"
        stroke="white"
        strokeWidth="0.8"
        opacity="0.3"
      />
      {/* Contents dots (mixed veggies) */}
      <circle cx="13" cy="16" r="1.5" fill="white" opacity="0.5" />
      <circle cx="19" cy="18" r="1.5" fill="white" opacity="0.5" />
      <circle cx="14" cy="21" r="1.5" fill="white" opacity="0.5" />
      <circle cx="19" cy="23" r="1.5" fill="white" opacity="0.5" />
      <circle cx="16" cy="25" r="1.2" fill="white" opacity="0.5" />
      {/* Highlight */}
      <ellipse cx="12" cy="15" rx="1" ry="3" fill="white" opacity="0.2" />
    </svg>
  );
}
