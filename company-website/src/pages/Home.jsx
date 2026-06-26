import { Link } from 'react-router-dom'
import heroBg from '../assets/hero.png'
import StatCard from '../components/StatCard.jsx'

const stats = [
  { value: '12+', label: 'Years serving IT leaders' },
  { value: '98%', label: 'SLA compliance rate' },
  { value: '24/7', label: 'Global monitoring & support' },
]

function Home() {
  return (
    <div className="hero-panel">
      <div className="hero-background" style={{ backgroundImage: `url(${heroBg})` }} />
      <div className="site-nav">
        <div className="logo-block">
          <div className="logo-mark">IIS</div>
          <div>
            <p className="brand-name">Infinity IT Solutions</p>
            <p className="brand-subtitle">Enterprise IT & Cloud</p>
          </div>
        </div>
      </div>

      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Technology & IT solutions</p>
          <h1>Excellent IT services for your success.</h1>
          <p className="hero-description">
            Infinity IT Solutions delivers modern enterprise technology, secure cloud operations, and hands-on managed services that help your business grow with confidence.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="button button-primary">Start a project</Link>
            <Link to="/services" className="button button-secondary">View services</Link>
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
    </div>
  )
}

export default Home
