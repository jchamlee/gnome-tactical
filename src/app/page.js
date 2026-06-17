import Image from 'next/image';

export const runtime = 'edge'; // Tells Cloudflare to run this on its ultra-fast global edge network

export default function Home() {
  return (
    <>
      {/* Header / Navigation */}
      <header>
        <div className="container nav-container">
          <div className="logo">
            {/* Next.js Image component pulling your logo from the public/ folder */}
            <Image 
              src="/Gnome Tactical.png" 
              alt="Gnome Tactical LLC Logo" 
              width={50} 
              height={50} 
              priority
            />
            <span>Gnome Tactical</span>
          </div>
          <nav>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact" className="btn-nav">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1>Premium Firearms & Accessories</h1>
          <p>Engineered for precision. Built for reliability. Gnome Tactical LLC delivers custom manufacturing, parts, and dealer services for the modern marksman.</p>
          <a href="#services" className="btn-primary">Explore Our Services</a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">What We Do</h2>
          <div className="services-grid">

            <div className="service-card">
              <div className="icon-box">
                <i className="fa-solid fa-gears"></i>
              </div>
              <h3>Firearms Manufacturing</h3>
              <p>Custom fabrication and assembly of high-tier firearms built to exact tolerances and rigorous performance standards.</p>
            </div>

            <div className="service-card">
              <div className="icon-box">
                <i className="fa-solid fa-screwdriver-wrench"></i>
              </div>
              <h3>Parts & Accessories</h3>
              <p>Enhance your platform with premium components, optics, custom rails, and tactical gear designed to give you the edge.</p>
            </div>

            <div className="service-card">
              <div className="icon-box">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <h3>Firearms Dealer</h3>
              <p>Your trusted, fully licensed dealer. We facilitate seamless transfers and source top-tier inventory for our clients.</p>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container about-grid">
          <div className="about-text">
            <h2>Small Stature. Massive Firepower.</h2>
            <p>At Gnome Tactical LLC, we believe that elite performance shouldn't be confined to standard expectations. Whether you are looking for a reliable duty tool, a competitive edge, or custom modifications, our attention to detail ensures your equipment never fails when it matters most.</p>
            <blockquote>
              "Compliance & Safety First. All manufacturing and sales strictly adhere to federal, state, and local regulations."
            </blockquote>
          </div>
          <div className="about-image">
            <Image 
              src="/Gnome Tactical.png" 
              alt="Gnome Tactical Core Branding" 
              width={450} 
              height={250} 
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get in Touch</h2>
          <p className="contact-subtitle">Have questions about a build, transfer, or specific parts? Drop us a line.</p>

          <form className="contact-form" action="#" method="POST">
            <div className="form-group-row">
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
            </div>
            <input type="email" placeholder="Email Address" required />
            <textarea rows={5} placeholder="How can we help you? (Inquiries, Custom Builds, FFL Transfers)" required></textarea>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container footer-content">
          <p>&copy; 2026 Gnome Tactical LLC. All Rights Reserved.</p>
          <p className="disclaimer">Must be 21 or older to purchase firearms. All sales are subject to background checks and local laws.</p>
        </div>
      </footer>
    </>
  );
}