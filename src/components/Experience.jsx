const jobs = [
  {
    num: '01',
    name: 'Mantys',
    yc: true,
    current: true,
    position: 'Full Stack Engineer',
    location: 'Bangalore, Karnataka',
    dates: 'Apr 2025 — Present',
    summary: 'Healthcare technology company building tools for insurance eligibility verification.',
    highlights: [
      'Engineered automated web scraping pipelines and the REST APIs powering them, using Playwright and Python, reducing manual patient data retrieval time by 80%.',
      'Developed LLM-based data transformation workflows converting unstructured page data into structured JSON with 95%+ accuracy — masking PII with synthetic data, so no personal information ever reached the AI.',
      'Enhanced the core Chrome extension, adding features and fixing bugs that reduced user-reported issues by 90%.',
      'Built an end-of-day reporting system emailing insurance eligibility summaries to hospitals and clinics — driving rejection rates down to 0.5–1% and cutting workload for front-office and RCM teams.',
      'Partnered with business, marketing, and ops teams on client implementations — owning outcomes beyond engineering, from onboarding to retention.',
    ],
  },
  {
    num: '02',
    name: 'Vigilare Technologies',
    yc: false,
    current: false,
    position: 'Founder & CEO — Backend Engineer',
    location: 'Bhavnagar, Gujarat',
    dates: 'Jan 2024 — Feb 2025',
    summary: 'Defense-tech startup building GPS-denied autonomous drone systems for mapping and inspection.',
    highlights: [
      'Founded a defense-tech startup building a GPS-denied autonomous drone system for mapping and inspection.',
      'Developed backend services and REST APIs using Python and FastAPI for real-time data streaming and mission control.',
      'Created ROS2 packages for sensor fusion, VIO, and telemetry communication via MQTT.',
      'Containerized and deployed backend systems with Docker and K3s, enabling modular and scalable deployment.',
    ],
  },
  {
    num: '03',
    name: 'Zu Technologies',
    yc: false,
    current: false,
    position: 'Backend Developer — B2B SaaS',
    location: 'Bangalore, Karnataka',
    dates: 'May 2022 — Sep 2023',
    summary: 'B2B SaaS company building engagement and gamification platforms.',
    highlights: [
      'Developed production-grade REST APIs and microservices using Python (FastAPI), MongoDB, and PostgreSQL.',
      'Integrated Celery, Redis, and RabbitMQ for asynchronous job scheduling and background task execution.',
      "Led backend for 'Stock Wars' — a virtual stock trading game, handling 10K+ concurrent users with efficient caching and messaging.",
      'Deployed services using Docker and Kubernetes, improving reliability and deployment speed by 40%.',
    ],
  },
  {
    num: '04',
    name: 'Mindtree Limited',
    yc: false,
    current: false,
    position: 'Software Developer',
    location: 'Bangalore, Karnataka',
    dates: 'Jul 2021 — Feb 2022',
    summary: 'Global technology consulting and services company.',
    highlights: [
      'Developed backend APIs and database schemas using Python and PostgreSQL for internal enterprise applications.',
      'Focused on performance optimization and backend automation in client projects.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <h2 className="section-label">Experience</h2>

        {jobs.map((job) => (
          <div key={job.num} className="experience-row">
            <div className="experience-index">{job.num}</div>
            <div>
              <div className="experience-dates">{job.dates}</div>
              <div className="experience-location">{job.location}</div>
            </div>
            <div>
              <div className="experience-header">
                <h3 className="experience-company">{job.name}</h3>
                {job.yc && <span className="chip-yc">YC W23</span>}
                {job.current && <span className="chip-current">Current</span>}
              </div>
              <div className="experience-position">{job.position}</div>
              <div className="experience-summary">{job.summary}</div>
              <ul className="experience-highlights">
                {job.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
