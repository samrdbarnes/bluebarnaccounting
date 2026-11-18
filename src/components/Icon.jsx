import { FILLED, ICON_VIEWBOX, OUTLINED } from './iconPaths.js'

/**
 * Brand icon set (Material Symbols Outlined). Outlined by default; pass `filled`
 * for active states and emphasis. Colour comes from CSS `fill`.
 */
export default function Icon({ name, filled = false, ...props }) {
  const paths = (filled ? FILLED : OUTLINED)[name]
  if (!paths) return null
  return (
    <svg viewBox={ICON_VIEWBOX} aria-hidden="true" focusable="false" {...props}>
      {paths.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  )
}
