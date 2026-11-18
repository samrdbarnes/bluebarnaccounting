import { useId, useState } from 'react'
import { faqs } from '../data/content.js'
import Icon from './Icon.jsx'
import SectionHead from './SectionHead.jsx'

function FaqItem({ id, question, answer, isOpen, onToggle }) {
  return (
    <div className={`faq-item${isOpen ? ' open' : ''}`}>
      <h3 className="faq-heading">
        <button
          type="button"
          className="faq-q"
          id={`${id}-button`}
          aria-expanded={isOpen}
          aria-controls={`${id}-panel`}
          onClick={onToggle}
        >
          {question}
          <Icon name="chevron" />
        </button>
      </h3>
      <div className="faq-a" id={`${id}-panel`} role="region" aria-labelledby={`${id}-button`}>
        <div className="faq-a-inner">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  )
}

/** Accordion: one answer open at a time, the first open by default. */
export default function Faq() {
  const baseId = useId()
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="faq" id="faq" aria-labelledby="faq-title">
      <SectionHead overline="Volume IV · Questions" title="Frequently Asked Questions" titleId="faq-title" />
      <div className="faq-list">
        {faqs.map((item, index) => (
          <FaqItem
            key={item.question}
            id={`${baseId}-${index}`}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </section>
  )
}
