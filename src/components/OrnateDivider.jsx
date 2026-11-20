import StarMark from './StarMark.jsx'

/** Left-aligned rule that starts with the Tabulae star. */
export default function OrnateDivider() {
  return (
    <div className="ornate-divider" aria-hidden="true">
      <StarMark flat />
    </div>
  )
}
