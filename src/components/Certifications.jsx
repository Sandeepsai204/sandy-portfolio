import { certifications } from '../data.js'
import Reveal from './Reveal.jsx'
import Section from './Section.jsx'
import { ArrowIcon } from './Icons.jsx'

export default function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Certifications">
      <div className="certs">
        {certifications.map((c, i) => (
          <Reveal key={c.name} className="card cert" delay={i * 80}>
            <div className="cert__badge" aria-hidden="true">✓</div>
            <div className="cert__body">
              <h3>{c.name}</h3>
              <p className="muted">{c.issuer}</p>
            </div>
            <a href={c.url} target="_blank" rel="noreferrer" className="btn btn--ghost btn--sm">
              View credential <ArrowIcon width={16} height={16} />
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
