import { profile } from '../data.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p className="muted">Built with React &amp; Vite · Deployed on Vercel</p>
      </div>
    </footer>
  )
}
