import { useState, useEffect } from 'react';
import './Header.css';
import { Menu, X, Download } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    document.body.classList.toggle('no-scroll', isOpen);
  }, [isOpen]);

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/profile/Resume.pdf';
    link.download = 'Faizan_Rahman_Khan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">Faizan.</div>

        <nav className={`nav ${isOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li><a href="#hero" onClick={() => setIsOpen(false)}>Home</a></li>
             <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
            <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
            <li><a href="#education" onClick={() => setIsOpen(false)}>Education</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
            <li className="resume-container">
              <a
                href="https://drive.google.com/file/d/1DY8kn2Dmo7NlmoErWYYFBzKYWpiqj9ef/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="resume-link"
              >
                Resume
                <Download 
                  size={16} 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    downloadResume();
                  }}
                  style={{ cursor: 'pointer' }}
                />
              </a>
            </li>
          </ul>
        </nav>

        <button className="burger" onClick={() => setIsOpen(!isOpen)} aria-label="Menu Toggle">
          {isOpen ? <X size={24} color="#fff" /> : <Menu size={24} color="#fff" />}
        </button>
      </div>
      
    </header>
  );
}
