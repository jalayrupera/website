const skills = [
  { name: 'Languages', items: 'Python · TypeScript' },
  { name: 'Backend Frameworks', items: 'FastAPI' },
  { name: 'Databases', items: 'MongoDB · Redis · PostgreSQL' },
  { name: 'Messaging & Async', items: 'Celery · RabbitMQ' },
  { name: 'Infrastructure', items: 'Docker · Kubernetes · K3s · AWS · CI/CD Pipelines' },
  { name: 'Tools & Frameworks', items: 'Playwright · Git · REST APIs · JSON · Linux · ROS2 · MQTT' },
  { name: 'Specialized', items: 'LLM Prompting · Web Scraping Automation · System Design · Microservices' },
];

export default function Skills() {
  return (
    <section id="skills" className="section section-rule">
      <div className="container">
        <h2 className="section-label">Skills</h2>

        <div className="skill-rows">
          {skills.map((category) => (
            <div key={category.name} className="skill-row">
              <div className="skill-category">{category.name}</div>
              <div className="skill-items">{category.items}</div>
            </div>
          ))}
          <div className="skill-row">
            <div className="skill-category muted">Education</div>
            <div className="skill-items">B.Tech, Computer Science — REVA University, 2017–2021</div>
          </div>
        </div>
      </div>
    </section>
  );
}
