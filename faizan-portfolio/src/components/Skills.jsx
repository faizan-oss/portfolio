import './Skills.css';
import { useInView } from '../hooks/useInView';

const skills = [
  { name: "HTML5", icon: "/icons/HTML5.png" },
  { name: "CSS3", icon: "/icons/CSS3.png" },
  { name: "JavaScript", icon: "/icons/JavaScript.png" },
  { name: "React", icon: "/icons/React.png" },
  { name: "Node.js", icon: "/icons/Node.js.png" },
  { name: "Firebase", icon: "/icons/Firebase.png" },
  { name: "MongoDB", icon: "/icons/MongoDB.png" },
  { name: "Git", icon: "/icons/Git.png" },
  { name: "GitHub", icon: "/icons/GitHub.png" },
  { name: "Postman", icon: "/icons/Postman.png" },
  { name: "Express", icon: "/icons/Express.png" },
];

const firstHalf = skills.slice(0, 6);
const secondHalf = skills.slice(6, 12);

export default function Skills() {
  const [ref, inView] = useInView();

  return (
    <section className="skills" id="skills" ref={ref}>
      <h2 className="gradient-text"
  style={{ backgroundImage:  'linear-gradient(to right, #f5af19, #f12711)' }}>Tech Stack</h2>

      <div className={`skills-row ${inView ? 'slide-in-left' : ''}`}>
        {firstHalf.map((skill, idx) => (
          <div className="skill-card" key={idx}>
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>

      <div className={`skills-row ${inView ? 'slide-in-right' : ''}`}>
        {secondHalf.map((skill, idx) => (
          <div className="skill-card" key={idx}>
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}