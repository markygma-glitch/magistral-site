import Link from 'next/link'

const services = [
  { icon: '🏠', title: 'Expertise avant achat', desc: 'Évaluez l\'état réel d\'un bien avant acquisition pour éviter les mauvaises surprises.' },
  { icon: '🔍', title: 'Pathologies & désordres structurels', desc: 'Diagnostic des fissures, affaissements et désordres constructifs.' },
  { icon: '🌊', title: 'Sinistres & Cat Nat sécheresse', desc: 'Expertise des dommages liés aux catastrophes naturelles et sinistres.' },
  { icon: '💧', title: 'Humidité & infiltrations', desc: 'Identification des sources d\'humidité et préconisations de traitement.' },
  { icon: '📐', title: 'Diagnostic technique bâtiment', desc: 'Analyse complète de l\'état d\'un bâtiment, pathologies et risques.' },
  { icon: '💡', title: 'Conseil & préconisations', desc: 'Accompagnement technique et recommandations pour vos travaux.' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 60%, #3b82f6 100%)', color: 'white', padding: '80px 24px 100px', position: 'relative', overflow: 'hidden' }}>
        {/* Filigrane maisons — identique à la carte de visite */}
        <svg style={{ position: 'absolute', top: 0, right: 0, width: '55%', height: '100%', pointerEvents: 'none' }} viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.1" fill="white">
            {/* Maison grande */}
            <polygon points="390,20 355,65 425,65"/>
            <rect x="358" y="64" width="64" height="44" rx="3"/>
            {/* Maison moyenne droite */}
            <polygon points="460,55 432,84 488,84"/>
            <rect x="435" y="83" width="50" height="34" rx="2"/>
            {/* Maison petite gauche */}
            <polygon points="340,80 316,104 364,104"/>
            <rect x="319" y="103" width="42" height="28" rx="2"/>
            {/* Petite maison fond */}
            <polygon points="420,108 404,124 436,124"/>
            <rect x="407" y="123" width="26" height="20" rx="2"/>
            {/* Maison basse */}
            <polygon points="480,118 466,130 494,130"/>
            <rect x="468" y="129" width="24" height="16" rx="2"/>
          </g>
          {/* Loupe ambrée */}
          <g opacity="0.9">
            <circle cx="400" cy="40" r="18" fill="none" stroke="#f59e0b" strokeWidth="3"/>
            <line x1="413" y1="53" x2="424" y2="64" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round"/>
          </g>
        </svg>
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'inline-block', background: 'rgba(245,158,11,0.2)', border: '1px solid rgba(245,158,11,0.4)', borderRadius: 20, padding: '6px 16px', fontSize: 13, fontWeight: 500, color: '#fcd34d', marginBottom: 24 }}>
            Ingénieur Expert Bâtiment — Occitanie
          </div>
          <h1 style={{ fontSize: 52, fontWeight: 800, lineHeight: 1.1, marginBottom: 24, maxWidth: 700 }}>
            Votre expert bâtiment<br/>
            <span style={{ color: '#f59e0b' }}>indépendant</span> en Occitanie
          </h1>
          <p style={{ fontSize: 20, opacity: 0.85, maxWidth: 560, lineHeight: 1.7, marginBottom: 40 }}>
            Diagnostic, expertise technique et conseil pour particuliers et professionnels. Des rapports rigoureux signés par un ingénieur.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/contact" style={{
              background: '#f59e0b', color: '#1e293b', padding: '14px 28px',
              borderRadius: 10, fontWeight: 700, textDecoration: 'none', fontSize: 16,
              display: 'inline-block'
            }}>
              Demander un devis
            </Link>
            <Link href="/services" style={{
              background: 'rgba(255,255,255,0.1)', color: 'white', padding: '14px 28px',
              borderRadius: 10, fontWeight: 600, textDecoration: 'none', fontSize: 16,
              border: '1px solid rgba(255,255,255,0.3)', display: 'inline-block'
            }}>
              Voir nos services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: '#1e293b', padding: '32px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {[
            { val: 'Diplômé', label: 'Ingénieur certifié' },
            { val: '48h', label: 'Délai d\'intervention' },
            { val: '100%', label: 'Indépendant & objectif' },
          ].map(({ val, label }) => (
            <div key={label} style={{ textAlign: 'center', color: 'white' }}>
              <p style={{ fontSize: 32, fontWeight: 800, color: '#f59e0b', margin: '0 0 4px' }}>{val}</p>
              <p style={{ opacity: 0.6, fontSize: 14, margin: 0 }}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: '80px 24px', background: '#f8fafc' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p style={{ color: '#2563eb', fontWeight: 600, fontSize: 14, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>Nos expertises</p>
          <h2 style={{ fontSize: 36, fontWeight: 800, marginBottom: 48, color: '#1e293b' }}>Ce que nous faisons</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {services.map(({ icon, title, desc }) => (
              <div key={title} style={{
                background: 'white', borderRadius: 16, padding: '28px 24px',
                border: '1px solid #e2e8f0', transition: 'box-shadow 0.2s',
              }}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>{icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 17, marginBottom: 10, color: '#1e293b' }}>{title}</h3>
                <p style={{ color: '#64748b', fontSize: 14, lineHeight: 1.7, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link href="/services" style={{
              background: '#2563eb', color: 'white', padding: '14px 32px',
              borderRadius: 10, fontWeight: 600, textDecoration: 'none', fontSize: 15,
              display: 'inline-block'
            }}>
              Voir tous nos services
            </Link>
          </div>
        </div>
      </section>

      {/* Pourquoi nous */}
      <section style={{ padding: '80px 24px', background: 'white' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p style={{ color: '#2563eb', fontWeight: 600, fontSize: 14, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>Pourquoi nous choisir</p>
          <h2 style={{ fontSize: 36, fontWeight: 800, marginBottom: 48, color: '#1e293b' }}>Un expert indépendant à vos côtés</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
            {[
              { title: 'Diplômé ingénieur BTP', desc: 'Des rapports techniques rigoureux et opposables, signés par un ingénieur qualifié.' },
              { title: 'Totalement indépendant', desc: 'Aucun lien avec des entreprises de travaux. Mon seul engagement est votre intérêt.' },
              { title: 'Réactif', desc: 'Intervention sous 48 à 72h sur toute l\'Occitanie pour répondre à vos urgences.' },
              { title: 'Rapports clairs', desc: 'Des conclusions précises avec photos, schémas et préconisations concrètes.' },
            ].map(({ title, desc }) => (
              <div key={title} style={{ display: 'flex', gap: 16 }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#f59e0b', marginTop: 6, flexShrink: 0 }}/>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: 17, marginBottom: 8, color: '#1e293b' }}>{title}</h3>
                  <p style={{ color: '#64748b', fontSize: 15, lineHeight: 1.7, margin: 0 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#2563eb', padding: '60px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', color: 'white' }}>
          <h2 style={{ fontSize: 36, fontWeight: 800, marginBottom: 16 }}>Besoin d&apos;un expert bâtiment ?</h2>
          <p style={{ opacity: 0.85, fontSize: 18, marginBottom: 32, lineHeight: 1.7 }}>
            Contactez-moi pour un devis gratuit et une intervention rapide.
          </p>
          <Link href="/contact" style={{
            background: '#f59e0b', color: '#1e293b', padding: '16px 36px',
            borderRadius: 10, fontWeight: 700, textDecoration: 'none', fontSize: 17,
            display: 'inline-block'
          }}>
            Prendre contact →
          </Link>
        </div>
      </section>
    </>
  )
}
