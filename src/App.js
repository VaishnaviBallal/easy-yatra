
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Destinations from './components/Destinations';

import Footer from './components/Footer';
import About from './components/About';
import Gallery from './components/Gallery';
import Backtotop from "./components/Backtotop";

function App() {
   return (
    <div>
       <Navbar />
      <Hero />
      <About/>
  
      <Destinations />
      <Gallery/>
      
      <Footer />
      <Backtotop/>
    </div>
  );
}

export default App;
