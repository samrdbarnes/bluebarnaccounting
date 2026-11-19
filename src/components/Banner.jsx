import { useDrawer } from '../context/DrawerContext.jsx'
import Button from './Button.jsx'
import Overline from './Overline.jsx'

export default function Banner() {
  const { open } = useDrawer()

  return (
    <section className="banner" aria-labelledby="banner-title">
      <Overline>Volume V</Overline>
      <h2 id="banner-title">Ready for peace of mind?</h2>
      <Button variant="secondary" href="#contact" onClick={open}>
        Get In Touch Today
      </Button>
    </section>
  )
}
