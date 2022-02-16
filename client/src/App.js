import Works from "./components/Works/Works";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import ParallaxComponent from "./components/Parallax";
import { Fade } from "react-awesome-reveal";

function App() {
  return (
    <div >
      <ParallaxComponent />
      <Works />
      <Fade duration={1500} triggerOnce>
        <AboutMe />
      </Fade>
      <Footer />
    </div>
  );
}

export default App;