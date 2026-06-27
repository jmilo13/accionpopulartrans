import {
  hero,
  participateIntro,
  participateOptions,
  sections,
} from '../content'
import { AccordionSection } from '../components/AccordionSection'
import { ContactSection } from '../components/ContactSection'
import { DetailSection } from '../components/DetailSection'
import { ParticipateCard } from '../components/ParticipateCard'
import { SectionContent } from '../components/SectionContent'
import { SiteHeader } from '../components/SiteHeader'

const [featuredSection, ...accordionSections] = sections

export function HomePage() {
  return (
    <>
      <SiteHeader />

      <h1 className="page-title">{hero.title}</h1>
      <p className="page-subtitle">{hero.subtitle}</p>

      <DetailSection
        title={featuredSection.title}
        variant={featuredSection.variant}
      >
        <SectionContent section={featuredSection} />
      </DetailSection>

      <AccordionSection sections={accordionSections} />

      <hr className="home-divider" />

      <section id="participar">
        <h2 className="page-title">¿Cómo participar?</h2>
        <p className="participate-section__intro">{participateIntro}</p>
        {participateOptions.map((option) => (
          <ParticipateCard key={option.id} option={option} />
        ))}
      </section>

      <ContactSection />
    </>
  )
}
