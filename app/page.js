'use client';

import React, { useState } from 'react';

// Bloque de traducción a lenguaje claro (solo se muestra si "visible" es true)
function Traduccion({ visible, children }) {
  if (!visible) return null;
  return (
    <div style={styles.traduccion}>
      <span style={styles.traduccionLabel}>🗣️ En claro:</span> {children}
    </div>
  );
}

const glosario = [
  {
    icono: '🕯️',
    termino: 'Vela (candlestick)',
    simple:
      'Cada vela resume lo que hizo el precio en un periodo (por ejemplo, 1 hora). Si es verde, el precio cerró más arriba de donde abrió; si es roja, cerró más abajo. Las líneas finas ("mechas") muestran hasta dónde llegó el precio antes de devolverse.',
  },
  {
    icono: '🧱',
    termino: 'Soporte',
    simple:
      'Es un "piso": una zona de precio donde históricamente los compradores aparecen y el precio suele rebotar. Si el piso se rompe, el precio puede seguir cayendo.',
  },
  {
    icono: '🚧',
    termino: 'Resistencia',
    simple:
      'Es un "techo": una zona donde los vendedores suelen frenar las subidas. Si el precio lo supera con fuerza, puede abrirse camino hacia arriba.',
  },
  {
    icono: '🧭',
    termino: 'Tendencia',
    simple:
      'Es la dirección general del precio. Alcista = va subiendo con máximos más altos; bajista = va cayendo; lateral = se mueve en un pasillo sin rumbo claro.',
  },
  {
    icono: '🌡️',
    termino: 'RSI(14)',
    simple:
      'Es un "termómetro" de 0 a 100 que mide qué tan acelerado va el precio. Arriba de 70 = muy caliente (puede enfriarse); debajo de 30 = muy golpeado (puede rebotar); cerca de 50 = equilibrio.',
  },
  {
    icono: '📊',
    termino: 'Volumen',
    simple:
      'Cuánta gente está comprando y vendiendo. Una subida con mucho volumen tiene más respaldo que una con poco.',
  },
  {
    icono: '〰️',
    termino: 'Media móvil (MA20)',
    simple:
      'Es el precio promedio de los últimos 20 periodos, dibujado como una línea suave. Si el precio está por encima, suele indicar fuerza; por debajo, debilidad.',
  },
];

