function ServiceCard({ icon, title, description }) {
  return (
    <article className="service-card">
      <div className="service-card__icon">{icon}</div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  )
}

export default ServiceCard
