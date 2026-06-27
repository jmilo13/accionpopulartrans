import type { ContentSection } from '../content'

interface SectionContentProps {
  section: ContentSection
}

export function SectionContent({ section }: SectionContentProps) {
  return (
    <>
      {section.paragraphs.map((paragraph) => (
        <p key={paragraph} className="detail-section__text">
          {paragraph}
        </p>
      ))}
      {section.bullets && (
        <ul>
          {section.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      {section.legalRef && <p className="legal-ref">{section.legalRef}</p>}
    </>
  )
}
