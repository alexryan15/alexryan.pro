import About from "./components/About/About";
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import SocialItems from './components/SocialItems/SocialItems';
import Background from "./components/Background/Background";
import "./App.css";

function App() {

  return (
    <div className="container">
      <Background />
      <div className="about-section fade-in" style={{ animationDelay: '0.2s' }}>
        <About />
      </div>
      <div className="content-columns fade-in" style={{ animationDelay: '0.8s' }}>
        <div className="left-column">
          <Experience />
        </div>
        <div className="right-column">
          <Projects />
        </div>
      </div>
    <SocialItems />
  </div>
  )
}

export default App
