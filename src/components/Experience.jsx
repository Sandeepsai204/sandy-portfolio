import { experience } from '../data.js'
import Reveal from './Reveal.jsx'
import Section from './Section.jsx'

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked">
      <div className="timeline">
        {experience.map((job) => (
          <Reveal key={job.company} className="timeline__item">
            <div className="timeline__dot" aria-hidden="true" />
            <div className="card job">
              <div className="job__head">
                <div>
                  <h3>{job.role}</h3>
                  <p className="job__company">{job.company}</p>
                </div>
                <div className="job__meta">
                  <span className="pill">{job.period}</span>
                  <span className="muted">{job.location}</span>
                </div>
              </div>
              <ul className="job__list">
                {job.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
