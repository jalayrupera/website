const projects = [
  {
    name: 'Insurance Eligibility Project',
    entity: 'Mantys',
    metric: '$1.5M+ ARR',
    description:
      'End-to-end insurance eligibility system used by hospitals and clinics across the UAE — a Chrome extension front-end backed by APIs, scraping pipelines, and reporting infrastructure. Real-time coverage verification via Emirates ID, Member ID, or DHA ID, integrated with hospital information systems.',
    keywords: [
      'Chrome Extension',
      'FastAPI',
      'Playwright',
      'LLM',
      'Healthcare',
      'HIS Integration',
    ],
  },
  {
    name: 'Drishti — Autonomous Drone System',
    entity: 'Vigilare Technologies',
    metric: 'GPS-denied',
    description:
      'GPS-denied navigation system integrating sensor drivers, visual-inertial odometry (VIO), and backend communication. Data processing pipelines for mission logs and telemetry, deployed with Docker + K3s for modular orchestration.',
    keywords: ['Drones', 'VIO', 'ROS2', 'FastAPI', 'Docker', 'K3s'],
  },
  {
    name: 'Stock Wars — Virtual Trading Platform',
    entity: 'Zu Technologies',
    metric: '10K+ users',
    description:
      'Real-time virtual stock trading simulation platform handling 10K+ concurrent users — FastAPI, Celery, and Redis backend with asynchronous task processing via RabbitMQ and optimized database operations.',
    keywords: ['Trading Simulation', 'Real-time', 'FastAPI', 'Celery', 'Redis', 'RabbitMQ'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section section-rule">
      <div className="container">
        <h2 className="section-label">Selected projects</h2>

        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.name} className="project-card">
              <div className="project-header">
                <span className="project-entity">{project.entity}</span>
                <span className="project-metric">{project.metric}</span>
              </div>
              <h3 className="project-title">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-keywords">
                {project.keywords.map((keyword) => (
                  <span key={keyword} className="keyword">
                    {keyword}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
