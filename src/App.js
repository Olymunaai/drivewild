import './app.scss';
import Landing from "./components/Landing"
import Nav from "./components/Nav"
import About from "./components/About"
import Explore from "./components/Explore"
import Contact from "./components/Contact"

function App() { 
  return (
    <div className="App">
      <Nav />
      <Landing />
      <About />
      <Explore />
      <Contact />
    </div>
  );
}

export default App;
