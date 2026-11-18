import Overline from './Overline.jsx'
import OrnateDivider from './OrnateDivider.jsx'

/** The formal "manifesto" section: centred headline, ornate divider, drop-cap body. */
export default function Proclamation() {
  return (
    <section className="proclamation" aria-labelledby="proclamation-title">
      <div className="wrap-narrow proclamation-inner">
        <Overline>Our Philosophy</Overline>
        <h2 id="proclamation-title">Financial insight, not guesswork</h2>
        <OrnateDivider onAlt />
        <div className="proclamation-body">
          <p>
            Too many owners steer their businesses by instinct alone, expanding, hiring, or investing without a clear
            view of what the numbers actually support. Blue Barn Accounting exists to close that gap. Our fractional
            CFO services bring the same rigor and foresight you'd expect from a full-time finance executive, scaled to
            fit a growing company's budget and pace.
          </p>
          <p>
            We sit alongside you as a true financial partner: reading the ledger, modeling the forecast, and
            translating both into decisions you can act on with confidence. It is advisory work grounded in craft, not
            a subscription dashboard handed off and forgotten.
          </p>
        </div>
      </div>
    </section>
  )
}
