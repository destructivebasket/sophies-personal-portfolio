import './App.css'
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from './Components/HomePage/HomePage';
import AboutMe from './Components/AboutMe/AboutMe';
import Portfolio from './Components/Portfolio/Portfolio';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/aboutme" element={<AboutMe/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/skills" element={<Skills/>}/>
      </Routes>
    </HashRouter>
  )
}

export default App