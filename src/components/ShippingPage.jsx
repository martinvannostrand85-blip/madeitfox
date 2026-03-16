import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function ShippingPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Shipping & Returns | Made It Fox'
    return () => { document.title = 'Made It Fox | Started at the Bottom, Made It to the Top' }
  }, [])

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

        <h1 className="trust-title">SHIPPING & RETURNS</h1>

        <div className="trust-content">
          <h2>DELIVERY</h2>
          <p>
            All products are printed on demand by our fulfilment partner and shipped directly to you.
            Because each item is made to order, please allow the following delivery times:
          </p>
          <p>
            <strong>UK Standard Delivery: 5 to 8 business days</strong><br />
            Printing typically takes 2 to 5 business days, plus 2 to 3 days for Royal Mail delivery.
          </p>
          <p>
            <strong>International Delivery: 8 to 20 business days</strong><br />
            Availability and delivery times vary by destination.
          </p>

          <h2>SHIPPING COSTS</h2>
          <p>UK orders over £50 qualify for free standard shipping.</p>
          <p>
            For orders under £50, shipping is calculated at checkout based on your location and the items
            in your bag. Typical UK shipping costs range from £3 to £5.
          </p>

          <h2>TRACKING</h2>
          <p>
            You will receive an email with tracking information once your order has been dispatched.
            Please allow 24 hours for the tracking to update after receiving the email.
          </p>

          <h2>RETURNS</h2>
          <p>
            Because all products are printed on demand specifically for you, we cannot accept returns
            for change of mind.
          </p>
          <p>
            If your item arrives damaged, defective, or with a printing error, please contact us within
            14 days of delivery at <a href="mailto:hello@madeitfox.com" className="trust-link">hello@madeitfox.com</a> with
            a photo of the issue and your order number. We will arrange a replacement or full refund.
          </p>

          <h2>WRONG SIZE</h2>
          <p>
            We strongly recommend checking our <Link to="/size-guide" className="trust-link">size guide</Link> before
            ordering. If you order the wrong size, we are unfortunately unable to offer an exchange as
            each item is produced individually. Please refer to the size guide to ensure the best fit.
          </p>

          <h2>CANCELLATIONS</h2>
          <p>
            Orders can be cancelled within 2 hours of placement. After this window, production may have
            already started and the order cannot be cancelled.
          </p>
          <p>
            To request a cancellation, email <a href="mailto:hello@madeitfox.com" className="trust-link">hello@madeitfox.com</a> with
            your order number immediately.
          </p>
        </div>
      </div>
    </div>
  )
}
