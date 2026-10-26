import { skills } from '../data.js'
import Reveal from './Reveal.jsx'
import Section from './Section.jsx'

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="My toolkit">
      <div className="skills">
        {skills.map((s, i) => (
          <Reveal key={s.group} className="card skill-group" delay={(i % 3) * 80}>
            <h3>{s.group}</h3>
            <ul className="tags">
              {s.items.map((item) => (
                <li key={item} className="tag tag--lg">{item}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
