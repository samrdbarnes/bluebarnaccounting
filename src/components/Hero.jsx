import { useDrawer } from '../context/DrawerContext.jsx'
import Button from './Button.jsx'
import Overline from './Overline.jsx'

export default function Hero() {
  const { open } = useDrawer()

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-frame">
        <Overline>Volume I · Financial Advisory</Overline>
        <h1 id="hero-title">
          Strategic counsel for businesses
          <br />
          <em>ready to grow with clarity.</em>
        </h1>
        <p className="lede">
          Blue Barn Accounting pairs disciplined bookkeeping with fractional CFO leadership — so every decision you
          make is backed by numbers you can trust.
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
