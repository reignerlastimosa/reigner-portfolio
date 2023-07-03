
import About from "./components/About";
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Footer/>

    </div>
  );
}

export default App;