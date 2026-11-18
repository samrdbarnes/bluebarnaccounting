/**
 * Brass button. Renders an <a> when given an href, otherwise a <button>.
 * variant: "primary" (brass gradient) | "secondary" (outlined, turns cerulean on hover)
 */
export default function Button({ variant = 'primary', href, className = '', children, ...rest }) {
  const classes = ['btn', `btn-${variant}`, className].filter(Boolean).join(' ')

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  )
}
