import { industries } from '../data/content.js'
import Icon from './Icon.jsx'
import SectionHead from './SectionHead.jsx'

export default function Industries() {
  return (
    <section className="industries" id="industries" aria-labelledby="industries-title">
      <div className="wrap">
        <SectionHead
          overline="Volume III · Who We Serve"
          title="Accounting shaped by your industry"
          titleId="industries-title"
        >
          Generic bookkeeping rarely fits a specific business. We focus on three markets so we can speak your language.
        </SectionHead>
        <div className="industries-grid">
          {industries.map((industry) => (
            <article className="industry-card" key={industry.title}>
              <div className="arch-frame" aria-hidden="true">
                <div className="arch-fill">
                  <Icon name={industry.icon} />
                </div>
              </div>
              <h3>{industry.title}</h3>
              <p>{industry.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
