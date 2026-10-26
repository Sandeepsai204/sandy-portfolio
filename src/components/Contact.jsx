import { useState } from 'react'
import { profile } from '../data.js'
import Reveal from './Reveal.jsx'
import { CheckIcon, CopyIcon, DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from './Icons.jsx'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal className="contact card">
          <span className="eyebrow">Contact</span>
          <h2>Let's work together</h2>
          <p className="contact__lead">
            I'm open to full stack and GenAI roles. If you have an opportunity or just want to chat, my inbox is open — I usually reply within a day.
          </p>

          <div className="contact__email">
            <a href={`mailto:${profile.email}`} className="btn btn--primary">
              <MailIcon width={18} height={18} /> <span className="contact__addr">{profile.email}</span>
            </a>
            <button className="btn btn--ghost" onClick={copyEmail} aria-live="polite">
              {copied ? (
                <>
                  <CheckIcon width={18} height={18} /> Copied
                </>
              ) : (
                <>
                  <CopyIcon width={18} height={18} /> Copy email
                </>
              )}
            </button>
          </div>

          <div className="contact__links">
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><LinkedInIcon /> LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noreferrer"><GitHubIcon /> GitHub</a>
            <a href={profile.resume} download><DownloadIcon /> Resume (PDF)</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
