import './App.css';
import Navbar from './Components/Navbar';
import MainBody from './Components/MainBody';
import Crousel from './Components/Crousel';
import { ReactLenis, useLenis } from 'lenis/react';
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import 'lenis/dist/lenis.css';
import useHeadingAnimation from "./Components/useHeadingAnimation";
import Footer from './Components/Footer';

function App() {

  useLenis((lenis) => {
    (lenis)
  })
 useHeadingAnimation();
  return (
    <ReactLenis root options={{ lerp: 0.06, duration: 1.7, smoothWheel: true, smoothTouch: true, syncTouch: true, easing: (t) => 1 - Math.pow(1 - t, 3) }}>
      <Navbar />
      <Crousel />
      <MainBody />
      <Footer />
    </ReactLenis>
  )
}

export default App
