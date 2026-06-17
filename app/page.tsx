
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header className="header">
        <div className="container nav">
          <div className="logo">
            <Image src="/Gnome Tactical.png" alt="Logo" width={60} height={60}/>
            <span>Gnome Tactical</span>
          </div>
          <nav>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="overlay">
          <h1>Premium Firearms & Accessories</h1>
          <p>Engineered for precision. Built for reliability.</p>
        </div>
      </section>

      <section id="services" className="section">
        <h2>Services</h2>
        <div className="grid">
          <div className="card"><h3>Manufacturing</h3></div>
          <div className="card"><h3>Parts & Accessories</h3></div>
          <div className="card"><h3>Dealer Services</h3></div>
        </div>
      </section>

      <section id="about" className="section">
        <h2>About</h2>
        <p>Compliance and safety first. All operations must follow applicable laws and regulations.</p>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <form action="/api/contact" method="POST" className="form">
          <input name="name" placeholder="Name" required />
          <input name="email" type="email" placeholder="Email" required />
          <textarea name="message" placeholder="Message" required />
          <button type="submit">Send</button>
        </form>
      </section>
    </main>
  );
}
