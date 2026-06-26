import './App.css'
import heroBg from './assets/hero.png'
import SectionHeader from './components/SectionHeader.jsx'
import ServiceCard from './components/ServiceCard.jsx'
import StatCard from './components/StatCard.jsx'

const services = [
  {
    icon: '☁️',
    title: 'Cloud & Infrastructure',
    description: 'Modern cloud architecture, migration, and managed platform services that keep your systems scalable and secure.',
  },
  {
    icon: '💻',
    title: 'Custom Software',
    description: 'Web, mobile, and internal tools built to streamline operations, drive productivity, and elevate customer experiences.',
  },
  {
    icon: '🛡️',
    title: 'Security & Compliance',
    description: 'Proactive monitoring, vulnerability management, and compliance support to protect data and maintain trust.',
  },
  {
    icon: '📈',
    title: 'IT Strategy',
    description: 'Business-focused technology roadmaps, cost optimization, and digital transformation planning for fast-growth teams.',
  },
]

const stats = [
  { value: '12+', label: 'Years serving IT leaders' },
  { value: '98%', label: 'SLA compliance rate' },
  { value: '24/7', label: 'Global monitoring & support' },
]

const processSteps = [
  {
    title: 'Discover',
    description: 'We review your goals, infrastructure, and risk profile to define the best path forward.',
  },
  {
    title: 'Design',
    description: 'Our team maps architecture, delivery cadence, and security controls with clarity up front.',
  },
  {
    title: 'Deliver',
    description: 'We build, deploy, and hand off systems with strong testing, monitoring, and documentation.',
  },
  {
    title: 'Operate',
    description: 'Continuous improvement, managed ops, and trusted support keep your IT running smoothly.',
  },
]

function App() {
  return (
    <div className="app-shell">
      <div className="topbar">
        <p>support@nebulabridgelabs.com · +1 (800) 555-0124</p>
        <div className="topbar-links">
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <header className="hero-panel">
        <div
          className="hero-background"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <nav className="site-nav">
          <div className="logo-block">
            <div className="logo-mark">NB</div>
            <div>
              <p className="brand-name">NebulaBridge Labs</p>
              <p className="brand-subtitle">IT, Cloud & Security</p>
            </div>
          </div>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#workflow">Process</a>
            <a href="#contact">Contact</a>
          </div>
          <a href="#contact" className="button button-small">Get a Quote</a>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Technology & IT solutions</p>
            <h1>Excellent IT services for your success.</h1>
            <p className="hero-description">
              NebulaBridge Labs delivers modern enterprise technology, secure cloud operations, and hands-on managed services that help your business grow with confidence.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="button button-primary">Start a project</a>
              <a href="#services" className="button button-secondary">View services</a>
            </div>

            <div className="hero-stats">
              {stats.map((item) => (
                <StatCard key={item.label} value={item.value} label={item.label} />
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-frame">
              <img src={heroBg} alt="Company strategy and analysis" />
              <div className="hero-image-overlay" />
            </div>
          </div>
        </div>
      </header>

      <section className="section services" id="services">
        <SectionHeader
          eyebrow="Our services"
          title="Solutions tailored to your IT and business goals"
          description="From custom product engineering to managed cloud operations, we help companies reduce risk and accelerate delivery."
          align="left"
        />
        <div className="card-grid">
          {services.map((item) => (
            <ServiceCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>

      <section className="section workflow" id="workflow">
        <SectionHeader
          eyebrow="Our process"
          title="Working together with clarity and momentum"
          description="Every engagement starts with a clear plan, frequent checkpoints, and strong ownership through launch and beyond."
          align="left"
        />
        <div className="workflow-grid">
          {processSteps.map((step, index) => (
            <article key={step.title} className="workflow-step">
              <div className="workflow-step__index">{index + 1}</div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="contact-panel">
          <div>
            <p className="eyebrow">Ready to accelerate IT?</p>
            <h2>Start your next technology initiative with a team that understands execution.</h2>
            <p>
              We help teams design scalable systems, modernize legacy platforms, and deliver reliable operations.
            </p>
          </div>
          <a href="mailto:contact@company.com" className="button button-primary">Email us today</a>
        </div>
      </section>
    </div>
  )
}

export default App
