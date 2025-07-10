import './Projects.css';
import { useInView } from '../hooks/useInView';

const projects = [
  {
    title: "E-commerce Clone (eBay Inspired)",
    description: "Full-featured static e-commerce platform built using HTML, CSS, and JavaScript. It includes product listings, cart functionality, and responsive design.",
    tags: ["HTML", "CSS", "JavaScript"],
    live: "#",
    code: "#"
  },
  {
  title: "WBC News (BBC Clone)",
  description: "A responsive BBC-style news clone that fetches live world news using a real-time news API. Built with plain HTML, CSS, and JavaScript.",
  tags: ["HTML", "CSS", "JavaScript"],
  live: "https://visionary-gumption-09d797.netlify.app/",  
  code: "https://github.com/faizan-oss/wbc"   
},
  {
    title: "Pharmacy Platform",
    description: "Online medicine ordering platform with product browsing, cart, and Firebase-powered backend. Built with React and Redux.",
    tags: ["React", "Redux", "Firebase", "Tailwind"],
    live: "https://pharmawebsite-s92s.vercel.app/",
    code: "https://github.com/BishtGaurav0/pharma/tree/main/pharma"
  },
  {
    title: "MIT TechCart",
    description: "A student platform for buying/selling academic essentials. Promotes sustainability by encouraging re-use of resources.",
    tags: ["HTML", "CSS", "JavaScript"],
    live: "https://mit-techcart.vercel.app/",
    code: "https://github.com/Ayushh1502/2409"
  }
];

export default function Projects() {
  const [ref, inView] = useInView();

  return (
    <section className="projects" id="projects" ref={ref}>
      <h2>Projects</h2>
      <div className={`project-grid ${inView ? 'fade-in' : ''}`}>
        {projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
            <div className="links">
              <a href={project.live} target="_blank" rel="noreferrer">Live Demo</a>
              <a href={project.code} target="_blank" rel="noreferrer">Source Code</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}