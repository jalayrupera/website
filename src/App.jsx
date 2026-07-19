import Starfield from './components/Starfield';
import Nebula from './components/Nebula';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Stats from './components/Stats';
import NowStrip from './components/NowStrip';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './styles/components.css';

function App() {
  return (
    <div className="page-wrapper">
      <Starfield />
      <Nebula />
      <Nav />
      <main>
        <Hero />
        <Stats />
        <NowStrip />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
