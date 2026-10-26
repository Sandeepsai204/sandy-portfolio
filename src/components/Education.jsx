import { education } from '../data.js'
import Reveal from './Reveal.jsx'
import Section from './Section.jsx'

export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Education">
      <div className="edu">
        {education.map((e, i) => (
          <Reveal key={e.degree} className="card edu__item" delay={i * 80}>
            <div>
              <h3>{e.degree}</h3>
              <p className="muted">{e.school}</p>
            </div>
            <div className="edu__meta">
              <span className="pill">{e.period}</span>
              <span className="edu__score">{e.score}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
