import { site } from '../data/content.js'

export default function Brand() {
  return (
    <a href="#" className="brand">
      <span className="brand-mark" aria-hidden="true">
        <span>B</span>
      </span>
      {site.name}
    </a>
  )
}
