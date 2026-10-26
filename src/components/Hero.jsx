import { profile, stats } from '../data.js'
import Reveal from './Reveal.jsx'
import { ArrowIcon, DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon, PinIcon } from './Icons.jsx'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <span className="badge">
            <span className="badge__dot" /> Open to new opportunities
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="hero__title">
            Hi, I'm {profile.name.split(' ')[0]}.
            <br />
            <span className="gradient-text">I build enterprise apps &amp; AI tools.</span>
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="hero__role">
            {profile.role} <span className="muted">·</span> <span className="mono">{profile.tagline}</span>
          </p>
          <p className="hero__summary">{profile.summary}</p>
        </Reveal>
        <Reveal delay={240} className="hero__cta">
          <a href="#projects" className="btn btn--primary">
            View my work <ArrowIcon width={18} height={18} />
          </a>
          <a href={profile.resume} className="btn btn--ghost" download>
            <DownloadIcon width={18} height={18} /> Download resume
          </a>
        </Reveal>
        <Reveal delay={320} className="hero__meta">
          <span className="hero__loc">
            <PinIcon width={16} height={16} /> {profile.location}
          </span>
          <div className="socials">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email"><MailIcon /></a>
          </div>
        </Reveal>

        <div className="stats">
          {stats.map((s, i) => (
            <Reveal key={s.label} className="stat" delay={i * 80}>
              <strong className="gradient-text">{s.value}</strong>
              <span>{s.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
