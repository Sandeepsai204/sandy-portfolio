import Reveal from './Reveal.jsx'

export default function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
        </Reveal>
        {children}
      </div>
    </section>
  )
}
