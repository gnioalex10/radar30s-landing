'use client';

import React, { useState } from 'react';

// Bloque de traducción a lenguaje claro (solo se muestra si "visible" es true)
function Traduccion({ visible, children }) {
  if (!visible) return null;
  return (
    <div style={styles.traduccion}>
      <span style={styles.traduccionLabel}>🗣️ EN CLARO //</span> {children}
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

const marqueeItems = [
  'HECHOS vs RUMORES',
  'RSI(14)',
  'VOLUMEN 24H',
  'SOPORTES',
  'RESISTENCIAS',
  'BTCUSDT',
  'SOLUSDT',
  'ETHUSDT',
  'NVDA',
  'AAPL',
  'MA20',
  'LECTURA EN 30s',
];

// Estilos globales: animaciones, hover, focus y responsive
const globalCss = `
  html { scroll-behavior: smooth; }
  body { margin: 0; background: #050507; }
  * { box-sizing: border-box; }
  ::selection { background: #ff1f3d; color: #fff; }

  @keyframes r30-pulse {
    0%   { box-shadow: 0 0 0 0 rgba(255, 31, 61, 0.7); }
    70%  { box-shadow: 0 0 0 10px rgba(255, 31, 61, 0); }
    100% { box-shadow: 0 0 0 0 rgba(255, 31, 61, 0); }
  }
  @keyframes r30-marquee {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
  @keyframes r30-float {
    0%, 100% { transform: translateY(0); }
    50%      { transform: translateY(-10px); }
  }
  @keyframes r30-scan {
    0%   { top: -10%; opacity: 0; }
    10%  { opacity: 1; }
    90%  { opacity: 1; }
    100% { top: 110%; opacity: 0; }
  }
  @keyframes r30-blink {
    0%, 100% { opacity: 1; }
    50%      { opacity: 0.25; }
  }

  .r30-dot { animation: r30-pulse 2s infinite; }
  .r30-blink { animation: r30-blink 1.2s infinite; }
  .r30-float { animation: r30-float 6s ease-in-out infinite; }
  .r30-scan { animation: r30-scan 4.5s linear infinite; }
  .r30-marquee-track { animation: r30-marquee 32s linear infinite; }

  .r30-btn { transition: transform .2s ease, box-shadow .2s ease, filter .2s ease; }
  .r30-btn:hover { transform: translateY(-2px); box-shadow: 0 0 34px rgba(255, 31, 61, 0.6) !important; filter: brightness(1.08); }
  .r30-btn:disabled { opacity: .6; cursor: not-allowed; transform: none; }

  .r30-btn-ghost { transition: all .2s ease; }
  .r30-btn-ghost:hover { border-color: #ff1f3d !important; color: #fff !important; background: rgba(255, 31, 61, 0.1) !important; }

  .r30-card { transition: transform .25s ease, border-color .25s ease, box-shadow .25s ease; }
  .r30-card:hover { transform: translateY(-5px); border-color: rgba(255, 31, 61, 0.55) !important; box-shadow: 0 14px 40px rgba(255, 31, 61, 0.14) !important; }

  .r30-navlink { transition: color .2s ease; }
  .r30-navlink:hover { color: #fff !important; }

  .r30-tab { transition: all .2s ease; }
  .r30-tab:hover { border-color: #ff1f3d !important; color: #fff !important; }

  .r30-input:focus {
    outline: none;
    border-color: #ff1f3d !important;
    box-shadow: 0 0 0 3px rgba(255, 31, 61, 0.25), 0 0 24px rgba(255, 31, 61, 0.2);
  }
  .r30-input::placeholder { color: #5b5b66; }

  @media (max-width: 760px) {
    .r30-navlinks-hide { display: none !important; }
  }
`;

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
      <style>{globalCss}</style>

      {/* Navbar */}
      <header style={styles.navbar}>
        <div style={styles.containerNav}>
          <div style={styles.logo}>
            <span className="r30-dot" style={styles.logoDot}></span>
            RADAR<span style={styles.accentSolid}>30S</span>
          </div>
          <nav style={styles.navLinks}>
            <div className="r30-navlinks-hide" style={styles.navLinksInner}>
              <a href="#como-funciona" className="r30-navlink" style={styles.navLink}>Cómo funciona</a>
              <a href="#ejemplos" className="r30-navlink" style={styles.navLink}>Ejemplos reales</a>
            </div>
            <a href="#acceso" className="r30-btn" style={styles.navBtnSmall}>Acceso anticipado</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroGrid} />
        <div style={styles.heroGlow} />
        <div style={{ ...styles.container, position: 'relative', zIndex: 2 }}>
          <div style={styles.heroLayout}>
            <div style={styles.heroLeft}>
              <div style={styles.badge}>
                <span className="r30-blink" style={styles.badgeDot}></span>
                INTELIGENCIA FINANCIERA FILTRADA POR IA
              </div>
              <h1 style={styles.heroTitle}>
                Separa los <span style={styles.accentText}>hechos</span> del ruido del mercado en{' '}
                <span style={styles.accentText}>30 segundos</span>.
              </h1>
              <p style={styles.heroSubtitle}>
                Radar30s analiza flujo de noticias, volumen anormal y lecturas técnicas (RSI, medias móviles y soportes) en cripto y acciones para entregarte un reporte directo al grano, sin humo.
              </p>
              <div style={styles.heroButtons}>
                <a href="#acceso" className="r30-btn" style={styles.primaryBtn}>
                  Únete al acceso anticipado gratuito
                </a>
                <a href="#ejemplos" className="r30-btn-ghost" style={styles.secondaryBtn}>
                  Ver ejemplos reales
                </a>
              </div>

              <div style={styles.statsRow}>
                <div style={styles.stat}>
                  <div style={styles.statNum}>30s</div>
                  <div style={styles.statLabel}>de lectura</div>
                </div>
                <div style={styles.statDivider} />
                <div style={styles.stat}>
                  <div style={styles.statNum}>2</div>
                  <div style={styles.statLabel}>mercados</div>
                </div>
                <div style={styles.statDivider} />
                <div style={styles.stat}>
                  <div style={styles.statNum}>0</div>
                  <div style={styles.statLabel}>humo</div>
                </div>
              </div>
            </div>

            {/* Panel visual tipo terminal */}
            <div style={styles.heroRight}>
              <div className="r30-float" style={styles.terminal}>
                <div className="r30-scan" style={styles.terminalScan} />
                <div style={styles.terminalBar}>
                  <span style={{ ...styles.terminalDot, backgroundColor: '#ff1f3d' }} />
                  <span style={{ ...styles.terminalDot, backgroundColor: '#3a3a44' }} />
                  <span style={{ ...styles.terminalDot, backgroundColor: '#3a3a44' }} />
                  <span style={styles.terminalTitle}>RADAR://REPORTE_DIARIO</span>
                </div>
                <div style={styles.terminalBody}>
                  <div style={styles.termLine}>
                    <span style={styles.termFact}>[HECHO]</span> Volumen 2x sobre promedio 24h
                  </div>
                  <div style={styles.termLine}>
                    <span style={styles.termRumor}>[RUMOR]</span> Rupturas “inmediatas” en foros
                  </div>
                  <div style={styles.termDivider} />
                  <div style={styles.termRow}>
                    <span style={styles.termTicker}>BTCUSDT</span>
                    <span style={styles.termMuted}>RSI(14)</span>
                    <span style={styles.termValue}>68</span>
                  </div>
                  <div style={styles.rsiTrack}>
                    <div style={{ ...styles.rsiFill, width: '68%' }} />
                    <div style={{ ...styles.rsiMark, left: '30%' }} />
                    <div style={{ ...styles.rsiMark, left: '70%' }} />
                  </div>
                  <div style={styles.termRow}>
                    <span style={styles.termTicker}>SOLUSDT</span>
                    <span style={styles.termMuted}>RSI(14)</span>
                    <span style={styles.termValue}>74</span>
                  </div>
                  <div style={styles.rsiTrack}>
                    <div style={{ ...styles.rsiFill, width: '74%' }} />
                    <div style={{ ...styles.rsiMark, left: '30%' }} />
                    <div style={{ ...styles.rsiMark, left: '70%' }} />
                  </div>
                  <div style={styles.termFooter}>
                    <span className="r30-blink" style={styles.termCursor}>▍</span> lectura completada en 30s
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div style={styles.marquee}>
        <div className="r30-marquee-track" style={styles.marqueeTrack}>
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} style={styles.marqueeItem}>
              <span style={styles.marqueeSep}>◆</span> {item}
            </span>
          ))}
        </div>
      </div>

      {/* Características */}
      <section id="como-funciona" style={styles.section}>
        <div style={styles.container}>
          <div style={styles.eyebrow}>// CÓMO FUNCIONA</div>
          <h2 style={styles.sectionTitle}>¿Por qué usar Radar30s?</h2>
          <p style={styles.sectionSubtitle}>
            Deja de perder horas leyendo hilos especulativos. Recibe solo lo que mueve el precio.
          </p>

          <div style={styles.grid3}>
            <div className="r30-card" style={styles.card}>
              <div style={styles.cardIndex}>01</div>
              <div style={styles.icon}>🛡️</div>
              <h3 style={styles.cardTitle}>Filtro Hechos vs. Rumores</h3>
              <p style={styles.cardText}>
                Clasificamos cada catalizador: datos verificables en cadena o reportes oficiales por un lado, especulación de redes por otro.
              </p>
            </div>

            <div className="r30-card" style={styles.card}>
              <div style={styles.cardIndex}>02</div>
              <div style={styles.icon}>📈</div>
              <h3 style={styles.cardTitle}>Lectura Técnica Instantánea</h3>
              <p style={styles.cardText}>
                Niveles clave de RSI(14), expansión de volumen 24h y zonas de soporte/resistencia resumidas en líneas claras.
              </p>
            </div>

            <div className="r30-card" style={styles.card}>
              <div style={styles.cardIndex}>03</div>
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
          <div style={styles.eyebrow}>// REPORTES</div>
          <h2 style={styles.sectionTitle}>2 Ejemplos reales generados por nuestra IA</h2>
          <p style={styles.sectionSubtitle}>
            Así luce exactamente un reporte diario de Radar30s en tu pantalla.
          </p>

          {/* Botón traductor */}
          <div style={styles.translateWrap}>
            <button
              type="button"
              className="r30-btn"
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
            <div className="r30-card" style={styles.reportCard}>
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
                  <strong style={styles.strongWhite}>Panorama:</strong> Momentum alcista de corto plazo con expansión de volumen; vigilar zonas de sobrecompra antes de entradas tardías.
                </p>
                <Traduccion visible={modoSimple}>
                  El precio viene subiendo con fuerza y mucha gente está operando. Pero cuando algo sube tan rápido puede "cansarse" y devolverse, así que entrar tarde es riesgoso.
                </Traduccion>

                <div style={styles.tickerBox}>
                  <strong style={styles.strongRed}>BTCUSDT:</strong> Sobre MA20 con <strong style={styles.strongWhite}>RSI(14) en 68</strong> y volumen 24h <strong style={styles.strongWhite}>+34%</strong>; resistencia en máximo intradía.
                </div>
                <Traduccion visible={modoSimple}>
                  Bitcoin está por encima de su precio promedio reciente (buena señal de tendencia). El termómetro RSI marca 68: está caliente, cerca de la zona de euforia (70+). Se negoció 34% más de lo normal, así que el interés es real. Cerca del máximo del día hay un "techo" donde el precio podría frenarse.
                </Traduccion>

                <div style={styles.tickerBox}>
                  <strong style={styles.strongRed}>SOLUSDT:</strong> Impulso fuerte con <strong style={styles.strongWhite}>RSI(14) en 74</strong> y volumen 24h <strong style={styles.strongWhite}>+62%</strong>; riesgo de retroceso si pierde soporte inmediato.
                </div>
                <Traduccion visible={modoSimple}>
                  Solana va muy acelerada, como un auto a toda velocidad: el RSI en 74 indica sobrecalentamiento y puede venir un freno. Hay 62% más de actividad de lo normal. Si el precio rompe el "piso" (soporte) más cercano, la caída podría extenderse.
                </Traduccion>
              </div>
            </div>

            {/* Ejemplo 2 */}
            <div className="r30-card" style={styles.reportCard}>
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
                  <strong style={styles.strongWhite}>Panorama:</strong> Escenario mixto con activos en tendencia y otros en rango lateral; RSI(14) filtra continuación sana de agotamiento.
                </p>
                <Traduccion visible={modoSimple}>
                  Hoy no todo se mueve igual: algunos activos suben con rumbo claro y otros están "dormidos" sin dirección. El RSI ayuda a distinguir si una subida todavía tiene fuerza sana o ya se agotó.
                </Traduccion>

                <div style={styles.tickerBox}>
                  <strong style={styles.strongRed}>NVDA:</strong> Estructura alcista con <strong style={styles.strongWhite}>RSI(14) en 64</strong> y volumen relativo alto; vigilar reacción en soporte de sesión.
                </div>
                <Traduccion visible={modoSimple}>
                  NVIDIA está en tendencia de subida. RSI en 64 significa buena fuerza sin llegar a la euforia. Mucho volumen = mucha gente participando. Lo clave: ver si el precio aguanta cuando baja a su "piso" del día.
                </Traduccion>

                <div style={styles.tickerBox}>
                  <strong style={styles.strongRed}>AAPL:</strong> Rango lateral estrecho con <strong style={styles.strongWhite}>RSI(14) en 49</strong>; neutral hasta romper extremos.
                </div>
                <Traduccion visible={modoSimple}>
                  Apple se mueve en un "pasillo" angosto sin ir ni arriba ni abajo. RSI en 49 = equilibrio entre compradores y vendedores. No hay señal clara hasta que el precio salga del pasillo por arriba o por abajo.
                </Traduccion>

                <div style={styles.tickerBox}>
                  <strong style={styles.strongRed}>ETHUSDT:</strong> Rebote técnico cerca de soporte con <strong style={styles.strongWhite}>RSI(14) en 31</strong> y volumen <strong style={styles.strongWhite}>+21%</strong>.
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
            <div style={styles.ctaGlow} />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={styles.badge}>
                <span className="r30-blink" style={styles.badgeDot}></span>
                CUPOS LIMITADOS PARA LA BETA
              </div>
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
                    className="r30-tab"
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
                  className="r30-input"
                  value={contacto}
                  onChange={(e) => setContacto(e.target.value)}
                  placeholder={placeholders[canal]}
                  style={styles.input}
                />
                <button
                  type="submit"
                  className="r30-btn"
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
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.container}>
          <p style={{ margin: 0 }}>
            © 2026 Radar30s · Inteligencia de mercado en 30 segundos.
          </p>
        </div>
      </footer>
    </div>
  );
}

