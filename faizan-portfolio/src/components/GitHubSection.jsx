import GitHubCalendar from 'react-github-calendar';
import './GitHubSection.css';

export default function GitHubSection() {
  return (
    <section id="github" className="github-section">
      <h2
        className="gradient-text"
        style={{
          backgroundImage: 'linear-gradient(to right, #f5af19, #f12711)',
        }}
      >
        GitHub Activity
      </h2>

      <div className="github-widgets">
        <div className="neon-box calendar-box">
          <GitHubCalendar
            username="faizan-oss"
            blockSize={15}
            blockMargin={5}
            color="#A786DF"
          />
        </div>

        <div className="stats-grid">
          <div className="neon-box">
            <img
              src="https://github-readme-stats.vercel.app/api?username=faizan-oss&show_icons=true&theme=radical"
              alt="GitHub Stats"
            />
          </div>

          <div className="neon-box">
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=faizan-oss&layout=compact&theme=radical"
              alt="Top Languages"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
