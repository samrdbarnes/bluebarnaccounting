import { useId } from 'react'

/** The four-point star from the Tabulae logo. Clay-to-sand gradient by default; `flat` fills it solid copper. */
export default function StarMark({ flat = false, ...props }) {
  const id = useId()
  return (
    <svg viewBox="74.8 14.2 13 13.8" aria-hidden="true" focusable="false" {...props}>
      <defs>
        <linearGradient id={id} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="var(--copper)" />
          <stop offset="1" stopColor="var(--cream)" />
        </linearGradient>
      </defs>
      <path fill={flat ? 'var(--copper)' : `url(#${id})`} fillRule="evenodd" d="M87.38,20.2c-2.55-.49-4.51-2.46-5.02-5.06-.09-.44-.46-.75-.91-.75h0c-.45,0-.83.31-.91.76-.49,2.58-2.46,4.55-5.04,5.04-.14.03-.25.08-.36.16L75.19,21.9c.1.06.22.11.36.14,2.55.49,4.51,2.46,5.02,5.06.09.44.46.75.91.75h0c.45,0,.83-.31.91-.76.49-2.58,2.46-4.55,5.04-5.04.45-.08.76-.46.76-.91,0-.45-.31-.83-.81-.93ZM81.48,25.68c-.76-2.14-2.43-3.82-4.6-4.59,2.14-.76,3.8-2.43,4.57-4.56.76,2.14,2.43,3.82,4.6,4.59-2.14.76-3.81,2.43-4.57,4.56Z" />
    </svg>
  )
}
