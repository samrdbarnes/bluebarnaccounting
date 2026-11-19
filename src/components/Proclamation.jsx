import Overline from './Overline.jsx'
import OrnateDivider from './OrnateDivider.jsx'

/** Two-column manifesto: title and divider on the left (25%), copy with a drop cap on the right. */
export default function Proclamation() {
  return (
    <section className="proclamation" aria-labelledby="proclamation-title">
      <div className="wrap proclamation-inner">
        <div className="proclamation-head">
          <Overline>Our Philosophy</Overline>
          <h2 id="proclamation-title">Clear books, calm decisions</h2>
          <OrnateDivider />
        </div>
        <div className="proclamation-body">
          <p>
            Whether you are running a job site, a clinic, or an engineering team on a federal grant, the money has to
            be right, and you have to know it is. Tabulae Financial keeps your books and delivers financial reporting,
            asset tracking, insights, financial governance, and advisory, so you can rest easy about every dollar and
            cent.
          </p>
          <p>
            We work as a long-term partner, not a back office: reading the ledger, explaining it in plain language, and
            helping you act on it with confidence. Four values guide how we do that.
          </p>
          <p className="values" aria-label="Our values">
            <span>Honesty.</span> <span>Reason.</span> <span>Hard work.</span> <span>Relationships.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
