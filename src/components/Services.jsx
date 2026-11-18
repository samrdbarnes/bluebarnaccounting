import { services } from '../data/content.js'
import { toRoman } from '../utils/roman.js'
import Icon from './Icon.jsx'
import SectionHead from './SectionHead.jsx'

function ServiceCard({ numeral, icon, title, body, featured }) {
  return (
    <article className={`card${featured ? ' featured' : ''}`}>
      {featured && (
        <div className="wax-seal" aria-hidden="true">
          <Icon name="star" />
        </div>
      )}
      <span className="roman" aria-hidden="true">
        {numeral}
      </span>
      <div className="card-icon">
        <Icon name={icon} />
      </div>
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  )
}

export default function Services() {
  return (
    <section className="services" id="services" aria-labelledby="services-title">
      <div className="wrap">
        <SectionHead overline="Volume II · What We Offer" title="Advisory built for growing businesses" titleId="services-title">
          Five disciplines, one continuous view of your company's financial health.
        </SectionHead>
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={service.title} numeral={toRoman(index + 1)} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
