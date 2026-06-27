import type { ParticipateOption } from '../content'

interface ParticipateCardProps {
  option: ParticipateOption
}

export function ParticipateCard({ option }: ParticipateCardProps) {
  const pdfUrl = `${import.meta.env.BASE_URL}${option.pdfPath}`

  return (
    <article className="participate-card">
      <h3 className="participate-card__title">{option.title}</h3>
      <p className="participate-card__description">{option.description}</p>
      <ol className="participate-card__steps">
        {option.steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
      <a
        className="participate-card__btn"
        href={pdfUrl}
        download
        target="_blank"
        rel="noopener noreferrer"
      >
        {option.pdfLabel}
      </a>
      {option.legalNote && (
        <p className="legal-note">{option.legalNote}</p>
      )}
    </article>
  )
}
