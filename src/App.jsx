import { useEffect, useState } from 'react'
import { Routes, Route, Link, useNavigate, useParams } from 'react-router-dom'
import { products, getCheckoutUrl } from './data/products'
import ShippingPage from './components/ShippingPage'
import FAQPage from './components/FAQPage'
import SizeGuidePage from './components/SizeGuidePage'
import './App.css'

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      { threshold: 0.12 }
    )
    const els = document.querySelectorAll('.reveal')
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

function FoxIcon() {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* ears */}
      <polygon points="18,8 38,52 0,52" fill="#FF4500" opacity="0.9" />
      <polygon points="102,8 120,52 82,52" fill="#FF4500" opacity="0.9" />
      {/* head */}
      <ellipse cx="60" cy="72" rx="46" ry="42" fill="#FF4500" />
      {/* muzzle */}
      <ellipse cx="60" cy="88" rx="26" ry="22" fill="#f5f0e8" opacity="0.85" />
      {/* eyes */}
      <ellipse cx="44" cy="66" rx="6" ry="7" fill="#080808" />
      <ellipse cx="76" cy="66" rx="6" ry="7" fill="#080808" />
      {/* eye shine */}
      <ellipse cx="46" cy="63" rx="2" ry="2.5" fill="#fff" opacity="0.5" />
      <ellipse cx="78" cy="63" rx="2" ry="2.5" fill="#fff" opacity="0.5" />
      {/* nose */}
      <ellipse cx="60" cy="84" rx="4" ry="3" fill="#080808" />
      {/* top hat */}
      <rect x="36" y="18" width="48" height="30" fill="#080808" rx="2" />
      <rect x="28" y="46" width="64" height="8" fill="#080808" rx="1" />
      <rect x="38" y="20" width="44" height="4" fill="#FF4500" rx="1" />
    </svg>
  )
}

function BagIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  )
}

const MARQUEE_ITEMS = [
  { type: 'text', content: 'PUT HIM ON THE MERCH — RYAN GOSLING' },
  { type: 'dot' },
  { type: 'text', content: 'FREE UK SHIPPING OVER £50' },
  { type: 'dot' },
  { type: 'text', content: 'PUT HIM ON THE MERCH — RYAN GOSLING' },
  { type: 'dot' },
  { type: 'text', content: 'FREE UK SHIPPING OVER £50' },
  { type: 'dot' },
  { type: 'text', content: 'PUT HIM ON THE MERCH — RYAN GOSLING' },
  { type: 'dot' },
  { type: 'text', content: 'FREE UK SHIPPING OVER £50' },
  { type: 'dot' },
  { type: 'text', content: 'PUT HIM ON THE MERCH — RYAN GOSLING' },
  { type: 'dot' },
  { type: 'text', content: 'FREE UK SHIPPING OVER £50' },
  { type: 'dot' },
]

