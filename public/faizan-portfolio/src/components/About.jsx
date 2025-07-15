import { useEffect, useRef } from 'react';
import './About.css';

export default function About() {
  const aboutRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-about');
        }
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="about-section fade-about" ref={aboutRef}>
      <div className="about-container">
        <h2   className="gradient-text"
  style={{ backgroundImage:  'linear-gradient(to right, #f5af19, #f12711)' }}>About Me</h2>
        <p>
         A Full Stack Developer with a B.Tech in Computer Science and Information Technology.
        </p>
        <p>
          I build responsive and efficient web applications and love solving real-world problems through code.
        </p>
        <p>
          I’m known for my adaptability, communication skills, and creative thinking in team environments.
        </p>
        
<p>
  Outside of coding, I'm passionate about <strong>freestyle dancing</strong> and <strong>videography</strong> — both of which fuel my creativity and discipline.
</p>
      </div>
    </section>
  );
}
