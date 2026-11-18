import Overline from './Overline.jsx'

/** Centred section intro: overline, h2 and an optional supporting paragraph. */
export default function SectionHead({ overline, title, titleId, children }) {
  return (
    <div className="section-head">
      <Overline>{overline}</Overline>
      <h2 id={titleId}>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  )
}
