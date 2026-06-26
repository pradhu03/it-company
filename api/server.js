import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

const app = express()
const PORT = 5000
const MONGODB_URI = 'mongodb://localhost:27017/company'

app.use(cors())
app.use(express.json())

// MongoDB Connection
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✓ Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err))

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  company: String,
  phone: String,
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
})

const Contact = mongoose.model('Contact', contactSchema)

// Test endpoint
app.get('/', (req, res) => {
  res.json({ message: 'NebulaBridge Labs API is running' })
})

// Get all contacts
app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find()
    res.json(contacts)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch contacts' })
  }
})

// Contact form submission
app.post('/api/contact', async (req, res) => {
  const { name, email, company, phone, message } = req.body

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' })
  }

  try {
    const contact = new Contact({ name, email, company, phone, message })
    await contact.save()
    console.log('Contact saved to MongoDB:', { name, email, company, phone, message })

    res.json({
      success: true,
      message: 'Thank you for reaching out! We will contact you within 24 hours.',
    })
  } catch (error) {
    res.status(500).json({ error: 'Failed to save contact form' })
  }
})

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK' })
})

app.listen(PORT, () => {
  console.log(`✓ Infinity IT Solutions API running at http://localhost:${PORT}`)
})
