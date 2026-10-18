import Image from 'next/image';

const services = [
  { number: '01', title: 'Parts & accessories', text: 'Thoughtfully selected components and accessories to help you build a setup that fits your needs.' },
  { number: '02', title: 'Custom builds', text: 'Talk through a custom project, component compatibility, and the details that make a setup your own.' },
  { number: '03', title: 'FFL transfers', text: 'Get guidance on coordinating a firearm transfer and the steps required to complete it responsibly.' },
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="container nav-container">
          <a className="brand" href="#home" aria-label="Gnome Tactical home">
            <Image src="/gnome-tactical.png" alt="Gnome Tactical — Firearm Parts & Accessories" width={160} height={80} priority />
          </a>
          <nav aria-label="Main navigation">
            <a href="#services">Services</a>
            <a href="#about">Our approach</a>
            <a className="nav-cta" href="#contact">Get in touch <span aria-hidden="true">↗</span></a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-backdrop" aria-hidden="true" />
          <div className="container hero-inner">
            <p className="eyebrow"><span /> Independent. Detail-driven. Ready to help.</p>
            <h1>Built for the<br /><span>way you shoot.</span></h1>
            <p className="hero-copy">Firearm parts, accessories, custom builds, and transfer support—with a focus on practical advice and responsible ownership.</p>
            <div className="hero-actions">
              <a href="#services" className="button button-primary">Explore services <span aria-hidden="true">↓</span></a>
              <a href="#about" className="text-link">Meet Gnome Tactical <span aria-hidden="true">→</span></a>
            </div>
            <div className="hero-note"><span className="note-mark">GT</span><span>Small stature.<br /><strong>Serious attention to detail.</strong></span></div>
          </div>
          <div className="hero-index" aria-hidden="true">GNOME TACTICAL <span>—</span> EST. FOR THE DETAIL</div>
        </section>

        <section className="services section-pad" id="services">
          <div className="container">
            <div className="section-heading">
              <div><p className="eyebrow"><span /> What we do</p><h2>Good gear.<br /><span>Good guidance.</span></h2></div>
              <p className="section-intro">From finding the right component to coordinating a transfer, we make the process straightforward and personal.</p>
            </div>
            <div className="service-grid">
              {services.map((service) => <article className="service-card" key={service.number}>
                <span className="service-number">{service.number}</span>
                <div className="service-arrow" aria-hidden="true">↗</div>
                <h3>{service.title}</h3><p>{service.text}</p>
              </article>)}
            </div>
            <p className="service-footnote">Services and availability vary by location. All work and transactions are subject to applicable laws and requirements.</p>
          </div>
        </section>

        <section className="about section-pad" id="about">
          <div className="container about-grid">
            <div className="about-art"><Image src="/gnome-tactical.png" alt="Gnome Tactical emblem and brand artwork" width={960} height={480} sizes="(max-width: 760px) 100vw, 48vw" /><span className="art-caption">THE GNOME TACTICAL STANDARD <span>01 / 03</span></span></div>
            <div className="about-copy"><p className="eyebrow"><span /> A different kind of shop</p><h2>Small shop.<br /><span>Big on the details.</span></h2><p>Gnome Tactical is built around helpful service, considered recommendations, and a respect for the responsibility that comes with every firearm.</p><p>Whether you’re exploring parts, planning a build, or arranging an FFL transfer, start with a conversation. We’ll help you understand the next steps.</p><a className="text-link" href="#contact">Let’s talk through it <span aria-hidden="true">→</span></a><div className="compliance-note"><span aria-hidden="true">✳</span><p><strong>Safety and compliance come first.</strong><br />All sales, transfers, and services are subject to applicable federal, state, and local laws.</p></div></div>
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="container contact-inner"><p className="eyebrow"><span /> Start here</p><h2>Have a project<br />in mind?</h2><p>Tell us what you’re looking for and we’ll help you figure out the right next step.</p><a className="button button-primary" href="#services">Explore services <span aria-hidden="true">↗</span></a><small>For product, build, and transfer inquiries.</small></div>
          <div className="contact-stamp" aria-hidden="true">GNOME<br />TACTICAL<br /><span>BUILT WITH INTENT</span></div>
        </section>
      </main>

      <footer><div className="container footer-inner"><a className="footer-brand" href="#home">GNOME <span>TACTICAL</span></a><p>© 2026 Gnome Tactical LLC. All rights reserved.</p><p className="footer-legal">All firearm sales and transfers are subject to applicable laws and background check requirements.</p></div></footer>
    </>
  );
}
