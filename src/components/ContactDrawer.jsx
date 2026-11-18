import { useEffect, useRef, useState } from 'react'
import { useDrawer } from '../context/DrawerContext.jsx'
import Button from './Button.jsx'
import Icon from './Icon.jsx'
import Overline from './Overline.jsx'
import OrnateDivider from './OrnateDivider.jsx'

const FOCUSABLE = 'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])'

function Field({ id, label, inputRef, multiline = false, ...props }) {
  const Control = multiline ? 'textarea' : 'input'
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <Control id={id} ref={inputRef} {...props} />
    </div>
  )
}

/**
 * Right-hand slide-out contact form.
 * Pass `onSubmit(data)` to send the message somewhere (your API, Formspree, etc.).
 */
export default function ContactDrawer({ onSubmit }) {
  const { isOpen, close } = useDrawer()
  const [submitted, setSubmitted] = useState(false)
  const drawerRef = useRef(null)
  const firstFieldRef = useRef(null)

  // Open: reset to a fresh form, lock page scroll, focus the first field, close on Escape.
  useEffect(() => {
    if (!isOpen) return undefined

    setSubmitted(false)
    document.body.style.overflow = 'hidden'
    const focusTimer = setTimeout(() => firstFieldRef.current?.focus(), 300)

    const onKeyDown = (event) => {
      if (event.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKeyDown)

    return () => {
      clearTimeout(focusTimer)
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, close])

  // Keep Tab / Shift+Tab inside the open drawer.
  const trapFocus = (event) => {
    if (event.key !== 'Tab' || !drawerRef.current) return
    const focusable = drawerRef.current.querySelectorAll(FOCUSABLE)
    if (focusable.length === 0) return
    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.currentTarget))
    onSubmit?.(data)
    setSubmitted(true)
  }

  return (
    <>
      <div className={`drawer-backdrop${isOpen ? ' open' : ''}`} onClick={close} aria-hidden="true" />
      <aside
        ref={drawerRef}
        className={`drawer${isOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
        aria-hidden={!isOpen}
        onKeyDown={trapFocus}
      >
        <div className="drawer-inner">
          <button type="button" className="drawer-close" aria-label="Close contact form" onClick={close}>
            <Icon name="close" />
          </button>

          <Overline>Get Strategic</Overline>
          <h2 id="drawer-title">Let's talk</h2>
          <p className="drawer-sub">
            Tell us a little about your business, and we'll follow up within one business day.
          </p>
          <OrnateDivider />

          {submitted ? (
            <div className="drawer-success" role="status">
              <div className="card-icon">
                <Icon name="check" />
              </div>
              <h3>Message received</h3>
              <p>Thank you for reaching out. A member of our team will be in touch within one business day.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <Field id="cf-name" name="name" label="Name" type="text" placeholder="Your full name" required inputRef={firstFieldRef} />
              <Field id="cf-email" name="email" label="Email" type="email" placeholder="you@company.com" required />
              <Field id="cf-company" name="company" label="Company" type="text" placeholder="Business name" />
              <Field
                id="cf-message"
                name="message"
                label="How can we help?"
                multiline
                placeholder="A bit about where your business is today, and where you'd like it to go."
                required
              />
              <Button type="submit">Send Message</Button>
            </form>
          )}
        </div>
      </aside>
    </>
  )
}
