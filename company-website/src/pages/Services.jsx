import SectionHeader from '../components/SectionHeader.jsx'
import ServiceCard from '../components/ServiceCard.jsx'

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

function Services() {
  return (
    <section className="section services">
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
  )
}

export default Services
