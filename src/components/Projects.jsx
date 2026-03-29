import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    name: "Patient Eligibility Check Product",
    entity: "Mantys",
    description: "Production-grade eligibility verification product used by hospitals and clinics in the UAE to check patient insurance eligibility in real time.",
    highlights: [
      <>Enabled users to verify coverage using <span className="highlight">Emirates ID</span>, Member ID, or <span className="highlight">DHA ID</span> for instant validation.</>,
      <>Integrated with <span className="highlight">hospital information systems (HIS)</span> to automate insurance form filling and document uploads.</>,
      <>Reduced front-desk workload and paperwork errors by 90%, contributing to over <span className="highlight">$1M ARR</span>.</>
    ],
    keywords: ["Healthcare SaaS", "Healthcare", "Insurance", "UAE", "HIS Integration"]
  },
  {
    name: "Drishti — Autonomous Drone System",
    entity: "Vigilare Technologies",
    description: "GPS-denied navigation system integrating sensor drivers, visual-inertial odometry (VIO), and backend communication.",
    highlights: [
      <>Built a <span className="highlight">GPS-denied navigation system</span> with sensor fusion and visual-inertial odometry.</>,
      <>Implemented data processing pipelines using <span className="highlight">Python</span> (<span className="highlight">FastAPI</span>) for mission logs and telemetry.</>,
      <>Deployed using <span className="highlight">Docker</span> + <span className="highlight">K3s</span> for modular orchestration.</>
    ],
    keywords: ["Drones", "GPS-denied Navigation", "VIO", "ROS2", "FastAPI", "Docker", "K3s"]
  },
  {
    name: "Stock Wars — Virtual Trading Platform",
    entity: "Zu Technologies",
    description: "Real-time virtual stock trading simulation platform handling 10K+ concurrent users.",
    highlights: [
      <>Designed backend architecture for real-time trading simulation using <span className="highlight">FastAPI</span>, <span className="highlight">Celery</span>, and <span className="highlight">Redis</span>.</>,
      <>Handled asynchronous task processing with <span className="highlight">RabbitMQ</span> and optimized database operations.</>
    ],
    keywords: ["Trading Simulation", "Real-time", "FastAPI", "Celery", "Redis", "RabbitMQ"]
  }
];

const Projects = () => {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <motion.p 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          /projects
        </motion.p>
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Featured Work
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={project.name}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="project-header">
                <div className="project-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                  </svg>
                </div>
                <span className="project-entity">{project.entity}</span>
              </div>
              
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              
              <ul className="project-highlights">
                {project.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
              
              <div className="project-keywords">
                {project.keywords.map((keyword) => (
                  <span key={keyword} className="keyword">{keyword}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;