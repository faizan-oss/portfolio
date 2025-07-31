import './Projects.css';
import { useInView } from '../hooks/useInView';

const projects = [
  {
    title: "RPS Royals-Multiplayer Game",
    description: [
      "Developed a real-time multiplayer Rock-Paper-Scissors game with live chat and dynamic score tracking.",
      "Integrated Socket.IO for real-time gameplay synchronization and designed RESTful APIs with Express and MongoDB.",
      "Deployed frontend on Vercel and backend on Render with seamless round transitions and auto-resets."
    ],
    tags: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Socket.IO", "MongoDB", "NodeJS"],
    live: "https://rps-royals.vercel.app/",  
    code: "https://github.com/faizan-oss/RPS-Royals",
    image: "/public/profile/RPS.png"
  },
  {
    title: "WBC News (BBC Clone)",
    description: [
      "Developed a responsive multi-page news site inspired by BBC's layout with real-time news integration using external APIs.",
      "Implemented user login/register system with local storage and designed sticky header with mobile navigation (hamburger menu).",
      "Utilized CSS Grid and Flexbox for modern, responsive layouts with client-side form validation and pagination support."
    ],
    tags: ["HTML", "CSS", "JavaScript"],
    live: "https://visionary-gumption-09d797.netlify.app/",  
    code: "https://github.com/faizan-oss/wbc",
    image: "/public/profile/WBC.png"
  },
  {
    title: "MIT TechCart",
    description: [
      "Built a dynamic web platform for MIT students to buy and sell second-hand items like textbooks and gadgets.",
      "Integrated REST APIs to fetch and display real-time product listings with enhanced user experience.",
      "Encouraged sustainable and collaborative use of resources through interactive features and dynamic UI."
    ],
    tags: ["HTML", "CSS", "JavaScript"],
    live: "https://mit-techcart.vercel.app/",
    code: "https://github.com/jasminekeshari/2409",
    image: "/public/profile/MIT.png"
  },
  {
    title: "Aniverse",
    description: [
      "Developed a feature-rich anime discovery platform with seamless browsing experience.",
      "Integrated JIKEN API to fetch real-time anime data, user ratings, and reviews.",
      "Enhanced the user interface with Material UI for a modern and engaging experience."
    ],
    tags: ["React", "Firebase", "Material UI"],
    live: "https://melodious-gnome-8dad79.netlify.app/",
    code: "https://github.com/faizan-oss/Aniverse",
    image: "/public/profile/Anniverse.png"
  },
];

export default function Projects() {
  const [ref, inView] = useInView();

  return (
    <section className="projects" id="projects" ref={ref}>
      <h2 className="gradient-text"
        style={{ backgroundImage: 'linear-gradient(to right, #f5af19, #f12711)' }}>
        Projects
      </h2>
      
      <div className={`projects-container ${inView ? 'slide-in-grid' : ''}`}>
        {projects.map((project, idx) => (
          <div className={`project-item ${inView ? (idx % 2 === 0 ? 'slide-in-left' : 'slide-in-right') : ''}`} key={idx}>
            <div className="project-content">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                {Array.isArray(project.description) ? (
                  <ul className="project-description">
                    {project.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{project.description}</p>
                )}
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}