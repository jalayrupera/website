export default function Contact() {
  return (
    <footer id="contact" className="contact">
      <div className="container">
        <div className="contact-headline">Open to new opportunities.</div>
        <p className="contact-copy">
          Always up for discussing new roles, interesting projects, or a chat about backend systems
          and technology.
        </p>

        <div className="contact-actions">
          <a href="mailto:jalayrupera13@gmail.com" className="btn-contact-primary">
            jalayrupera13@gmail.com
          </a>
          <a
            href="https://github.com/jalayrupera"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-contact-secondary"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/jalay-rupera-b774b5131/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-contact-secondary"
          >
            LinkedIn ↗
          </a>
        </div>

        <div className="contact-footer">
          <span>© 2026 Jalay Rupera</span>
          <span>Bangalore, India</span>
        </div>
      </div>
    </footer>
  );
}
