import type { ContentSection } from '../content'
import { SectionContent } from './SectionContent'

interface AccordionSectionProps {
  sections: ContentSection[]
}

export function AccordionSection({ sections }: AccordionSectionProps) {
  return (
    <div className="accordion">
      {sections.map((section) => (
        <details key={section.id} className="accordion__item">
          <summary className="accordion__summary">{section.title}</summary>
          <div className="accordion__panel">
            <SectionContent section={section} />
          </div>
        </details>
      ))}
    </div>
  )
}
