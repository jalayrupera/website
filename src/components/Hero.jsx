export default function Hero() {
  return (
    <header id="top" className="hero">
      <div className="container">
        <div className="hero-kicker">Bangalore, India</div>
        <h1 className="hero-name">
          Jalay
          <br />
          Rupera
          <span className="period">.</span>
        </h1>

        <div className="hero-roles">
          <div className="hero-role-primary">Full Stack Engineer · Ex-Founder</div>
          <div className="hero-role-secondary">
            Backend systems · automation pipelines · AI-powered tooling
          </div>
        </div>

        <p className="hero-intro">
          Results-driven engineer with <strong>4.5+ years</strong> in Python, FastAPI, Celery,
          Redis, MongoDB and REST API development. Proven track record building scalable backend
          systems, automating complex workflows, and integrating AI/LLM-powered modules — with{' '}
          <strong>startup-style ownership</strong>.
        </p>

        <div className="hero-actions">
          <a
            href="JRupera Resume-26.pdf"
            download
            className="btn btn-primary"
          >
            Download résumé ↓
          </a>
          <a
            href="https://github.com/jalayrupera"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/jalay-rupera-b774b5131/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </header>
  );
}
