import { site } from '../data/content.js'
import logo from '../assets/blue-barn-logo.svg'

export default function Brand() {
  return (
    <a href="#" className="brand" aria-label={`${site.name}, home`}>
      <img className="brand-logo" src={logo} alt="" width="226" height="30" />
    </a>
  )
}