export default function Home() {
  const [canal, setCanal] = useState('correo');
  const [contacto, setContacto] = useState('');
  const [estado, setEstado] = useState('idle'); // idle | loading | success | error
  const [modoSimple, setModoSimple] = useState(false);

  const FORMSPREE_URL = 'https://formspree.io/f/mnpdlyne';

  const placeholders = {
    correo: 'tu@correo.com',
    whatsapp: '+52 646 123 4567',
    telegram: '@tu_usuario',
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!contacto.trim()) return;

    setEstado('loading');
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          canal,
          contacto: contacto.trim(),
          origen: 'Radar30s Landing',
        }),
      });

      if (res.ok) {
        setEstado('success');
        setContacto('');
      } else {
        setEstado('error');
      }
    } catch {
      setEstado('error');
    }
  };

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
            <a href="#acceso" style={styles.navBtnSmall}>Acceso anticipado</a>
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
            <a href="#acceso" style={styles.primaryBtn}>Únete al acceso anticipado gratuito</a>
            <a href="#ejemplos" style={styles.secondaryBtn}>Ver ejemplos reales</a>
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

          {/* Botón traductor */}
          <div style={styles.translateWrap}>
            <button
              type="button"
              onClick={() => setModoSimple((v) => !v)}
              aria-pressed={modoSimple}
              style={modoSimple ? styles.translateBtnActive : styles.translateBtn}
            >
              {modoSimple ? '📊 Ver versión técnica' : '🧠 Traducir a lenguaje claro'}
            </button>
            <p style={styles.translateHint}>
              {modoSimple
                ? 'Mostrando explicaciones simples de velas, soportes y tendencias.'
                : '¿No dominas el análisis técnico? Te explicamos velas, soportes y tendencias en palabras simples.'}
            </p>
          </div>

          {/* Glosario (solo en modo claro) */}
          {modoSimple && (
            <div style={styles.glossaryBox}>
              <h3 style={styles.glossaryTitle}>📖 Mini glosario para entender el reporte</h3>
              <div style={styles.glossaryGrid}>
                {glosario.map((g) => (
                  <div key={g.termino} style={styles.glossaryItem}>
                    <div style={styles.glossaryTerm}>
                      <span style={{ marginRight: 8 }}>{g.icono}</span>
                      {g.termino}
                    </div>
                    <p style={styles.glossaryText}>{g.simple}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

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
                <Traduccion visible={modoSimple}>
                  El precio viene subiendo con fuerza y mucha gente está operando. Pero cuando algo sube tan rápido puede "cansarse" y devolverse, así que entrar tarde es riesgoso.
                </Traduccion>

                <div style={styles.tickerBox}>
                  <strong>BTCUSDT:</strong> Sobre MA20 con <strong>RSI(14) en 68</strong> y volumen 24h <strong>+34%</strong>; resistencia en máximo intradía.
                </div>
                <Traduccion visible={modoSimple}>
                  Bitcoin está por encima de su precio promedio reciente (buena señal de tendencia). El termómetro RSI marca 68: está caliente, cerca de la zona de euforia (70+). Se negoció 34% más de lo normal, así que el interés es real. Cerca del máximo del día hay un "techo" donde el precio podría frenarse.
                </Traduccion>

                <div style={styles.tickerBox}>
                  <strong>SOLUSDT:</strong> Impulso fuerte con <strong>RSI(14) en 74</strong> y volumen 24h <strong>+62%</strong>; riesgo de retroceso si pierde soporte inmediato.
                </div>
                <Traduccion visible={modoSimple}>
                  Solana va muy acelerada, como un auto a toda velocidad: el RSI en 74 indica sobrecalentamiento y puede venir un freno. Hay 62% más de actividad de lo normal. Si el precio rompe el "piso" (soporte) más cercano, la caída podría extenderse.
                </Traduccion>
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
                <Traduccion visible={modoSimple}>
                  Hoy no todo se mueve igual: algunos activos suben con rumbo claro y otros están "dormidos" sin dirección. El RSI ayuda a distinguir si una subida todavía tiene fuerza sana o ya se agotó.
                </Traduccion>

                <div style={styles.tickerBox}>
                  <strong>NVDA:</strong> Estructura alcista con <strong>RSI(14) en 64</strong> y volumen relativo alto; vigilar reacción en soporte de sesión.
                </div>
                <Traduccion visible={modoSimple}>
                  NVIDIA está en tendencia de subida. RSI en 64 significa buena fuerza sin llegar a la euforia. Mucho volumen = mucha gente participando. Lo clave: ver si el precio aguanta cuando baja a su "piso" del día.
                </Traduccion>

                <div style={styles.tickerBox}>
                  <strong>AAPL:</strong> Rango lateral estrecho con <strong>RSI(14) en 49</strong>; neutral hasta romper extremos.
                </div>
                <Traduccion visible={modoSimple}>
                  Apple se mueve en un "pasillo" angosto sin ir ni arriba ni abajo. RSI en 49 = equilibrio entre compradores y vendedores. No hay señal clara hasta que el precio salga del pasillo por arriba o por abajo.
                </Traduccion>

                <div style={styles.tickerBox}>
                  <strong>ETHUSDT:</strong> Rebote técnico cerca de soporte con <strong>RSI(14) en 31</strong> y volumen <strong>+21%</strong>.
                </div>
                <Traduccion visible={modoSimple}>
                  Ethereum cayó hasta una zona de "piso" (soporte) y rebotó. RSI en 31 indica que venía muy golpeado (cerca de zona de rebote). Hay 21% más de actividad. Ojo: un rebote no garantiza que la tendencia cambie.
                </Traduccion>
              </div>
            </div>
          </div>

          {modoSimple && (
            <p style={styles.disclaimer}>
              🎓 Las traducciones a lenguaje claro son explicaciones educativas para entender el formato del reporte.
            </p>
          )}

          <p style={styles.disclaimer}>
            * Los reportes mostrados son ejemplos ilustrativos del formato generado por IA y tienen fines exclusivamente informativos, no constituyen asesoría financiera.
          </p>
        </div>
      </section>

      {/* CTA Final Funcional */}
      <section id="acceso" style={styles.ctaSection}>
        <div style={styles.container}>
          <div style={styles.ctaBox}>
            <div style={styles.badge}>🚀 Cupos limitados para la beta</div>
            <h2 style={styles.ctaTitle}>Recibe el Radar diario antes de operar</h2>
            <p style={styles.ctaText}>
              Elige dónde quieres recibir tu resumen de 30 segundos cada mañana. Sin spam, 100% gratis durante el acceso anticipado.
            </p>

            {/* Selector de canal */}
            <div style={styles.channelTabs}>
              {[
                { id: 'correo', label: '✉️ Correo' },
                { id: 'whatsapp', label: '💬 WhatsApp' },
                { id: 'telegram', label: '✈️ Telegram' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setCanal(item.id);
                    setEstado('idle');
                  }}
                  style={canal === item.id ? styles.tabActive : styles.tabInactive}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} style={styles.ctaForm}>
              <input
                type={canal === 'correo' ? 'email' : 'text'}
                required
                value={contacto}
                onChange={(e) => setContacto(e.target.value)}
                placeholder={placeholders[canal]}
                style={styles.input}
              />
              <button
                type="submit"
                disabled={estado === 'loading'}
                style={styles.primaryBtn}
              >
                {estado === 'loading' ? 'Registrando...' : 'Únete al acceso anticipado gratuito'}
              </button>
            </form>

            {estado === 'success' && (
              <p style={styles.successMsg}>
                ✅ ¡Listo! Ya quedaste dentro de la lista de acceso anticipado de Radar30s.
              </p>
            )}

            {estado === 'error' && (
              <p style={styles.errorMsg}>
                ⚠️ No se pudo enviar el registro. Verifica tu conexión o el enlace de Formspree.
              </p>
            )}
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

  /* --- Traductor a lenguaje claro --- */
  translateWrap: {
    textAlign: 'center',
    marginBottom: '28px',
  },
  translateBtn: {
    backgroundColor: '#10b981',
    color: '#042f2e',
    padding: '13px 26px',
    borderRadius: '10px',
    fontWeight: '800',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    boxShadow: '0 6px 18px rgba(16, 185, 129, 0.25)',
  },
  translateBtnActive: {
    backgroundColor: 'rgba(16, 185, 129, 0.15)',
    color: '#34d399',
    padding: '13px 26px',
    borderRadius: '10px',
    fontWeight: '800',
    border: '1px solid #10b981',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  translateHint: {
    color: '#94a3b8',
    fontSize: '0.9rem',
    marginTop: '10px',
  },
  traduccion: {
    backgroundColor: 'rgba(251, 191, 36, 0.08)',
    border: '1px dashed rgba(251, 191, 36, 0.45)',
    color: '#fde68a',
    padding: '10px 12px',
    borderRadius: '8px',
    fontSize: '0.86rem',
    lineHeight: 1.5,
    margin: '-2px 0 12px',
  },
  traduccionLabel: {
    fontWeight: '800',
    color: '#fbbf24',
  },
  glossaryBox: {
    backgroundColor: '#090d16',
    border: '1px solid #1e293b',
    borderRadius: '16px',
    padding: '24px',
    marginBottom: '28px',
  },
  glossaryTitle: {
    fontSize: '1.15rem',
    fontWeight: '800',
    marginBottom: '16px',
    textAlign: 'center',
  },
  glossaryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '14px',
  },
  glossaryItem: {
    backgroundColor: '#111827',
    border: '1px solid #1e293b',
    borderRadius: '12px',
    padding: '14px 16px',
  },
  glossaryTerm: {
    fontWeight: '700',
    color: '#34d399',
    marginBottom: '6px',
    fontSize: '0.98rem',
  },
  glossaryText: {
    color: '#cbd5e1',
    fontSize: '0.88rem',
    lineHeight: 1.5,
    margin: 0,
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
    lineHeight: 1.5,
  },
  channelTabs: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '18px',
    flexWrap: 'wrap',
  },
  tabActive: {
    backgroundColor: 'rgba(16, 185, 129, 0.18)',
    color: '#34d399',
    border: '1px solid #10b981',
    padding: '8px 16px',
    borderRadius: '8px',
    fontWeight: '700',
    cursor: 'pointer',
    fontSize: '0.9rem',
  },
  tabInactive: {
    backgroundColor: '#090d16',
    color: '#94a3b8',
    border: '1px solid #334155',
    padding: '8px 16px',
    borderRadius: '8px',
    fontWeight: '600',
    cursor: 'pointer',
    fontSize: '0.9rem',
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
    minWidth: '260px',
    fontSize: '1rem',
  },
  successMsg: {
    color: '#34d399',
    marginTop: '16px',
    fontWeight: '600',
    fontSize: '0.95rem',
  },
  errorMsg: {
    color: '#f87171',
    marginTop: '16px',
    fontWeight: '600',
    fontSize: '0.95rem',
  },
  footer: {
    borderTop: '1px solid #1e293b',
    padding: '24px 0',
    textAlign: 'center',
    color: '#64748b',
    fontSize: '0.9rem',
  },
};