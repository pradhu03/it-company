import ContactForm from '../components/ContactForm.jsx'

function Contact() {
  return (
    <section className="section contact">
      <div className="contact-container">
        <div className="contact-header">
          <p className="eyebrow">Get in touch</p>
          <h2>Ready to accelerate IT?</h2>
          <p className="contact-subtitle">
            Fill out the form below and our team will get back to you within 24 hours.
          </p>
        </div>

        <div className="contact-content">
          <ContactForm />

          <div className="contact-info">
            <div className="info-block">
              <h3>Email</h3>
              <a href="mailto:contact@company.com">contact@company.com</a>
            </div>
            <div className="info-block">
              <h3>Phone</h3>
              <a href="tel:+18005550124">+1 (800) 555-0124</a>
            </div>
            <div className="info-block">
              <h3>Address</h3>
              <p>123 Tech Street, San Francisco, CA 94105</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
