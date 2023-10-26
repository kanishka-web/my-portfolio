import Navbar from "./components/Navbar";
import Home from "./components/Home"
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Experience from "./components/Experience";


function App() {
  return (
    <div>
     <div className=""><Navbar /></div>
     <div className=""><Home /></div>
    <div><About /></div>
      <div><Education/></div>
      <div><Skills/></div>
      <div><Work/></div>
      <div><Experience/></div>
      <div><Contact/></div>
      <div><Footer/></div>
    </div>
  );
}

export default App;
