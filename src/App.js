import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { AboutMe } from "./components/AboutMe";
import { Slider } from "./components/Slider";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <AboutMe />
      <Projects />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
