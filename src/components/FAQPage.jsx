import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const faqs = [
  {
    q: 'How long does delivery take?',
    a: 'UK orders typically arrive within 5 to 8 business days. Each item is printed on demand, so please allow 2 to 5 days for production plus shipping time.',
  },
  {
    q: 'Do you ship internationally?',
    a: 'Yes. International delivery takes 8 to 20 business days depending on your location. Shipping costs are calculated at checkout.',
  },
  {
    q: 'Can I return my order?',
    a: 'Because every item is made to order, we cannot accept returns for change of mind. If your item arrives damaged or with a print error, contact us within 14 days and we will sort it out.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major credit and debit cards, Apple Pay, Google Pay, and Shop Pay through our secure Shopify checkout.',
  },
  {
    q: 'How do I know what size to order?',
    a: 'Check our size guide for detailed measurements. When in doubt, size up. Our t-shirts are a retail fit (not oversized) and our hoodies are a standard unisex fit.',
  },
  {
    q: 'Will the print crack or fade?',
    a: 'Our DTG (direct to garment) prints are made to last. Wash inside out on a cool cycle and avoid tumble drying to keep the print looking fresh for longer. Embroidered products (snapback) are even more durable.',
  },
  {
    q: 'Is the fox embroidered or printed?',
    a: 'It depends on the product. The snapback has an embroidered fox. The hoodies and t-shirts use DTG printing for the full-colour artwork. The left chest fox on the hoodie is also DTG printed.',
  },
  {
    q: 'Who is behind Made It Fox?',
    a: "The brand was inspired by Ryan Gosling's now-famous rant about London foxes deserving to be on the merch. We agreed. So we made it happen.",
  },
  {
    q: 'How do I contact you?',
    a: 'Email us at hello@madeitfox.com. We aim to reply within 24 hours.',
  },
]

export default function FAQPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'FAQ | Made It Fox'
    return () => { document.title = 'Made It Fox | Started at the Bottom, Made It to the Top' }
  }, [])

  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="trust-page">
      <nav className="nav" aria-label="Main navigation">
        <Link to="/" className="nav-brand">MADE IT FOX</Link>
        <ul className="nav-links">
          <li><Link to="/#shop">SHOP</Link></li>
          <li><Link to="/#story">STORY</Link></li>
          <li><Link to="/#lookbook">LOOKBOOK</Link></li>
        </ul>
        <a href="https://madeitfox.myshopify.com/cart" className="bag-btn" aria-label="View shopping cart">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 01-8 0" />
          </svg>
        </a>
        <button className="nav-hamburger" aria-label="Open menu"><span /><span /><span /></button>
      </nav>

      <div className="trust-container">
        <Link to="/#shop" className="pp-back">← Back to shop</Link>

        <h1 className="trust-title">FREQUENTLY ASKED QUESTIONS</h1>

        <div className="trust-content">
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <button
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span>{faq.q}</span>
                <span className="faq-icon">{openIndex === i ? '−' : '+'}</span>
              </button>
              {openIndex === i && (
                <p className="faq-answer">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
