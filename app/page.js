export default function Home() {

  const features = [
    { icon: '⚡', title: 'Ultra rápido', desc: 'Infraestructura en el edge. Cero latencia, máxima velocidad en cualquier rincón del mundo.' },
    { icon: '🔒', title: 'Seguro por diseño', desc: 'Encriptación de extremo a extremo, autenticación 2FA y auditorías automáticas.' },
    { icon: '📊', title: 'Analytics en tiempo real', desc: 'Dashboards intuitivos que te muestran exactamente qué está pasando con tu producto.' },
    { icon: '🤖', title: 'IA integrada', desc: 'Sugerencias inteligentes, resúmenes automáticos y flujos de trabajo potenciados por IA.' },
    { icon: '🔗', title: '200+ integraciones', desc: 'Conecta con Slack, Notion, Stripe, HubSpot y muchas más herramientas que ya usas.' },
    { icon: '🌍', title: 'Multi-idioma', desc: 'Llega a clientes en cualquier parte del mundo con soporte nativo para +40 idiomas.' },
  ]

  const steps = [
    { n: '1', title: 'Crea tu cuenta', desc: 'Regístrate gratis en segundos. No necesitas tarjeta de crédito.' },
    { n: '2', title: 'Configura tu proyecto', desc: 'Importa tus datos o empieza desde cero con nuestras plantillas.' },
    { n: '3', title: 'Lanza y crece', desc: 'Publica, comparte y escala tu producto con todas las herramientas.' },
    { n: '4', title: 'Mide el éxito', desc: 'Analiza métricas clave y toma decisiones basadas en datos reales.' },
  ]

  const testimonials = [
    {
      text: '"LaunchKit nos permitió ir de idea a producción en una semana. Increíble experiencia de desarrollo."',
      name: 'María González', role: 'CTO · StartupX', initials: 'MG',
      bg: 'linear-gradient(135deg,#6C63FF,#8b7dff)',
    },
    {
      text: '"El dashboard de analytics es simplemente el mejor que he usado. Claro, rápido y potente."',
      name: 'Carlos Ruiz', role: 'Fundador · NovaCo', initials: 'CR',
      bg: 'linear-gradient(135deg,#FF6584,#ff9eb5)',
    },
    {
      text: '"Las integraciones con nuestras herramientas existentes funcionaron a la perfección desde el día uno."',
      name: 'Ana Martínez', role: 'Product Manager · TechWave', initials: 'AM',
      bg: 'linear-gradient(135deg,#43e97b,#38f9d7)',
    },
  ]

  const plans = [
    {
      name: 'Starter', price: '0', desc: 'Perfecto para explorar y proyectos personales.',
      features: [
        { ok: true, text: '3 proyectos activos' },
        { ok: true, text: '10 GB de almacenamiento' },
        { ok: true, text: 'Analíticas básicas' },
        { ok: false, text: 'Integraciones avanzadas' },
        { ok: false, text: 'Soporte prioritario' },
      ],
      cta: 'Empezar gratis', style: 'outline', featured: false,
    },
    {
      name: 'Pro', price: '29', desc: 'Para equipos que quieren escalar rápido.',
      features: [
        { ok: true, text: 'Proyectos ilimitados' },
        { ok: true, text: '100 GB de almacenamiento' },
        { ok: true, text: 'Analíticas avanzadas' },
        { ok: true, text: '200+ integraciones' },
        { ok: false, text: 'Soporte prioritario' },
      ],
      cta: 'Comenzar con Pro', style: 'primary', featured: true,
    },
    {
      name: 'Enterprise', price: '99', desc: 'Potencia total para grandes organizaciones.',
      features: [
        { ok: true, text: 'Todo lo de Pro' },
        { ok: true, text: 'Almacenamiento ilimitado' },
        { ok: true, text: 'IA avanzada incluida' },
        { ok: true, text: 'SSO & roles personalizados' },
        { ok: true, text: 'Soporte 24/7 dedicado' },
      ],
      cta: 'Contactar ventas', style: 'outline', featured: false,
    },
  ]

  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <a href="#" className="nav-logo">Launch<span>Kit</span></a>
        <ul className="nav-links">
          <li><a href="#features">Características</a></li>
          <li><a href="#how">Cómo funciona</a></li>
          <li><a href="#pricing">Precios</a></li>
          <li><a href="#cta" className="btn-nav">Empezar gratis</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-badge">✨ Ahora con IA generativa integrada</div>
        <h1>
          Lanza tu producto<br />
          <span className="highlight">10 veces más rápido</span>
        </h1>
        <p>
          LaunchKit es la plataforma todo-en-uno que necesitas para pasar de idea
          a producto real sin fricciones, sin complicaciones.
        </p>
        <div className="hero-cta">
          <a href="#cta" className="btn-primary">Comenzar gratis →</a>
          <a href="#how" className="btn-secondary">Ver cómo funciona</a>
        </div>
        <div className="hero-stats">
          {[
            ['12K+', 'Proyectos lanzados'],
            ['98%', 'Satisfacción'],
            ['4.9★', 'Valoración media'],
          ].map(([v, l]) => (
            <div className="stat" key={l}>
              <strong>{v}</strong>
              <span>{l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section id="features">
        <div className="container">
          <p className="section-label">Características</p>
          <h2 className="section-title">Todo lo que necesitas, en un solo lugar</h2>
          <p className="section-sub">
            Deja de pagar por 10 herramientas distintas. LaunchKit lo tiene todo.
          </p>
          <div className="features-grid">
            {features.map(f => (
              <div className="feature-card" key={f.title}>
                <span className="feature-icon">{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="steps-bg">
        <div className="container">
          <p className="section-label">Cómo funciona</p>
          <h2 className="section-title">De cero a lanzamiento en 4 pasos</h2>
          <p className="section-sub">
            Un proceso simple, claro y guiado para que no pierdas tiempo en lo que no importa.
          </p>
          <div className="steps-grid">
            {steps.map(s => (
              <div className="step" key={s.n}>
                <div className="step-number">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials">
        <div className="container">
          <p className="section-label">Testimonios</p>
          <h2 className="section-title">Lo que dicen nuestros usuarios</h2>
          <p className="section-sub">
            Más de 12.000 equipos ya confían en LaunchKit para hacer crecer su negocio.
          </p>
          <div className="testimonials-grid">
            {testimonials.map(t => (
              <div className="testimonial-card" key={t.name}>
                <div className="stars">★★★★★</div>
                <p>{t.text}</p>
                <div className="author">
                  <div className="avatar" style={{ background: t.bg }}>{t.initials}</div>
                  <div className="author-info">
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="pricing-bg">
        <div className="container">
          <p className="section-label">Precios</p>
          <h2 className="section-title">Simple. Transparente. Sin sorpresas.</h2>
          <p className="section-sub">
            Empieza gratis y escala cuando estés listo. Cancela cuando quieras.
          </p>
          <div className="pricing-grid">
            {plans.map(plan => (
              <div
                className={`pricing-card${plan.featured ? ' featured' : ''}`}
                key={plan.name}
              >
                {plan.featured && <span className="popular-badge">🔥 Más popular</span>}
                <p className="plan-name">{plan.name}</p>
                <div className="plan-price">
                  <sup>$</sup>{plan.price}
                  <span>/mes</span>
                </div>
                <p className="plan-desc">{plan.desc}</p>
                <ul className="plan-features">
                  {plan.features.map(f => (
                    <li key={f.text}>
                      <span className={f.ok ? 'check' : 'cross'}>{f.ok ? '✓' : '✗'}</span>
                      {f.text}
                    </li>
                  ))}
                </ul>
                <a
                  href="#cta"
                  className={`btn-plan ${plan.style === 'primary' ? 'btn-plan-primary' : 'btn-plan-outline'}`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="cta" className="cta-section">
        <div className="cta-box">
          <h2>¿Listo para lanzar? 🚀</h2>
          <p>
            Únete a miles de equipos que ya están construyendo el futuro con LaunchKit.
            Gratis para siempre en el plan Starter.
          </p>
          <a href="#" className="btn-primary">Crear mi cuenta gratis</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>
          © {new Date().getFullYear()} LaunchKit · Hecho con ❤️ ·{' '}
          <a href="#">Privacidad</a> · <a href="#">Términos</a>
        </p>
      </footer>
    </>
  )
}