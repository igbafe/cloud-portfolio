const paths = {
  arrowRight: <><path d="M4 12h15" /><path d="m13 5 7 7-7 7" /></>,
  arrowUpRight: <><path d="M7 17 17 7" /><path d="M7 7h10v10" /></>,
  external: <><path d="M14 4h6v6" /><path d="m20 4-9 9" /><path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6" /></>,
  github: <path fill="currentColor" stroke="none" d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.77-.24.77-.54v-2.12c-3.14.68-3.8-1.33-3.8-1.33-.5-1.3-1.22-1.65-1.22-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 1.73 2.64 1.23 3.28.94.1-.73.4-1.23.72-1.51-2.5-.29-5.13-1.26-5.13-5.56 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.44.1-3 0 0 .95-.3 3.08 1.15a10.7 10.7 0 0 1 5.61 0c2.14-1.45 3.08-1.15 3.08-1.15.62 1.56.23 2.72.12 3 .72.79 1.15 1.8 1.15 3.03 0 4.31-2.63 5.26-5.14 5.55.4.35.77 1.03.77 2.08v3.08c0 .3.2.65.78.54A11.2 11.2 0 0 0 12 .8Z" />,
  linkedin: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 10v7M8 7h.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="1" /><path d="m4 7 8 6 8-6" /></>,
  phone: <><path d="M8 3H5a2 2 0 0 0-2 2c0 8.84 7.16 16 16 16a2 2 0 0 0 2-2v-3l-5-2-2 3a14 14 0 0 1-6-6l3-2-3-6Z" /></>,
  pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  cloud: <><path d="M7.5 18H17a4 4 0 0 0 .5-8A6 6 0 0 0 6 9a4.5 4.5 0 0 0 1.5 9Z" /></>,
  layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5" /><path d="m3 16 9 5 9-5" /></>,
  server: <><rect x="3" y="4" width="18" height="7" rx="1" /><rect x="3" y="14" width="18" height="6" rx="1" /><path d="M7 7.5h.01M7 17h.01M11 7.5h6M11 17h6" /></>,
  terminal: <><path d="m4 6 6 6-6 6" /><path d="M12 18h8" /></>,
  network: <><rect x="9" y="3" width="6" height="5" rx="1" /><rect x="2" y="16" width="6" height="5" rx="1" /><rect x="16" y="16" width="6" height="5" rx="1" /><path d="M12 8v4M5 16v-4h14v4" /></>,
  code: <><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" /></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  close: <><path d="m6 6 12 12M18 6 6 18" /></>,
  check: <><path d="m5 12 4 4L19 6" /></>,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></>,
  moon: <path d="M20.7 13.2A8.5 8.5 0 0 1 10.8 3.3 8.8 8.8 0 1 0 20.7 13.2Z" />,
  briefcase: <><rect x="3" y="7" width="18" height="14" rx="1" /><path d="M8 7V4h8v3M3 12h18M10 12v2h4v-2" /></>,
  graduation: <><path d="m2 9 10-5 10 5-10 5L2 9Z" /><path d="M6 11v5c4 3 8 3 12 0v-5M22 9v7" /></>,
};

export default function Icon({ name, size = 18, className = "" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name] ?? paths.arrowUpRight}
    </svg>
  );
}