function HomePage() {
  useScrollReveal()
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(null)

  const handleSubscribe = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const res = await fetch('/.netlify/functions/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (res.ok) {
        setSubmitted(true)
        setEmail('')
      } else {
        const data = await res.json()
        setError(data.error || 'Something went wrong. Try again.')
      }
    } catch {
      setError('Connection failed. Try again.')
    }

    setIsSubmitting(false)
  }

  return (
    <div>
      {/* ── Announcement Bar ── */}
      <div className="announcement-bar" role="marquee" aria-label="Announcements">
        <div className="marquee-track" aria-hidden="true">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) =>
            item.type === 'dot' ? (
              <span key={i} className="marquee-dot">◆</span>
            ) : (
              <span key={i} className="marquee-item">{item.content}</span>
            )
          )}
        </div>
      </div>

      {/* ── Navigation ── */}
      <nav className="nav" aria-label="Main navigation">
        <Link to="/" className="nav-brand">MADE IT FOX</Link>
        <ul className="nav-links">
          <li><a href="#shop">SHOP</a></li>
          <li><a href="#story">STORY</a></li>
          <li><a href="#lookbook">LOOKBOOK</a></li>
        </ul>
        <a href="https://madeitfox.myshopify.com/cart" className="bag-btn" aria-label="View shopping cart">
          <BagIcon />
        </a>
        <button className="nav-hamburger" aria-label="Open menu">
          <span /><span /><span />
        </button>
      </nav>

      {/* ── Hero ── */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-inner">
          <p className="hero-eyebrow reveal">Ryan Gosling — 2024</p>

          <div className="hero-quote reveal">
            <blockquote>
              <p className="quote-text" id="hero-heading">
                "There should be a fox leaning against Big Ben with a top hat like, Started at the bottom now I'm here at the top... put him on the merch."
              </p>
              <cite>— RYAN GOSLING</cite>
            </blockquote>
          </div>

          <div className="hero-divider" aria-hidden="true" />

          <div className="hero-so-we-did reveal">
            <span>SO WE DID.</span>
          </div>
        </div>
      </section>

      {/* ── The Moment ── */}
      <section className="moment-section" aria-labelledby="moment-heading">
        <div className="moment-inner">
          <h2 className="section-title reveal" id="moment-heading">THE MOMENT THAT STARTED IT ALL</h2>
          <div className="moment-video reveal">
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/3ZEY3HPRhxg?start=406"
                title="Ryan Gosling talks about London foxes"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <p className="moment-caption reveal">
            Ryan Gosling told London to celebrate its foxes. Put him on the merch, he said. So we did.
          </p>
        </div>
      </section>

      {/* ── Products ── */}
      <section id="shop" className="products-section" aria-labelledby="shop-heading">
        <h2 className="section-title reveal" id="shop-heading">THE DROP</h2>
        <div className="products-grid">
          {products.map((p, i) => (
            <Link
              key={p.slug}
              to={`/shop/${p.slug}`}
              className={`product-card reveal reveal-delay-${i + 1}`}
            >
              <div className="product-img">
                <img
                  src={p.images[0]}
                  alt={p.name}
                  className="product-img-photo"
                />
                <span className="product-tag">{p.tag}</span>
              </div>
              <div className="product-info">
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <div className="product-footer">
                  <span className="product-price">{p.basePrice}</span>
                  <span className="add-btn" aria-label={`View ${p.name}`}>
                    VIEW PRODUCT
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Brand Story ── */}
      <section id="story" className="story-section" aria-labelledby="story-heading">
        <div className="story-inner">
          <p className="story-label reveal">Our Story</p>
          <h2 className="story-title reveal" id="story-heading">
            They Played The Long Game
          </h2>
          <div className="story-body reveal">
            <p>
              The urban fox doesn't ask for permission. It moves through the city at night —
              adapting, surviving, thriving in the spaces between. While the world sleeps,
              it builds. It has always found its way in.
            </p>
            <p>
              This is the spirit of every immigrant who crossed an ocean with nothing but
              ambition. Who built something from scraps that others discarded. Who heard{' '}
              <em>no</em> so many times it stopped sounding like a word and started sounding
              like a dare.
            </p>
            <p>
              Made It Fox is for those who refused to quit. Who showed up when the world
              told them not to. Who heard the door slam and found the window. Who took the
              long way around and arrived at the top anyway — top hat and all.
            </p>
            <p className="story-tagline">The fox always finds a way.</p>
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="newsletter-section" aria-labelledby="newsletter-heading">
        <div className="newsletter-inner reveal">
          <h2 id="newsletter-heading">JOIN THE PACK</h2>
          <p>First access to drops. No fluff. No spam. Just the signal.</p>
          {submitted ? (
            <p className="newsletter-confirm">YOU'RE IN. WELCOME TO THE PACK.</p>
          ) : (
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="YOUR EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email address"
              />
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'SUBSCRIBING...' : 'SUBSCRIBE'}
              </button>
            </form>
          )}
          {error && <p className="newsletter-error">{error}</p>}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand-block">
            <span className="footer-logo">MADE IT FOX</span>
            <p className="footer-tagline">Started at the bottom.</p>
          </div>
          <div className="footer-cols">
            <div className="footer-col">
              <h4>SHOP</h4>
              <ul>
                <li><Link to="/#shop">All Products</Link></li>
                <li><Link to="/#shop">New Arrivals</Link></li>
                <li><Link to="/#shop">Limited Drops</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>INFO</h4>
              <ul>
                <li><Link to="/#story">Our Story</Link></li>
                <li><Link to="/size-guide">Sizing Guide</Link></li>
                <li><Link to="/shipping">Shipping &amp; Returns</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>CONNECT</h4>
              <ul>
                <li><a href="https://instagram.com/madeitfoxuk" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="https://tiktok.com/@madeitfox" target="_blank" rel="noopener noreferrer">TikTok</a></li>
                <li><a href="https://x.com/madeitfox" target="_blank" rel="noopener noreferrer">Twitter / X</a></li>
                <li><a href="mailto:hello@madeitfox.com">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Made It Fox. All rights reserved.</p>
          <p>The fox always finds a way.</p>
        </div>
      </footer>
    </div>
  )
}

function ProductPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const product = products.find(p => p.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  useEffect(() => {
    if (product) {
      document.title = `${product.name} | Made It Fox`

      const metaDesc = document.querySelector('meta[name="description"]')
      if (metaDesc) metaDesc.setAttribute('content', product.description)

      const ogTitle = document.querySelector('meta[property="og:title"]')
      if (ogTitle) ogTitle.setAttribute('content', `${product.name} | Made It Fox`)

      const ogDesc = document.querySelector('meta[property="og:description"]')
      if (ogDesc) ogDesc.setAttribute('content', product.description)

      const ogImage = document.querySelector('meta[property="og:image"]')
      if (ogImage) ogImage.setAttribute('content', `https://madeitfox.com${product.images[0]}`)

      const ogUrl = document.querySelector('meta[property="og:url"]')
      if (ogUrl) ogUrl.setAttribute('content', `https://madeitfox.com/shop/${product.slug}`)

      const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.name,
        description: product.description,
        image: `https://madeitfox.com${product.images[0]}`,
        brand: { '@type': 'Brand', name: 'Made It Fox' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'GBP',
          price: product.prices[product.sizes[0]],
          availability: 'https://schema.org/InStock',
          url: `https://madeitfox.com/shop/${product.slug}`,
          seller: { '@type': 'Organization', name: 'Made It Fox' },
        },
      }

      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.id = 'product-structured-data'
      script.textContent = JSON.stringify(structuredData)
      document.head.appendChild(script)
    }

    return () => {
      document.title = 'Made It Fox | Started at the Bottom, Made It to the Top'
      const metaDesc = document.querySelector('meta[name="description"]')
      if (metaDesc) metaDesc.setAttribute('content', 'Urban streetwear for those who refused to quit. Inspired by the streets, built for the top. Premium hoodies, tees, caps and more.')
      const existing = document.getElementById('product-structured-data')
      if (existing) existing.remove()
    }
  }, [product])

  const [selectedSize, setSelectedSize] = useState(null)
  const [activeImg, setActiveImg] = useState(0)
  const [detailsOpen, setDetailsOpen] = useState(false)

  if (!product) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '24px', background: '#080808' }}>
        <p style={{ fontFamily: 'var(--font-heading)', color: 'var(--muted)', letterSpacing: '0.1em' }}>PRODUCT NOT FOUND</p>
        <button className="add-btn" onClick={() => navigate('/')}>BACK TO SHOP</button>
      </div>
    )
  }

  const displayPrice = selectedSize
    ? `£${product.prices[selectedSize].toFixed(2)}`
    : product.basePrice

  const handleBuyNow = () => {
    if (!selectedSize) return
    const variantId = product.shopifyVariants[selectedSize]
    if (variantId) {
      window.location.href = getCheckoutUrl(variantId)
    }
  }

  const isOneSize = product.sizes.length === 1 && product.sizes[0] === 'One size'

  return (
    <div className="product-page">
      {/* Sticky nav */}
      <nav className="nav" aria-label="Main navigation">
        <Link to="/" className="nav-brand">MADE IT FOX</Link>
        <ul className="nav-links">
          <li><Link to="/#shop">SHOP</Link></li>
          <li><Link to="/#story">STORY</Link></li>
          <li><Link to="/#lookbook">LOOKBOOK</Link></li>
        </ul>
        <a href="https://madeitfox.myshopify.com/cart" className="bag-btn" aria-label="View shopping cart">
          <BagIcon />
        </a>
        <button className="nav-hamburger" aria-label="Open menu"><span /><span /><span /></button>
      </nav>

      <div className="pp-container">
        {/* Back link */}
        <Link to="/#shop" className="pp-back">← Back to The Drop</Link>

        <div className="pp-layout">
          {/* Left: images */}
          <div className="pp-images">
            <div className="pp-main-img">
              <img
                src={product.images[activeImg]}
                alt={product.name}
                className="pp-main-img-el"
              />
            </div>
            {product.images.length > 1 && (
              <div className="pp-thumbs">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    className={`pp-thumb${activeImg === i ? ' pp-thumb-active' : ''}`}
                    onClick={() => setActiveImg(i)}
                    aria-label={`View image ${i + 1}`}
                  >
                    <img src={img} alt="" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: details */}
          <div className="pp-details">
            <span className="product-tag pp-tag">{product.tag}</span>
            <h1 className="pp-name">{product.name}</h1>
            <p className="pp-price">{displayPrice}</p>
            {product.colour && (
              <p className="pp-colour">Colour: <span>{product.colour}</span></p>
            )}

            <p className="pp-desc">{product.description}</p>

            {/* Size selector */}
            {!isOneSize && (
              <div className="pp-sizes">
                <p className="pp-sizes-label">SIZE</p>
                <div className="pp-sizes-grid">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      className={`pp-size-btn${selectedSize === size ? ' pp-size-active' : ''}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                {['statement-hoodie', 'bigben-tee', 'understated-tee'].includes(product.slug) && (
                  <Link to="/size-guide" className="pp-size-guide-link">Size guide →</Link>
                )}
              </div>
            )}

            {isOneSize && (
              <p className="pp-onesize">One Size</p>
            )}

            <button
              className="pp-buy-now add-btn"
              onClick={(e) => {
                e.preventDefault()
                if (isOneSize) {
                  const variantId = product.shopifyVariants[product.sizes[0]]
                  if (variantId) {
                    window.location.href = getCheckoutUrl(variantId)
                  }
                } else {
                  handleBuyNow()
                }
              }}
              disabled={!isOneSize && !selectedSize}
            >
              {!isOneSize && !selectedSize ? 'SELECT A SIZE' : 'BUY NOW'}
            </button>

            {/* Details accordion */}
            <div className="pp-accordion">
              <button
                className="pp-accordion-trigger"
                onClick={() => setDetailsOpen(o => !o)}
                aria-expanded={detailsOpen}
              >
                <span>PRODUCT DETAILS</span>
                <span className="pp-accordion-icon">{detailsOpen ? '−' : '+'}</span>
              </button>
              {detailsOpen && (
                <p className="pp-accordion-body">{product.details}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop/:slug" element={<ProductPage />} />
      <Route path="/shipping" element={<ShippingPage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/size-guide" element={<SizeGuidePage />} />
    </Routes>
  )
}
