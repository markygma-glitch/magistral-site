import Link from 'next/link'

const services = [
  {
    icon: '🏠',
    title: 'Expertise avant achat',
    desc: 'Avant d\'acquérir un bien immobilier, faites appel à un ingénieur expert pour évaluer son état réel. Je réalise une inspection complète : structure, toiture, façades, réseaux, humidité. Vous recevez un rapport détaillé avec les points de vigilance et une estimation des travaux éventuels.',
    points: ['Visite complète du bien', 'Rapport avec photos et annotations', 'Estimation des travaux', 'Conseils pour la négociation'],
  },
  {
    icon: '🔍',
    title: 'Pathologies & désordres structurels',
    desc: 'Fissures, affaissements, déformations — ces désordres peuvent signaler des problèmes structurels sérieux. J\'analyse leur origine, leur évolution et leur gravité pour vous donner une réponse claire et des préconisations adaptées.',
    points: ['Analyse des fissures et leur classification', 'Détection des causes profondes', 'Préconisations de réparation', 'Suivi d\'évolution si nécessaire'],
  },
  {
    icon: '🌊',
    title: 'Sinistres & Cat Nat sécheresse',
    desc: 'Suite à un sinistre (inondation, sécheresse, tempête), j\'interviens pour constater les dégâts, évaluer leur étendue et vous accompagner dans vos démarches auprès des assurances. Mon rapport d\'expertise est un document opposable.',
    points: ['Constat des dommages', 'Rapport d\'expertise opposable', 'Accompagnement assurance', 'Expertise Cat Nat sécheresse'],
  },
  {
    icon: '💧',
    title: 'Humidité & infiltrations',
    desc: 'L\'humidité est l\'ennemi silencieux des bâtiments. Remontées capillaires, condensation, infiltrations en toiture ou en façade — j\'identifie la source et vous propose des solutions durables et adaptées à votre situation.',
    points: ['Diagnostic de la source d\'humidité', 'Mesures hygrométriques', 'Préconisations de traitement', 'Rapport technique détaillé'],
  },
  {
    icon: '📐',
    title: 'Diagnostic technique bâtiment',
    desc: 'Une analyse globale de l\'état de votre bâtiment : structure, enveloppe, réseaux, pathologies visibles. Idéal avant des travaux de rénovation importants ou pour connaître précisément l\'état de votre patrimoine.',
    points: ['Inspection complète du bâtiment', 'Identification des désordres', 'Hiérarchisation des priorités', 'Rapport complet avec préconisations'],
  },
  {
    icon: '💡',
    title: 'Conseil & préconisations',
    desc: 'En dehors des expertises formelles, je peux vous accompagner ponctuellement en tant que conseil technique : avis sur des travaux, lecture de devis d\'entreprise, assistance à maîtrise d\'ouvrage. Mon regard d\'ingénieur indépendant vous aide à faire les bons choix.',
    points: ['Avis technique sur travaux', 'Analyse de devis d\'entreprise', 'Assistance à maîtrise d\'ouvrage', 'Conseil patrimonial'],
  },
]

export default function Services() {
  return (
    <>
      <section style={{ background: '#2563eb', padding: '60px 24px', color: 'white' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p style={{ color: '#fcd34d', fontWeight: 600, fontSize: 14, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>Nos prestations</p>
          <h1 style={{ fontSize: 44, fontWeight: 800, marginBottom: 16 }}>Nos services d&apos;expertise</h1>
          <p style={{ opacity: 0.85, fontSize: 18, maxWidth: 560, lineHeight: 1.7 }}>
            Chaque mission donne lieu à un rapport technique détaillé, signé par un ingénieur qualifié.
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: '#f8fafc' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 32 }}>
          {services.map(({ icon, title, desc, points }) => (
            <div key={title} style={{
              background: 'white', borderRadius: 16, padding: '36px 40px',
              border: '1px solid #e2e8f0', display: 'grid',
              gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'start'
            }}>
              <div>
                <div style={{ fontSize: 40, marginBottom: 16 }}>{icon}</div>
                <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#1e293b' }}>{title}</h2>
                <p style={{ color: '#64748b', fontSize: 15, lineHeight: 1.8 }}>{desc}</p>
              </div>
              <div>
                <p style={{ fontWeight: 600, color: '#2563eb', fontSize: 14, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 16 }}>Ce que comprend la mission</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {points.map(p => (
                    <li key={p} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 12 }}>
                      <span style={{ color: '#f59e0b', fontWeight: 700, marginTop: 2 }}>▸</span>
                      <span style={{ color: '#475569', fontSize: 15 }}>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: '#2563eb', padding: '60px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', color: 'white' }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 16 }}>Besoin d&apos;une expertise ?</h2>
          <p style={{ opacity: 0.85, fontSize: 17, marginBottom: 32 }}>Devis gratuit — Réponse sous 24h</p>
          <Link href="/contact" style={{
            background: '#f59e0b', color: '#1e293b', padding: '14px 32px',
            borderRadius: 10, fontWeight: 700, textDecoration: 'none', fontSize: 16,
            display: 'inline-block'
          }}>
            Demander un devis →
          </Link>
        </div>
      </section>
    </>
  )
}
