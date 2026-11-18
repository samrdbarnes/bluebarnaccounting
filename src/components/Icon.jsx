// Thin-line icon set. Sharp joins and flat caps to match the square-cornered design.
const PATHS = {
  building: <path d="M3 21h18M6 21V9l6-4 6 4v12M9 21v-6h6v6" />,
  wave: (
    <>
      <path d="M3 6h18M3 12h18M3 18h18" />
      <path d="M3 12c3 4 6-4 9 0s6-4 9 0" />
    </>
  ),
  bars: <path d="M4 19V9M10 19V5M16 19v-7M22 19H2" />,
  clock: (
    <>
      <rect x="3" y="3" width="18" height="18" />
      <path d="M12 7v5l3 3" />
    </>
  ),
  chart: <path d="M3 3v18h18M7 15l4-4 3 3 5-6" />,
  house: <path d="M3 21h18M5 21V10l7-6 7 6v11M9 21v-6h6v6" />,
  spa: <path d="M12 2a5 5 0 015 5c0 3-2 5-2 5H9s-2-2-2-5a5 5 0 015-5zM7 22h10M9 12v10M15 12v10" />,
  cube: <path d="M12 2l9 4.5v11L12 22l-9-4.5v-11z M12 22V11.5 M3 6.5l9 5 9-5" />,
  star: <path d="M12 2l2.9 6.3L22 9l-5 5.1L18.2 22 12 18.3 5.8 22 7 14.1 2 9l7.1-.7z" />,
  chevron: <path d="M6 9l6 6 6-6" />,
  check: <path d="M5 13l4 4L19 7" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  menu: <path d="M3 6h18M3 12h18M3 18h18" />,
}

export default function Icon({ name, strokeWidth = 1.5, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="butt"
      strokeLinejoin="miter"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {PATHS[name]}
    </svg>
  )
}
