import type { ReactNode } from 'react'

interface DetailSectionProps {
  title: string
  children: ReactNode
  variant?: 'default' | 'highlight' | 'legal'
}

export function DetailSection({
  title,
  children,
  variant = 'default',
}: DetailSectionProps) {
  const className =
    variant === 'highlight'
      ? 'detail-section detail-section--highlight'
      : variant === 'legal'
        ? 'detail-section detail-section--legal'
        : 'detail-section'

  return (
    <section className={className}>
      <h2 className="detail-section__title">{title}</h2>
      {children}
    </section>
  )
}
