import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import AboutMe from './Components/AboutMe/AboutMe';
import Portfolio from './Components/Portfolio/Portfolio';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/sophies-personal-portfolio/" element={<HomePage/>}/>
        <Route path="/sophies-personal-portfolio/aboutme" element={<AboutMe/>}/>
        <Route path="/sophies-personal-portfolio/contact" element={<Contact/>}/>
        <Route path="/sophies-personal-portfolio/portfolio" element={<Portfolio/>}/>
        <Route path="/sophies-personal-portfolio/skills" element={<Skills/>}/>
      </Routes>
    </Router>
  )
}

export default App