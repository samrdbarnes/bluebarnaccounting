import { useDrawer } from '../context/DrawerContext.jsx'
import Button from './Button.jsx'
import Overline from './Overline.jsx'

export default function CtaSection() {
  const { open } = useDrawer()

  return (
    <section className="cta" id="contact" aria-labelledby="cta-title">
      <Overline>Get Started</Overline>
      <h2 id="cta-title">Let's put your mind at ease</h2>
      <p>
        Tell us about your business and we'll show you how accurate books, clear reports, and steady guidance bring
        peace of mind.
      </p>
      <Button href="#contact" onClick={open}>
        Get in Touch
      </Button>
    </section>
  )
}
