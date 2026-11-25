import React from 'react';

export default function Home() {
  return (
    <div style={styles.page}>
      {/* Navbar */}
      <header style={styles.navbar}>
        <div style={styles.containerNav}>
          <div style={styles.logo}>
            <span style={styles.logoDot}></span>
            Radar<span style={styles.accentText}>30s</span>
          </div>
          <nav style={styles.navLinks}>
            <a href="#como-funciona" style={styles.navLink}>Cómo funciona</a>
            <a href="#ejemplos" style={styles.navLink}>Ejemplos reales</a>
            <a href="#acceso" style={styles.navBtnSmall}>Probar gratis</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.container}>
          <div style={styles.badge}>⚡ Inteligencia financiera filtrada por IA</div>
          <h1 style={styles.heroTitle}>
            Separa los <span style={styles.accentText}>hechos</span> del ruido del mercado en <span style={styles.accentText}>30 segundos</span>.
          </h1>
          <p style={styles.heroSubtitle}>
            Radar30s analiza flujo de noticias, volumen anormal y lecturas técnicas (RSI, medias móviles y soportes) en cripto y acciones para entregarte un reporte directo al grano, sin humo.
          </p>
          <div style={styles.heroButtons}>
            <a href="#ejemplos" style={styles.primaryBtn}>Ver ejemplos reales</a>
            <a href="#acceso" style={styles.secondaryBtn}>Unirme a la lista de acceso</a>
          </div>
        </div>
      </section>

      {/* Características */}
      <section id="como-funciona" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>¿Por qué usar Radar30s?</h2>
          <p style={styles.sectionSubtitle}>
            Deja de perder horas leyendo hilos especulativos. Recibe solo lo que mueve el precio.
          </p>

          <div style={styles.grid3}>
            <div style={styles.card}>
              <div style={styles.icon}>🛡️</div>
              <h3 style={styles.cardTitle}>Filtro Hechos vs. Rumores</h3>
              <p style={styles.cardText}>
                Clasificamos cada catalizador: datos verificables en cadena o reportes oficiales por un lado, especulación de redes por otro.
              </p>
            </div>

            <div style={styles.card}>
              <div style={styles.icon}>📈</div>
              <h3 style={styles.cardTitle}>Lectura Técnica Instantánea</h3>
              <p style={styles.cardText}>
                Niveles clave de RSI(14), expansión de volumen 24h y zonas de soporte/resistencia resumidas en líneas claras.
              </p>
            </div>

            <div style={styles.card}>
              <div style={styles.icon}>⏱️</div>
              <h3 style={styles.cardTitle}>Lectura en 30 Segundos</h3>
              <p style={styles.cardText}>
                Diseñado para revisarse antes de abrir el gráfico. Sin paja, sin relleno y listo para tomar mejores decisiones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2 Ejemplos Reales */}
      <section id="ejemplos" style={styles.sectionAlt}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>2 Ejemplos reales generados por nuestra IA</h2>
          <p style={styles.sectionSubtitle}>
            Así luce exactamente un reporte diario de Radar30s en tu pantalla.
          </p>

          <div style={styles.grid2}>
            {/* Ejemplo 1 */}
            <div style={styles.reportCard}>
              <div style={styles.reportHeader}>
                <span style={styles.reportTag}>EJEMPLO 1 · CRIPTO ALTA VOLATILIDAD</span>
                <span style={styles.reportTickers}>BTCUSDT · SOLUSDT</span>
              </div>

              <div style={styles.reportBlock}>
                <h4 style={styles.reportSubheading}>1. Hechos y Rumores</h4>
                <ul style={styles.reportList}>
                  <li>
                    <span style={styles.tagFact}>[HECHO]</span> Pares al contado registran picos de volumen superiores al 2x de su promedio de 24h en los últimos 60 minutos.
                  </li>
                  <li>
                    <span style={styles.tagFact}>[HECHO]</span> Actualizaciones técnicas y anuncios de liquidez en redes principales sin cambios de protocolo aún activos.
                  </li>
                  <li>
                    <span style={styles.tagRumor}>[RUMOR]</span> Comentarios en foros proyectan rupturas inmediatas al alza basadas solo en capturas de órdenes aisladas.
                  </li>
                </ul>
              </div>

              <div style={styles.reportBlock}>
                <h4 style={styles.reportSubheading}>2. Lectura Técnica</h4>
                <p style={styles.reportPanorama}>
                  <strong>Panorama:</strong> Momentum alcista de corto plazo con expansión de volumen; vigilar zonas de sobrecompra antes de entradas tardías.
                </p>
                <div style={styles.tickerBox}>
                  <strong>BTCUSDT:</strong> Sobre MA20 con <strong>RSI(14) en 68</strong> y volumen 24h <strong>+34%</strong>; resistencia en máximo intradía.
                </div>
                <div style={styles.tickerBox}>
                  <strong>SOLUSDT:</strong> Impulso fuerte con <strong>RSI(14) en 74</strong> y volumen 24h <strong>+62%</strong>; riesgo de retroceso si pierde soporte inmediato.
                </div>
              </div>
            </div>

            {/* Ejemplo 2 */}
            <div style={styles.reportCard}>
              <div style={styles.reportHeader}>
                <span style={styles.reportTag}>EJEMPLO 2 · ACCIONES Y CRIPTO MIXTO</span>
                <span style={styles.reportTickers}>NVDA · AAPL · ETHUSDT</span>
              </div>

              <div style={styles.reportBlock}>
                <h4 style={styles.reportSubheading}>1. Hechos y Rumores</h4>
                <ul style={styles.reportList}>
                  <li>
                    <span style={styles.tagFact}>[HECHO]</span> Resultados trimestrales y guías corporativas generan rangos amplios en acciones tecnológicas.
                  </li>
                  <li>
                    <span style={styles.tagFact}>[HECHO]</span> Mayor dispersión entre máximos y mínimos durante la primera hora de apertura.
                  </li>
                  <li>
                    <span style={styles.tagRumor}>[RUMOR]</span> Especulación en redes sobre rotaciones sectoriales sin confirmación en flujos institucionales cerrados.
                  </li>
                </ul>
              </div>

              <div style={styles.reportBlock}>
                <h4 style={styles.reportSubheading}>2. Lectura Técnica</h4>
                <p style={styles.reportPanorama}>
                  <strong>Panorama:</strong> Escenario mixto con activos en tendencia y otros en rango lateral; RSI(14) filtra continuación sana de agotamiento.
                </p>
                <div style={styles.tickerBox}>
                  <strong>NVDA:</strong> Estructura alcista con <strong>RSI(14) en 64</strong> y volumen relativo alto; vigilar reacción en soporte de sesión.
                </div>
                <div style={styles.tickerBox}>
                  <strong>AAPL:</strong> Rango lateral estrecho con <strong>RSI(14) en 49</strong>; neutral hasta romper extremos.
                </div>
                <div style={styles.tickerBox}>
                  <strong>ETHUSDT:</strong> Rebote técnico cerca de soporte con <strong>RSI(14) en 31</strong> y volumen <strong>+21%</strong>.
                </div>
              </div>
            </div>
          </div>

          <p style={styles.disclaimer}>
            * Los reportes mostrados son ejemplos ilustrativos del formato generado por IA y tienen fines exclusivamente informativos, no constituyen asesoría financiera.
          </p>
        </div>
      </section>

      {/* CTA Final */}
      <section id="acceso" style={styles.ctaSection}>
        <div style={styles.container}>
          <div style={styles.ctaBox}>
            <h2 style={styles.ctaTitle}>Recibe el Radar diario antes de operar</h2>
            <p style={styles.ctaText}>
              Únete al acceso anticipado de Radar30s y obtén lecturas limpias de hechos, rumores y niveles técnicos.
            </p>
            <div style={styles.ctaForm}>
              <input
                type="email"
                placeholder="tu@correo.com"
                style={styles.input}
              />
              <button style={styles.primaryBtn}>Solicitar acceso</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.container}>
          <p>© 2026 Radar30s · Inteligencia de mercado en 30 segundos.</p>
        </div>
      </footer>
    </div>
  );
}

