import './Education.css';
import { useInView } from '../hooks/useInView';

export default function Education() {
  const [ref, inView] = useInView();

  return (
    <section className="education" id="education" ref={ref}>
      <h2>Education</h2>
      <div className={`edu-list ${inView ? 'slide-in-left' : ''}`}>
        <div className="edu-item">
          <h3>B.Tech in CS & IT</h3>
          <p>Institute of Technical Education & Research, Bhubaneswar</p>
          <span>2020 – 2024</span>
        </div>
        <div className="edu-item">
          <h3>12th CBSE</h3>
          <p>Xavier's English High School, Jamshedpur</p>
          <span>2019</span>
        </div>
        <div className="edu-item">
          <h3>10th CBSE</h3>
          <p>DBMS Kadma High School, Jamshedpur</p>
          <span>2017</span>
        </div>
      </div>

      <h2>Certificates</h2>
      <ul className={`cert-list ${inView ? 'slide-in-left' : ''}`}>
        <li>ServiceNow Application Developer & Administrator</li>
        <li>Frontend Web Development (Meta)</li>
        <li>Backend Web Development (Meta)</li>
      </ul>
    </section>
  );
}