/* ---------- Paleta ----------
  Negro base:   #050507
  Superficie:   #0b0b0f / #101015
  Borde:        #23232b
  Rojo:         #ff1f3d  (oscuro #c4001d)
  Texto:        #f5f5f7 / muted #9a9aa6
------------------------------- */

const styles = {
  page: {
    backgroundColor: '#050507',
    color: '#f5f5f7',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    minHeight: '100vh',
    margin: 0,
    padding: 0,
    overflowX: 'hidden',
  },
  container: {
    maxWidth: '1140px',
    margin: '0 auto',
    padding: '0 20px',
  },
  containerNav: {
    maxWidth: '1140px',
    margin: '0 auto',
    padding: '14px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navbar: {
    borderBottom: '1px solid rgba(255, 31, 61, 0.18)',
    backgroundColor: 'rgba(5, 5, 7, 0.75)',
    backdropFilter: 'blur(14px)',
    WebkitBackdropFilter: 'blur(14px)',
    position: 'sticky',
    top: 0,
    zIndex: 50,
  },
  logo: {
    fontSize: '1.25rem',
    fontWeight: '900',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    letterSpacing: '3px',
  },
  logoDot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: '#ff1f3d',
    display: 'inline-block',
  },
  accentSolid: {
    color: '#ff1f3d',
  },
  accentText: {
    background: 'linear-gradient(90deg, #ff1f3d 0%, #ff6a4d 100%)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    color: '#ff1f3d',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '22px',
  },
  navLinksInner: {
    display: 'flex',
    alignItems: 'center',
    gap: '22px',
  },
  navLink: {
    color: '#9a9aa6',
    textDecoration: 'none',
    fontSize: '0.88rem',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
  },
  navBtnSmall: {
    background: 'linear-gradient(135deg, #ff1f3d, #c4001d)',
    color: '#fff',
    padding: '9px 18px',
    borderRadius: '8px',
    fontWeight: '700',
    textDecoration: 'none',
    fontSize: '0.85rem',
    letterSpacing: '0.5px',
    boxShadow: '0 0 18px rgba(255, 31, 61, 0.35)',
  },

  /* Hero */
  hero: {
    position: 'relative',
    padding: '84px 0 80px',
    overflow: 'hidden',
  },
  heroGrid: {
    position: 'absolute',
    inset: 0,
    backgroundImage:
      'linear-gradient(rgba(255,31,61,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,31,61,0.07) 1px, transparent 1px)',
    backgroundSize: '48px 48px',
    WebkitMaskImage: 'radial-gradient(ellipse at 50% 30%, #000 20%, transparent 75%)',
    maskImage: 'radial-gradient(ellipse at 50% 30%, #000 20%, transparent 75%)',
    zIndex: 0,
  },
  heroGlow: {
    position: 'absolute',
    top: '-180px',
    right: '-120px',
    width: '640px',
    height: '640px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(255,31,61,0.28) 0%, rgba(255,31,61,0) 65%)',
    filter: 'blur(20px)',
    zIndex: 1,
  },
  heroLayout: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '48px',
    alignItems: 'center',
  },
  heroLeft: {
    textAlign: 'left',
  },
  heroRight: {
    display: 'flex',
    justifyContent: 'center',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: 'rgba(255, 31, 61, 0.1)',
    color: '#ff5470',
    border: '1px solid rgba(255, 31, 61, 0.4)',
    padding: '7px 14px',
    borderRadius: '999px',
    fontSize: '0.72rem',
    fontWeight: '700',
    letterSpacing: '1.5px',
    marginBottom: '22px',
  },
  badgeDot: {
    width: '7px',
    height: '7px',
    borderRadius: '50%',
    backgroundColor: '#ff1f3d',
    display: 'inline-block',
  },
  heroTitle: {
    fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
    fontWeight: '900',
    lineHeight: 1.08,
    margin: '0 0 22px',
    letterSpacing: '-1.5px',
  },
  heroSubtitle: {
    fontSize: '1.08rem',
    color: '#9a9aa6',
    maxWidth: '560px',
    margin: '0 0 32px',
    lineHeight: 1.65,
  },
  heroButtons: {
    display: 'flex',
    gap: '14px',
    flexWrap: 'wrap',
    marginBottom: '40px',
  },
  primaryBtn: {
    background: 'linear-gradient(135deg, #ff1f3d, #c4001d)',
    color: '#fff',
    padding: '14px 26px',
    borderRadius: '10px',
    fontWeight: '800',
    textDecoration: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '0.98rem',
    letterSpacing: '0.3px',
    boxShadow: '0 0 24px rgba(255, 31, 61, 0.4)',
    display: 'inline-block',
  },
  secondaryBtn: {
    backgroundColor: 'rgba(255,255,255,0.03)',
    color: '#e5e5ea',
    padding: '14px 26px',
    borderRadius: '10px',
    fontWeight: '600',
    textDecoration: 'none',
    border: '1px solid #2c2c36',
    fontSize: '0.98rem',
    display: 'inline-block',
  },
  statsRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
    flexWrap: 'wrap',
  },
  stat: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  },
  statNum: {
    fontSize: '1.7rem',
    fontWeight: '900',
    color: '#fff',
    letterSpacing: '-0.5px',
  },
  statLabel: {
    fontSize: '0.72rem',
    color: '#7a7a86',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
  },
  statDivider: {
    width: '1px',
    height: '34px',
    backgroundColor: '#2a2a33',
  },

  /* Terminal */
  terminal: {
    position: 'relative',
    width: '100%',
    maxWidth: '420px',
    backgroundColor: 'rgba(12, 12, 16, 0.85)',
    border: '1px solid rgba(255, 31, 61, 0.35)',
    borderRadius: '16px',
    boxShadow: '0 0 60px rgba(255, 31, 61, 0.18), inset 0 0 40px rgba(255, 31, 61, 0.04)',
    overflow: 'hidden',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
  },
  terminalScan: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: '2px',
    background: 'linear-gradient(90deg, transparent, #ff1f3d, transparent)',
    boxShadow: '0 0 16px #ff1f3d',
    zIndex: 3,
    pointerEvents: 'none',
  },
  terminalBar: {
    display: 'flex',
    alignItems: 'center',
    gap: '7px',
    padding: '12px 16px',
    borderBottom: '1px solid #1f1f27',
    backgroundColor: 'rgba(255,255,255,0.02)',
  },
  terminalDot: {
    width: '9px',
    height: '9px',
    borderRadius: '50%',
    display: 'inline-block',
  },
  terminalTitle: {
    marginLeft: '10px',
    fontSize: '0.7rem',
    color: '#7a7a86',
    letterSpacing: '1.5px',
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
  },
  terminalBody: {
    padding: '18px 18px 20px',
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
    fontSize: '0.82rem',
    color: '#d4d4da',
  },
  termLine: {
    marginBottom: '8px',
    lineHeight: 1.45,
  },
  termFact: {
    color: '#fff',
    backgroundColor: 'rgba(255,255,255,0.12)',
    padding: '1px 6px',
    borderRadius: '4px',
    fontWeight: '700',
    marginRight: '6px',
    fontSize: '0.75rem',
  },
  termRumor: {
    color: '#fff',
    backgroundColor: '#ff1f3d',
    padding: '1px 6px',
    borderRadius: '4px',
    fontWeight: '700',
    marginRight: '6px',
    fontSize: '0.75rem',
  },
  termDivider: {
    height: '1px',
    backgroundColor: '#23232b',
    margin: '14px 0',
  },
  termRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '6px',
  },
  termTicker: {
    color: '#ff5470',
    fontWeight: '700',
  },
  termMuted: {
    color: '#6b6b77',
    fontSize: '0.75rem',
  },
  termValue: {
    color: '#fff',
    fontWeight: '800',
  },
  rsiTrack: {
    position: 'relative',
    height: '6px',
    backgroundColor: '#1b1b22',
    borderRadius: '99px',
    marginBottom: '16px',
    overflow: 'hidden',
  },
  rsiFill: {
    height: '100%',
    background: 'linear-gradient(90deg, #7a0014, #ff1f3d)',
    borderRadius: '99px',
    boxShadow: '0 0 10px rgba(255, 31, 61, 0.7)',
  },
  rsiMark: {
    position: 'absolute',
    top: 0,
    width: '1px',
    height: '100%',
    backgroundColor: 'rgba(255,255,255,0.35)',
  },
  termFooter: {
    marginTop: '6px',
    color: '#6b6b77',
    fontSize: '0.75rem',
  },
  termCursor: {
    color: '#ff1f3d',
  },

  /* Marquee */
  marquee: {
    borderTop: '1px solid #1a1a21',
    borderBottom: '1px solid #1a1a21',
    backgroundColor: '#08080b',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    padding: '14px 0',
  },
  marqueeTrack: {
    display: 'inline-block',
    whiteSpace: 'nowrap',
    width: 'max-content',
  },
  marqueeItem: {
    display: 'inline-block',
    margin: '0 22px',
    fontSize: '0.78rem',
    fontWeight: '700',
    letterSpacing: '2.5px',
    color: '#7a7a86',
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
  },
  marqueeSep: {
    color: '#ff1f3d',
    marginRight: '14px',
  },

  /* Secciones */
  section: {
    padding: '84px 0',
  },
  sectionAlt: {
    padding: '84px 0',
    background:
      'radial-gradient(ellipse at 50% 0%, rgba(255,31,61,0.07) 0%, transparent 60%), #08080b',
    borderTop: '1px solid #1a1a21',
    borderBottom: '1px solid #1a1a21',
  },
  eyebrow: {
    textAlign: 'center',
    color: '#ff1f3d',
    fontSize: '0.75rem',
    fontWeight: '700',
    letterSpacing: '3px',
    marginBottom: '12px',
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
  },
  sectionTitle: {
    fontSize: 'clamp(1.7rem, 3.5vw, 2.3rem)',
    fontWeight: '900',
    textAlign: 'center',
    margin: '0 0 12px',
    letterSpacing: '-0.8px',
  },
  sectionSubtitle: {
    textAlign: 'center',
    color: '#9a9aa6',
    margin: '0 auto 48px',
    maxWidth: '620px',
    fontSize: '1.05rem',
    lineHeight: 1.55,
  },
  grid3: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
    gap: '20px',
  },
  card: {
    position: 'relative',
    backgroundColor: 'rgba(16, 16, 21, 0.8)',
    border: '1px solid #23232b',
    borderRadius: '16px',
    padding: '28px',
    overflow: 'hidden',
  },
  cardIndex: {
    position: 'absolute',
    top: '18px',
    right: '22px',
    fontSize: '0.8rem',
    fontWeight: '700',
    color: '#3a3a44',
    letterSpacing: '2px',
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
  },
  icon: {
    width: '52px',
    height: '52px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    marginBottom: '16px',
    borderRadius: '12px',
    backgroundColor: 'rgba(255, 31, 61, 0.1)',
    border: '1px solid rgba(255, 31, 61, 0.3)',
  },
  cardTitle: {
    fontSize: '1.15rem',
    fontWeight: '800',
    margin: '0 0 8px',
  },
  cardText: {
    color: '#9a9aa6',
    lineHeight: 1.6,
    fontSize: '0.94rem',
    margin: 0,
  },

  /* Reportes */
  grid2: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '24px',
  },
  reportCard: {
    backgroundColor: '#0b0b0f',
    border: '1px solid #23232b',
    borderRadius: '18px',
    padding: '26px',
    boxShadow: '0 14px 36px rgba(0,0,0,0.5)',
  },
  reportHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '8px',
    borderBottom: '1px solid #1f1f27',
    paddingBottom: '14px',
    marginBottom: '18px',
  },
  reportTag: {
    fontSize: '0.7rem',
    fontWeight: '700',
    color: '#ff5470',
    letterSpacing: '1.5px',
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
  },
  reportTickers: {
    fontSize: '0.75rem',
    fontWeight: '700',
    backgroundColor: 'rgba(255, 31, 61, 0.1)',
    border: '1px solid rgba(255, 31, 61, 0.3)',
    padding: '4px 10px',
    borderRadius: '6px',
    color: '#f5f5f7',
    letterSpacing: '0.5px',
  },
  reportBlock: {
    marginBottom: '18px',
  },
  reportSubheading: {
    fontSize: '1rem',
    fontWeight: '800',
    color: '#fff',
    margin: '0 0 12px',
  },
  reportList: {
    paddingLeft: '18px',
    margin: 0,
    color: '#c4c4cc',
    fontSize: '0.92rem',
    lineHeight: 1.55,
    display: 'flex',
    flexDirection: 'column',
    gap: '9px',
  },
  tagFact: {
    color: '#fff',
    backgroundColor: 'rgba(255,255,255,0.12)',
    padding: '1px 7px',
    borderRadius: '4px',
    fontWeight: '700',
    fontSize: '0.78rem',
    marginRight: '6px',
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
  },
  tagRumor: {
    color: '#fff',
    backgroundColor: '#ff1f3d',
    padding: '1px 7px',
    borderRadius: '4px',
    fontWeight: '700',
    fontSize: '0.78rem',
    marginRight: '6px',
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
  },
  reportPanorama: {
    fontSize: '0.92rem',
    color: '#c4c4cc',
    margin: '0 0 10px',
    lineHeight: 1.55,
  },
  strongWhite: {
    color: '#fff',
  },
  strongRed: {
    color: '#ff5470',
  },
  tickerBox: {
    backgroundColor: '#111116',
    borderLeft: '3px solid #ff1f3d',
    padding: '10px 14px',
    borderRadius: '6px',
    fontSize: '0.88rem',
    color: '#d8d8de',
    marginBottom: '8px',
    lineHeight: 1.5,
  },
  disclaimer: {
    textAlign: 'center',
    color: '#6b6b77',
    fontSize: '0.82rem',
    marginTop: '24px',
  },

  /* --- Traductor a lenguaje claro --- */
  translateWrap: {
    textAlign: 'center',
    marginBottom: '32px',
  },
  translateBtn: {
    background: 'linear-gradient(135deg, #ff1f3d, #c4001d)',
    color: '#fff',
    padding: '14px 28px',
    borderRadius: '10px',
    fontWeight: '800',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    boxShadow: '0 0 26px rgba(255, 31, 61, 0.4)',
  },
  translateBtnActive: {
    backgroundColor: 'rgba(255, 31, 61, 0.12)',
    color: '#ff5470',
    padding: '14px 28px',
    borderRadius: '10px',
    fontWeight: '800',
    border: '1px solid #ff1f3d',
    cursor: 'pointer',
    fontSize: '1rem',
    boxShadow: '0 0 20px rgba(255, 31, 61, 0.2)',
  },
  translateHint: {
    color: '#9a9aa6',
    fontSize: '0.9rem',
    marginTop: '12px',
  },
  traduccion: {
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    border: '1px dashed rgba(255, 31, 61, 0.5)',
    color: '#e8e8ee',
    padding: '11px 14px',
    borderRadius: '8px',
    fontSize: '0.86rem',
    lineHeight: 1.55,
    margin: '-2px 0 12px',
  },
  traduccionLabel: {
    fontWeight: '800',
    color: '#ff5470',
    letterSpacing: '1px',
    fontSize: '0.78rem',
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
  },
  glossaryBox: {
    backgroundColor: '#0b0b0f',
    border: '1px solid rgba(255, 31, 61, 0.25)',
    borderRadius: '18px',
    padding: '26px',
    marginBottom: '32px',
  },
  glossaryTitle: {
    fontSize: '1.15rem',
    fontWeight: '800',
    margin: '0 0 18px',
    textAlign: 'center',
  },
  glossaryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '14px',
  },
  glossaryItem: {
    backgroundColor: '#111116',
    border: '1px solid #23232b',
    borderRadius: '12px',
    padding: '14px 16px',
  },
  glossaryTerm: {
    fontWeight: '700',
    color: '#ff5470',
    marginBottom: '6px',
    fontSize: '0.98rem',
  },
  glossaryText: {
    color: '#c4c4cc',
    fontSize: '0.88rem',
    lineHeight: 1.55,
    margin: 0,
  },

  /* CTA */
  ctaSection: {
    padding: '84px 0',
  },
  ctaBox: {
    position: 'relative',
    backgroundColor: '#0b0b0f',
    border: '1px solid rgba(255, 31, 61, 0.35)',
    borderRadius: '24px',
    padding: '56px 24px',
    textAlign: 'center',
    overflow: 'hidden',
    boxShadow: '0 0 70px rgba(255, 31, 61, 0.12)',
  },
  ctaGlow: {
    position: 'absolute',
    top: '-200px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '700px',
    height: '400px',
    background: 'radial-gradient(ellipse, rgba(255,31,61,0.28) 0%, transparent 70%)',
    zIndex: 1,
    pointerEvents: 'none',
  },
  ctaTitle: {
    fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
    fontWeight: '900',
    margin: '0 0 12px',
    letterSpacing: '-0.8px',
  },
  ctaText: {
    color: '#9a9aa6',
    maxWidth: '540px',
    margin: '0 auto 28px',
    lineHeight: 1.6,
  },
  channelTabs: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '20px',
    flexWrap: 'wrap',
  },
  tabActive: {
    backgroundColor: 'rgba(255, 31, 61, 0.15)',
    color: '#fff',
    border: '1px solid #ff1f3d',
    padding: '9px 18px',
    borderRadius: '8px',
    fontWeight: '700',
    cursor: 'pointer',
    fontSize: '0.9rem',
    boxShadow: '0 0 16px rgba(255, 31, 61, 0.25)',
  },
  tabInactive: {
    backgroundColor: '#08080b',
    color: '#9a9aa6',
    border: '1px solid #2a2a33',
    padding: '9px 18px',
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
    padding: '14px 16px',
    borderRadius: '10px',
    border: '1px solid #2a2a33',
    backgroundColor: '#050507',
    color: '#fff',
    minWidth: '260px',
    fontSize: '1rem',
    transition: 'border-color .2s ease, box-shadow .2s ease',
  },
  successMsg: {
    color: '#fff',
    backgroundColor: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.18)',
    display: 'inline-block',
    padding: '10px 16px',
    borderRadius: '8px',
    marginTop: '18px',
    fontWeight: '600',
    fontSize: '0.95rem',
  },
  errorMsg: {
    color: '#ff6b81',
    backgroundColor: 'rgba(255, 31, 61, 0.1)',
    border: '1px solid rgba(255, 31, 61, 0.4)',
    display: 'inline-block',
    padding: '10px 16px',
    borderRadius: '8px',
    marginTop: '18px',
    fontWeight: '600',
    fontSize: '0.95rem',
  },
  footer: {
    borderTop: '1px solid #1a1a21',
    padding: '28px 0',
    textAlign: 'center',
    color: '#6b6b77',
    fontSize: '0.88rem',
  },
};