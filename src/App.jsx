import { useEffect, useState } from 'react'
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

const PRODUCTS = [
  {
    name: 'The Statement Hoodie',
    price: '£44.99',
    tag: 'FLAGSHIP',
    desc: 'Fox. Big Ben. Graffiti. The full story on one piece. If you only get one thing, make it this.',
    img: 'https://files.catbox.moe/ehgr39.png',
  },
  {
    name: 'Big Ben Graphic Tee',
    price: '£29.99',
    tag: 'ICONIC',
    desc: 'The fox outside the tower. Top hat, bow tie, arms crossed. This is London. This is the story.',
    img: 'https://files.catbox.moe/5belru.png',
  },
  {
    name: 'The Understated Tee',
    price: '£27.99',
    tag: 'CORE',
    desc: 'No big statement. Just the fox. Clean navy. Those who know, know.',
    img: 'https://files.catbox.moe/8a3f4a.png',
  },
  {
    name: 'Top Hat Snapback',
    price: '£29.99',
    tag: 'HEADWEAR',
    desc: 'The hat on the fox. Now on your head. One size. One story.',
    img: 'https://files.catbox.moe/scff0b.png',
  },
  {
    name: 'Morning Fox Mug',
    price: 'from £14.99',
    tag: 'LIFESTYLE',
    desc: 'Start every morning at the top. Fox leaning on Big Ben before the world wakes up.',
    img: 'https://files.catbox.moe/v7pdnz.png',
  },
  {
    name: 'Die-Cut Sticker',
    price: 'from £3.99',
    tag: 'STICKER',
    desc: 'Slap it anywhere. The fox goes everywhere you go. Three sizes.',
    img: 'https://files.catbox.moe/7quse5.png',
  },
]

const DROPS = [
  { name: 'The Hustle', sub: 'While They Slept I Built' },
  { name: 'The Night Shift', sub: 'The City Never Sleeps Neither Do I' },
  { name: 'Top Floor', sub: 'View From the Top' },
  { name: 'The Comeback', sub: 'They Wrote Me Off I Wrote Back' },
  { name: 'Old Money', sub: 'Earned Not Given' },
  { name: 'The Origins', sub: 'From the Bottom of Africa to the Top of London' },
]

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

export default function App() {
  useScrollReveal()
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [bagCount] = useState(0)

  function handleSubscribe(e) {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
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
        <a href="#" className="nav-brand">MADE IT FOX</a>
        <ul className="nav-links">
          <li><a href="#shop">SHOP</a></li>
          <li><a href="#story">STORY</a></li>
          <li><a href="#drops">DROPS</a></li>
          <li><a href="#lookbook">LOOKBOOK</a></li>
        </ul>
        <button className="bag-btn" aria-label={`Shopping bag, ${bagCount} items`}>
          BAG ({bagCount})
        </button>
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
          {PRODUCTS.map((p, i) => (
            <article
              key={p.name}
              className={`product-card reveal reveal-delay-${i + 1}`}
            >
              <div className="product-img">
                <img
                  src={p.img}
                  alt={p.name}
                  className="product-img-photo"
                />
                <span className="product-tag">{p.tag}</span>
              </div>
              <div className="product-info">
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <div className="product-footer">
                  <span className="product-price">{p.price}</span>
                  <button className="add-btn" aria-label={`Add ${p.name} to bag`}>
                    ADD TO BAG
                  </button>
                </div>
              </div>
            </article>
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

      {/* ── Upcoming Drops ── */}
      <section id="drops" className="drops-section" aria-labelledby="drops-heading">
        <h2 className="section-title reveal" id="drops-heading">COMING SOON</h2>
        <div className="drops-grid">
          {DROPS.map((d, i) => (
            <div
              key={d.name}
              className={`drop-card reveal reveal-delay-${(i % 3) + 1}`}
            >
              <div className="drop-img-inner" aria-hidden="true">
                <FoxIcon />
              </div>
              <div className="drop-overlay">
                <span className="drop-tag">TEASER</span>
                <h3 className="drop-name">{d.name}</h3>
                <p className="drop-sub">"{d.sub}"</p>
              </div>
            </div>
          ))}
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
              <button type="submit">SUBSCRIBE</button>
            </form>
          )}
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
                <li><a href="#">All Products</a></li>
                <li><a href="#">New Arrivals</a></li>
                <li><a href="#">Limited Drops</a></li>
                <li><a href="#">Sale</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>INFO</h4>
              <ul>
                <li><a href="#">Our Story</a></li>
                <li><a href="#">Sizing Guide</a></li>
                <li><a href="#">Shipping &amp; Returns</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>CONNECT</h4>
              <ul>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">TikTok</a></li>
                <li><a href="#">Twitter / X</a></li>
                <li><a href="#">Contact Us</a></li>
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
