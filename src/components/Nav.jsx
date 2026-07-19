import { Link as ScrollLink } from 'react-scroll';

const navItems = [
  { to: 'experience', label: 'Experience' },
  { to: 'projects', label: 'Projects' },
  { to: 'skills', label: 'Skills' },
  { to: 'contact', label: 'Contact' },
];

export default function Nav() {
  return (
    <nav className="nav">
      <div className="container">
        <ScrollLink
          to="top"
          smooth={true}
          offset={-80}
          duration={500}
          className="nav-logo"
        >
          J·RUPERA
        </ScrollLink>

        <div className="nav-links">
          {navItems.map((item) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              smooth={true}
              offset={-80}
              duration={500}
              className="nav-link"
            >
              {item.label}
            </ScrollLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
