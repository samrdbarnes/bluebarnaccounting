import { useDrawer } from '../context/DrawerContext.jsx'
import Button from './Button.jsx'
import Overline from './Overline.jsx'

export default function CtaSection() {
  const { open } = useDrawer()

  return (
    <section className="cta" id="contact" aria-labelledby="cta-title">
      <Overline>Get Strategic</Overline>
      <h2 id="cta-title">Let's talk about where your business is headed</h2>
      <p>
        Your business deserves more than a once-a-year glance at the books. Tell us where you're headed, and we'll show
        you the financial path to get there.
      </p>
      <Button href="#contact" onClick={open}>
        Get in Touch
      </Button>
    </section>
  )
}
