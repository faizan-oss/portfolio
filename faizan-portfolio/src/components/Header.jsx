import { useState, useEffect } from 'react';
import './Header.css';
import { Menu, X, Download } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    document.body.classList.toggle('no-scroll', isOpen);
  }, [isOpen]);

  const downloadResume = () => {
    // Download PDF
    const link = document.createElement('a');
    link.href = '/profile/Faizan.pdf?v=' + Date.now(); // Cache-busting
    link.download = 'Faizan.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Open Google Drive in new tab
    window.open('https://drive.google.com/file/d/1OWUHAnD1j5e-KMr9fHesGIlQ6wUOsLfY/view?usp=sharing', '_blank');
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
              <button 
                className="resume-link"
                onClick={downloadResume}
              >
                Resume
                <Download size={16} />
              </button>
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
