import Header from './components/Header';
import About from './components/About';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GitHubSection from './components/GitHubSection';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <GitHubSection />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
