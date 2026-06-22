import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'MAGistral Ingénierie — Expert Bâtiment Occitanie',
  description: 'Ingénieur Expert Bâtiment indépendant en Occitanie. Expertise avant achat, sinistres, pathologies, humidité, diagnostic technique.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <header style={{ background: '#2563eb', position: 'sticky', top: 0, zIndex: 50, boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
            <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12 }}>
              <svg viewBox="0 0 64 64" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="64" height="64" rx="14" fill="white" fillOpacity="0.15"/>
                <polygon points="32,8 10,30 54,30" fill="white"/>
                <rect x="13" y="29" width="38" height="26" rx="2" fill="white" fillOpacity="0.95"/>
                <rect x="25" y="39" width="14" height="16" rx="2" fill="#2563eb"/>
                <circle cx="46" cy="20" r="9" stroke="#f59e0b" strokeWidth="3" fill="none"/>
                <line x1="53" y1="27" x2="59" y2="33" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round"/>
                <polyline points="43,17 46,20 44,23 47,26" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
              <span style={{ fontSize: 20, fontWeight: 800, letterSpacing: -0.5 }}>
                <span style={{ color: '#f59e0b' }}>MAG</span>
                <span style={{ color: 'white' }}>istral</span>
                <span style={{ color: 'white', fontWeight: 400, fontSize: 13, marginLeft: 8, letterSpacing: 2, opacity: 0.8 }}>INGÉNIERIE</span>
              </span>
            </Link>
            <nav style={{ display: 'flex', gap: 8 }}>
              {[
                { href: '/', label: 'Accueil' },
                { href: '/services', label: 'Services' },
                { href: '/a-propos', label: 'À propos' },
                { href: '/contact', label: 'Contact' },
              ].map(({ href, label }) => (
                <Link key={href} href={href} style={{
                  color: 'white', textDecoration: 'none', padding: '8px 14px',
                  borderRadius: 8, fontSize: 14, fontWeight: 500, opacity: 0.9,
                  transition: 'background 0.2s',
                }}>
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer style={{ background: '#1e293b', color: 'white', padding: '40px 24px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 40 }}>
            <div>
              <p style={{ fontWeight: 800, fontSize: 18, marginBottom: 8 }}>
                <span style={{ color: '#f59e0b' }}>MAG</span>istral Ingénierie
              </p>
              <p style={{ opacity: 0.6, fontSize: 14, lineHeight: 1.6 }}>Ingénieur Expert Bâtiment indépendant en Occitanie.</p>
            </div>
            <div>
              <p style={{ fontWeight: 600, marginBottom: 12, color: '#f59e0b' }}>Contact</p>
              <p style={{ opacity: 0.7, fontSize: 14, lineHeight: 2 }}>
                📱 06 17 36 73 81<br/>
                ✉ magistral.ingenierie@gmail.com<br/>
                📍 33 avenue Gambetta, 34110 Mireval
              </p>
            </div>
            <div>
              <p style={{ fontWeight: 600, marginBottom: 12, color: '#f59e0b' }}>Zone d&apos;intervention</p>
              <p style={{ opacity: 0.7, fontSize: 14, lineHeight: 2 }}>
                Occitanie<br/>
                Hérault · Pyrénées-Orientales · Gard
              </p>
            </div>
          </div>
          <div style={{ maxWidth: 1100, margin: '32px auto 0', paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.1)', opacity: 0.4, fontSize: 13, textAlign: 'center' }}>
            © {new Date().getFullYear()} MAGistral Ingénierie — Marc-Antoine Grappin · Ingénieur Expert Bâtiment
          </div>
        </footer>
      </body>
    </html>
  )
}
