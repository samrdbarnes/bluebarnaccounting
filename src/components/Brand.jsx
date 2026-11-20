import { site } from '../data/content.js'
import logo from '../assets/tabulae-logo.svg'

export default function Brand() {
  return (
    <a href="#" className="brand" aria-label={`${site.name}, home`}>
      <img className="brand-logo" src={logo} alt="" width="120" height="30" />
    </a>
  )
}
