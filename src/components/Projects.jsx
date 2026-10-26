import { projects } from '../data.js'
import Reveal from './Reveal.jsx'
import Section from './Section.jsx'

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Things I've built">
      <div className="projects">
        {projects.map((p, i) => (
          <Reveal
            as="article"
            key={p.title}
            className={`card project ${p.featured ? 'project--featured' : ''}`}
            delay={(i % 2) * 80}
          >
            <div className="project__top">
              <div>
                {p.featured && <span className="eyebrow eyebrow--sm">AI-powered</span>}
                <h3>{p.title}</h3>
                <p className="project__subtitle">{p.subtitle}</p>
              </div>
              {p.metric && (
                <div className="project__metric">
                  <strong className="gradient-text">{p.metric}</strong>
                  <span>{p.metricLabel}</span>
                </div>
              )}
            </div>
            <p className="project__desc">{p.description}</p>
            {p.points && (
              <ul className="project__points">
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            )}
            <div className="project__foot">
              <ul className="tags" aria-label="Technologies">
                {p.tech.map((t) => (
                  <li key={t} className="tag">{t}</li>
                ))}
              </ul>
              <p className="project__role muted">
                {p.role} · {p.client}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal as="p" className="note muted">
        These are client and internal projects delivered at ABSYZ, so the source code is under NDA. Happy to walk through the architecture in an interview.
      </Reveal>
    </Section>
  )
}
