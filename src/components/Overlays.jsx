/** Fixed atmospheric layers: aged-paper grain and a soft library vignette. */
export default function Overlays() {
  return (
    <>
      <svg className="texture-overlay" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <filter id="paper-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#paper-noise)" />
      </svg>
      <div className="vignette-overlay" aria-hidden="true" />
    </>
  )
}
