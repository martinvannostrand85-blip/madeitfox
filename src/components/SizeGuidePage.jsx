import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function SizeGuidePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Size Guide | Made It Fox'
    return () => { document.title = 'Made It Fox | Started at the Bottom, Made It to the Top' }
  }, [])

  return (
    <div className="trust-page">
      <nav className="nav" aria-label="Main navigation">
        <Link to="/" className="nav-brand">MADE IT FOX</Link>
        <ul className="nav-links">
          <li><Link to="/#shop">SHOP</Link></li>
          <li><Link to="/#story">STORY</Link></li>
          <li><Link to="/#drops">DROPS</Link></li>
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

        <h1 className="trust-title">SIZE GUIDE</h1>

        <div className="trust-content">
          <p>All measurements are approximate. We recommend measuring a garment you already own and comparing.</p>

          <h2>UNISEX HOODIE (Gildan 18500)</h2>
          <div className="size-table-wrap">
            <table className="size-table">
              <thead>
                <tr>
                  <th>Size</th>
                  <th>Chest (cm)</th>
                  <th>Length (cm)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>S</td><td>97</td><td>66</td></tr>
                <tr><td>M</td><td>102</td><td>69</td></tr>
                <tr><td>L</td><td>107</td><td>72</td></tr>
                <tr><td>XL</td><td>112</td><td>74</td></tr>
                <tr><td>2XL</td><td>117</td><td>77</td></tr>
                <tr><td>3XL</td><td>122</td><td>79</td></tr>
                <tr><td>4XL</td><td>127</td><td>81</td></tr>
                <tr><td>5XL</td><td>132</td><td>84</td></tr>
              </tbody>
            </table>
          </div>

          <h2>UNISEX T-SHIRT (Bella + Canvas 3001)</h2>
          <div className="size-table-wrap">
            <table className="size-table">
              <thead>
                <tr>
                  <th>Size</th>
                  <th>Chest (cm)</th>
                  <th>Length (cm)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>XS</td><td>79</td><td>66</td></tr>
                <tr><td>S</td><td>86</td><td>71</td></tr>
                <tr><td>M</td><td>91</td><td>74</td></tr>
                <tr><td>L</td><td>97</td><td>76</td></tr>
                <tr><td>XL</td><td>102</td><td>79</td></tr>
                <tr><td>2XL</td><td>107</td><td>81</td></tr>
                <tr><td>3XL</td><td>112</td><td>84</td></tr>
                <tr><td>4XL</td><td>117</td><td>86</td></tr>
              </tbody>
            </table>
          </div>
          <p>Retail fit. If you prefer a looser fit, size up.</p>

          <h2>SNAPBACK (Yupoong 6089M)</h2>
          <p>One size fits most. Adjustable plastic snap closure. Structured crown, flat brim.</p>
          <p>Circumference: approximately 54 to 60 cm.</p>

          <h2>MUG</h2>
          <p>11oz: standard mug size, 9.5cm tall</p>
          <p>15oz: large mug, 11.5cm tall</p>
        </div>
      </div>
    </div>
  )
}
