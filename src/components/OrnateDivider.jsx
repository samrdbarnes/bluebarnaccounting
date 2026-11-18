/** Gradient rule with a centred glyph. Pass onAlt when it sits on the aged-oak panel colour. */
export default function OrnateDivider({ onAlt = false }) {
  return <div className={`ornate-divider${onAlt ? ' on-alt' : ''}`} aria-hidden="true" />
}