const styles = {
  page: {
    backgroundColor: '#090d16',
    color: '#f1f5f9',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    minHeight: '100vh',
    margin: 0,
    padding: 0,
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '0 20px',
  },
  containerNav: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '16px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navbar: {
    borderBottom: '1px solid #1e293b',
    backgroundColor: 'rgba(9, 13, 22, 0.9)',
    position: 'sticky',
    top: 0,
    zIndex: 50,
  },
  logo: {
    fontSize: '1.35rem',
    fontWeight: '800',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    letterSpacing: '-0.5px',
  },
  logoDot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: '#10b981',
    display: 'inline-block',
  },
  accentText: {
    color: '#10b981',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  navLink: {
    color: '#94a3b8',
    textDecoration: 'none',
    fontSize: '0.95rem',
  },
  navBtnSmall: {
    backgroundColor: '#10b981',
    color: '#042f2e',
    padding: '8px 16px',
    borderRadius: '8px',
    fontWeight: '700',
    textDecoration: 'none',
    fontSize: '0.9rem',
  },
  hero: {
    padding: '80px 0 64px',
    textAlign: 'center',
  },
  badge: {
    display: 'inline-block',
    backgroundColor: 'rgba(16, 185, 129, 0.12)',
    color: '#34d399',
    border: '1px solid rgba(16, 185, 129, 0.3)',
    padding: '6px 14px',
    borderRadius: '999px',
    fontSize: '0.85rem',
    fontWeight: '600',
    marginBottom: '20px',
  },
  heroTitle: {
    fontSize: 'clamp(2.1rem, 5vw, 3.4rem)',
    fontWeight: '800',
    lineHeight: 1.15,
    maxWidth: '820px',
    margin: '0 auto 20px',
    letterSpacing: '-1px',
  },
  heroSubtitle: {
    fontSize: '1.12rem',
    color: '#94a3b8',
    maxWidth: '660px',
    margin: '0 auto 32px',
    lineHeight: 1.6,
  },
  heroButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '14px',
    flexWrap: 'wrap',
  },
  primaryBtn: {
    backgroundColor: '#10b981',
    color: '#042f2e',
    padding: '13px 24px',
    borderRadius: '10px',
    fontWeight: '700',
    textDecoration: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  secondaryBtn: {
    backgroundColor: '#1e293b',
    color: '#f8fafc',
    padding: '13px 24px',
    borderRadius: '10px',
    fontWeight: '600',
    textDecoration: 'none',
    border: '1px solid #334155',
    fontSize: '1rem',
  },
  section: {
    padding: '64px 0',
  },
  sectionAlt: {
    padding: '64px 0',
    backgroundColor: '#0d1322',
    borderTop: '1px solid #1e293b',
    borderBottom: '1px solid #1e293b',
  },
  sectionTitle: {
    fontSize: '2rem',
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: '10px',
  },
  sectionSubtitle: {
    textAlign: 'center',
    color: '#94a3b8',
    marginBottom: '42px',
    fontSize: '1.05rem',
  },
  grid3: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
    gap: '20px',
  },
  card: {
    backgroundColor: '#111827',
    border: '1px solid #1e293b',
    borderRadius: '14px',
    padding: '26px',
  },
  icon: {
    fontSize: '1.8rem',
    marginBottom: '12px',
  },
  cardTitle: {
    fontSize: '1.2rem',
    fontWeight: '700',
    marginBottom: '8px',
  },
  cardText: {
    color: '#94a3b8',
    lineHeight: 1.55,
    fontSize: '0.95rem',
  },
  grid2: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '24px',
  },
  reportCard: {
    backgroundColor: '#090d16',
    border: '1px solid #1e293b',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.35)',
  },
  reportHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '8px',
    borderBottom: '1px solid #1e293b',
    paddingBottom: '12px',
    marginBottom: '16px',
  },
  reportTag: {
    fontSize: '0.75rem',
    fontWeight: '700',
    color: '#34d399',
    letterSpacing: '0.5px',
  },
  reportTickers: {
    fontSize: '0.8rem',
    fontWeight: '700',
    backgroundColor: '#1e293b',
    padding: '4px 10px',
    borderRadius: '6px',
    color: '#e2e8f0',
  },
  reportBlock: {
    marginBottom: '18px',
  },
  reportSubheading: {
    fontSize: '1rem',
    fontWeight: '700',
    color: '#f8fafc',
    marginBottom: '10px',
  },
  reportList: {
    paddingLeft: '18px',
    margin: 0,
    color: '#cbd5e1',
    fontSize: '0.92rem',
    lineHeight: 1.55,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  tagFact: {
    color: '#34d399',
    fontWeight: '700',
    marginRight: '6px',
  },
  tagRumor: {
    color: '#fbbf24',
    fontWeight: '700',
    marginRight: '6px',
  },
  reportPanorama: {
    fontSize: '0.92rem',
    color: '#cbd5e1',
    marginBottom: '10px',
    lineHeight: 1.5,
  },
  tickerBox: {
    backgroundColor: '#111827',
    borderLeft: '3px solid #10b981',
    padding: '8px 12px',
    borderRadius: '6px',
    fontSize: '0.88rem',
    color: '#e2e8f0',
    marginBottom: '8px',
    lineHeight: 1.45,
  },
  disclaimer: {
    textAlign: 'center',
    color: '#64748b',
    fontSize: '0.82rem',
    marginTop: '24px',
  },
  ctaSection: {
    padding: '64px 0',
  },
  ctaBox: {
    backgroundColor: '#111827',
    border: '1px solid #1e293b',
    borderRadius: '18px',
    padding: '44px 24px',
    textAlign: 'center',
  },
  ctaTitle: {
    fontSize: '1.8rem',
    fontWeight: '800',
    marginBottom: '10px',
  },
  ctaText: {
    color: '#94a3b8',
    maxWidth: '540px',
    margin: '0 auto 24px',
  },
  ctaForm: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    flexWrap: 'wrap',
  },
  input: {
    padding: '13px 16px',
    borderRadius: '10px',
    border: '1px solid #334155',
    backgroundColor: '#090d16',
    color: '#f8fafc',
    minWidth: '250px',
    fontSize: '1rem',
  },
  footer: {
    borderTop: '1px solid #1e293b',
    padding: '24px 0',
    textAlign: 'center',
    color: '#64748b',
    fontSize: '0.9rem',
  },
};