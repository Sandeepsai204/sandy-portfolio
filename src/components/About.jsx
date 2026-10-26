import { about } from '../data.js'
import Reveal from './Reveal.jsx'
import Section from './Section.jsx'

const focus = [
  { title: 'Full stack ownership', text: 'React front-ends, Node.js / FastAPI services and SQL data layers — end to end.' },
  { title: 'GenAI in production', text: 'RAG pipelines for resume–JD matching and an HR policy chatbot.' },
  { title: 'Workflow automation', text: 'Approval and document systems with RBAC, SharePoint and Power Automate.' },
]

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="A bit about me">
      <div className="about">
        <Reveal className="about__text">
          {about.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
        </Reveal>
        <div className="about__focus">
          {focus.map((f, i) => (
            <Reveal key={f.title} className="card focus-card" delay={i * 80}>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
