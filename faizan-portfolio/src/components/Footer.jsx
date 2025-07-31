import './Footer.css';
import { useInView } from '../hooks/useInView';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

export default function Footer() {
  const [ref, inView] = useInView();

  return (
    <footer className={`footer ${inView ? 'fade-in' : ''}`} ref={ref}>
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Faizan Rahman Khan. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/faizan-oss" target="_blank" rel="noreferrer"><Github /></a>
          <a href="https://www.linkedin.com/in/faizan-rahman-khan-889661244" target="_blank" rel="noreferrer"><Linkedin /></a>
          <a href="mailto:faizanrahmankhan18@gmail.com"><Mail /></a>
          <a href="https://www.instagram.com/faizy_1811/" target="_blank" rel="noreferrer"><Instagram /></a>
        </div>
      </div>
    </footer>
  );
}
