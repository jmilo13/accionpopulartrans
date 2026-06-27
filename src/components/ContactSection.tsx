import { contactPlaceholder } from '../content'

export function ContactSection() {
  return (
    <section className="contact-section" aria-labelledby="contact-heading">
      <div className="contact-section__inner">
        <h2 className="contact-section__title" id="contact-heading">
          {contactPlaceholder.title}
        </h2>
        <p className="contact-section__message">{contactPlaceholder.message}</p>
      </div>
    </section>
  )
}
