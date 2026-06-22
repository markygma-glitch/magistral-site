export default function Contact() {
  return (
    <>
      <section style={{ background: '#2563eb', padding: '60px 24px', color: 'white' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p style={{ color: '#fcd34d', fontWeight: 600, fontSize: 14, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>Contact</p>
          <h1 style={{ fontSize: 44, fontWeight: 800, marginBottom: 16 }}>Demander un devis</h1>
          <p style={{ opacity: 0.85, fontSize: 18, maxWidth: 560, lineHeight: 1.7 }}>
            Réponse sous 24h — Devis gratuit et sans engagement.
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: '#f8fafc' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60 }}>

          <div style={{ background: 'white', borderRadius: 16, padding: '40px', border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 32, color: '#1e293b' }}>Envoyez-moi un message</h2>
            <form action={`mailto:magistral.ingenierie@gmail.com`} method="GET" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div>
                <label style={{ display: 'block', fontWeight: 500, fontSize: 14, color: '#374151', marginBottom: 8 }}>Nom complet *</label>
                <input name="nom" type="text" required placeholder="Jean Dupont" style={{
                  width: '100%', padding: '12px 16px', borderRadius: 8,
                  border: '1px solid #d1d5db', fontSize: 15, outline: 'none',
                  boxSizing: 'border-box'
                }}/>
              </div>
              <div>
                <label style={{ display: 'block', fontWeight: 500, fontSize: 14, color: '#374151', marginBottom: 8 }}>Email *</label>
                <input name="email" type="email" required placeholder="jean.dupont@email.com" style={{
                  width: '100%', padding: '12px 16px', borderRadius: 8,
                  border: '1px solid #d1d5db', fontSize: 15, outline: 'none',
                  boxSizing: 'border-box'
                }}/>
              </div>
              <div>
                <label style={{ display: 'block', fontWeight: 500, fontSize: 14, color: '#374151', marginBottom: 8 }}>Téléphone</label>
                <input name="tel" type="tel" placeholder="06 XX XX XX XX" style={{
                  width: '100%', padding: '12px 16px', borderRadius: 8,
                  border: '1px solid #d1d5db', fontSize: 15, outline: 'none',
                  boxSizing: 'border-box'
                }}/>
              </div>
              <div>
                <label style={{ display: 'block', fontWeight: 500, fontSize: 14, color: '#374151', marginBottom: 8 }}>Type d&apos;expertise</label>
                <select name="type" style={{
                  width: '100%', padding: '12px 16px', borderRadius: 8,
                  border: '1px solid #d1d5db', fontSize: 15, outline: 'none',
                  background: 'white', boxSizing: 'border-box'
                }}>
                  <option value="">Sélectionner...</option>
                  <option>Expertise avant achat</option>
                  <option>Pathologies & désordres structurels</option>
                  <option>Sinistres & Cat Nat sécheresse</option>
                  <option>Humidité & infiltrations</option>
                  <option>Diagnostic technique bâtiment</option>
                  <option>Conseil & préconisations</option>
                  <option>Autre</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontWeight: 500, fontSize: 14, color: '#374151', marginBottom: 8 }}>Votre message *</label>
                <textarea name="body" required rows={5} placeholder="Décrivez votre situation et votre besoin..." style={{
                  width: '100%', padding: '12px 16px', borderRadius: 8,
                  border: '1px solid #d1d5db', fontSize: 15, outline: 'none',
                  resize: 'vertical', boxSizing: 'border-box'
                }}/>
              </div>
              <button type="submit" style={{
                background: '#2563eb', color: 'white', padding: '14px 24px',
                borderRadius: 10, fontWeight: 700, fontSize: 16, border: 'none',
                cursor: 'pointer', width: '100%'
              }}>
                Envoyer ma demande →
              </button>
            </form>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div>
              <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 24, color: '#1e293b' }}>Coordonnées</h2>
              {[
                { icon: '📱', label: 'Téléphone', val: '06 17 36 73 81', sub: 'Du lundi au vendredi, 8h-19h' },
                { icon: '✉', label: 'Email', val: 'magistral.ingenierie@gmail.com', sub: 'Réponse sous 24h' },
                { icon: '📍', label: 'Adresse', val: 'Mireval', sub: 'Interventions sur toute l\'Occitanie' },
              ].map(({ icon, label, val, sub }) => (
                <div key={label} style={{
                  display: 'flex', gap: 16, alignItems: 'flex-start',
                  background: 'white', borderRadius: 12, padding: '20px',
                  border: '1px solid #e2e8f0', marginBottom: 16
                }}>
                  <span style={{ fontSize: 24 }}>{icon}</span>
                  <div>
                    <p style={{ fontWeight: 600, color: '#1e293b', margin: '0 0 4px' }}>{label}</p>
                    <p style={{ color: '#2563eb', fontWeight: 500, margin: '0 0 4px', fontSize: 15 }}>{val}</p>
                    <p style={{ color: '#94a3b8', fontSize: 13, margin: 0 }}>{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: '#dbeafe', borderRadius: 16, padding: '24px', border: '1px solid #bfdbfe' }}>
              <p style={{ fontWeight: 700, color: '#1d4ed8', fontSize: 16, marginBottom: 8 }}>💡 Devis gratuit</p>
              <p style={{ color: '#1e40af', fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                Toute demande de devis est gratuite et sans engagement. Je vous recontacte sous 24h pour comprendre votre besoin et vous proposer une intervention adaptée.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
