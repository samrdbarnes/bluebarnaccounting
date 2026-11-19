import { useDrawer } from '../context/DrawerContext.jsx'
import Button from './Button.jsx'
import Overline from './Overline.jsx'

export default function Hero() {
  const { open } = useDrawer()

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-frame">
        <Overline>Volume I · Accounting &amp; Bookkeeping</Overline>
        <h1 id="hero-title">
          Peace of mind is the highest form of <em>wealth.</em>
        </h1>
        <p className="lede">
          We are an accounting and bookkeeping service for residential and commercial contractors, private medical
          practices, and astronautics teams. Financial reporting, asset tracking, insights, financial governance, and
          advisory, so you can have peace of mind about all your dollars and cents.
        </p>
        <div className="hero-actions">
          <Button href="#contact" onClick={open}>
            Schedule a Consultation
          </Button>
          <Button variant="secondary" href="#services">
            Explore Our Services
          </Button>
        </div>
      </div>
    </section>
  )
}
