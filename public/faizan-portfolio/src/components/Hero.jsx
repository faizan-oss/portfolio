import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi, I'm Faizan Rahman Khan</h1>
          <p>Aspiring Full Stack Developer passionate about building responsive web apps using React, Node.js, and MongoDB.</p>
          <a href="#contact" className="cta">Contact Me</a>
        </div>
        <div className="hero-image">
          <img src="/profile/portfolio.png" alt="Faizan Rahman Khan" />
        </div>
      </div>
    </section>
  );
}
