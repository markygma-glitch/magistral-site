import Link from 'next/link'

export default function APropos() {
  return (
    <>
      <section style={{ background: '#2563eb', padding: '60px 24px', color: 'white' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p style={{ color: '#fcd34d', fontWeight: 600, fontSize: 14, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>À propos</p>
          <h1 style={{ fontSize: 44, fontWeight: 800, marginBottom: 16 }}>Marc-Antoine Grappin</h1>
          <p style={{ opacity: 0.85, fontSize: 18, maxWidth: 560, lineHeight: 1.7 }}>Ingénieur Expert Bâtiment indépendant basé en Occitanie.</p>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: 'white' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}>
          <div>
            <div style={{
              width: 120, height: 120, borderRadius: '50%',
              background: '#2563eb', display: 'flex', alignItems: 'center',
              justifyContent: 'center', marginBottom: 32
            }}>
              <span style={{ color: 'white', fontSize: 42, fontWeight: 800 }}>MAG</span>
            </div>
            <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 20, color: '#1e293b' }}>Votre interlocuteur unique</h2>
            <p style={{ color: '#64748b', fontSize: 16, lineHeight: 1.8, marginBottom: 20 }}>
              Ingénieur de formation, j&apos;ai créé MAGistral Ingénierie pour proposer une expertise bâtiment rigoureuse, indépendante et accessible à tous — particuliers comme professionnels.
            </p>
            <p style={{ color: '#64748b', fontSize: 16, lineHeight: 1.8, marginBottom: 20 }}>
              Mon positionnement est clair : je ne réalise pas de travaux, je n&apos;ai aucun lien avec des entreprises du bâtiment. Mon seul engagement est envers vous et la qualité de mon diagnostic.
            </p>
            <p style={{ color: '#64748b', fontSize: 16, lineHeight: 1.8 }}>
              Basé à Mireval (Hérault), j&apos;interviens sur toute l&apos;Occitanie avec réactivité et rigueur.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ background: '#f8fafc', borderRadius: 16, padding: '24px', border: '1px solid #e2e8f0' }}>
              <p style={{ color: '#2563eb', fontWeight: 600, fontSize: 14, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 16 }}>Formation</p>
              <p style={{ fontWeight: 700, fontSize: 18, color: '#1e293b', marginBottom: 8 }}>Diplôme d&apos;Ingénieur</p>
              <p style={{ color: '#64748b', fontSize: 15 }}>Formation technique en génie civil et construction</p>
            </div>

            <div style={{ background: '#f8fafc', borderRadius: 16, padding: '24px', border: '1px solid #e2e8f0' }}>
              <p style={{ color: '#2563eb', fontWeight: 600, fontSize: 14, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 16 }}>Zone d&apos;intervention</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {['Hérault (34)', 'Pyrénées-Orientales (66)', 'Gard (30)', 'Aude (11)', 'Haute-Garonne (31)', 'Occitanie'].map(z => (
                  <span key={z} style={{
                    background: '#dbeafe', color: '#1d4ed8',
                    padding: '4px 12px', borderRadius: 20, fontSize: 13, fontWeight: 500
                  }}>{z}</span>
                ))}
              </div>
            </div>

            <div style={{ background: '#f8fafc', borderRadius: 16, padding: '24px', border: '1px solid #e2e8f0' }}>
              <p style={{ color: '#2563eb', fontWeight: 600, fontSize: 14, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 16 }}>Engagement</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Indépendance totale',
                  'Rapports détaillés et objectifs',
                  'Réactivité sous 48h',
                  'Disponibilité et pédagogie',
                ].map(e => (
                  <li key={e} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                    <span style={{ color: '#f59e0b', fontWeight: 700 }}>✓</span>
                    <span style={{ color: '#475569', fontSize: 15 }}>{e}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: '#2563eb', padding: '60px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', color: 'white' }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 16 }}>Travaillons ensemble</h2>
          <p style={{ opacity: 0.85, fontSize: 17, marginBottom: 32 }}>Contactez-moi pour discuter de votre projet.</p>
          <Link href="/contact" style={{
            background: '#f59e0b', color: '#1e293b', padding: '14px 32px',
            borderRadius: 10, fontWeight: 700, textDecoration: 'none', fontSize: 16,
            display: 'inline-block'
          }}>
            Me contacter →
          </Link>
        </div>
      </section>
    </>
  )
}
