 import Navication from './component/Navication.js'
import './App.css';
import Home from './component/Home.js';
import About from './component/About.js';
import Service from './component/Service.js';
import Project from './component/Project.js';
import Career from './component/Career.js';
import Contact from './component/Contact.js';
import Footer from './component/Footer.js';


function App() {
  return (
    <div className="App">
      <Navication/>
      <Home/>
      <About/>
      <Service/>
      <Project/>
      <Career/>
      <Contact/>
      <Footer/>
      
 
    </div>
  );
}

export default App;
