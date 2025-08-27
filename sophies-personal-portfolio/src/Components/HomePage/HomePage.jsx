import './HomePage.css'
import NavBar from '../NavBar/Navbar';
import { Link } from 'react-router-dom';
import LinkedIn from '../../assets/linkedin.png'
import GitHub from '../../assets/github.png'
import Email from '../../assets/email.png'

const HomePage = () => {

  return (
    <div>
      
      <NavBar/>

      {/* Intro Text */}
      <div className = "flex flex-col absolute left-0 top-50 ml-20">
        <p id = "hello"> Hello! </p>
        <h1 id = "name"> I'm <span className = "gradient"> Sophie Choi </span> </h1>
        <h2 id = "intro-line"> CS @ UC Irvine </h2>
        <a 
          href="https://drive.google.com/file/d/1TtDaoL9nrAMLa2ce_MWDm7kJxx088VgI/view?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <button id="resume-button">Resume</button>
        </a>

        {/* Socials Icons */}
        <div className = "flex items-center space-x-4 mt-8">
          <a 
            href="https://www.linkedin.com/in/sophie-choi-b78991319/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src = {LinkedIn} className = "w-[60px]"/> 
          </a>
          <a 
            href="https://github.com/destructivebasket" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src = {GitHub} className = "w-[60px]"/> 
          </a>
          <a 
            href="mailto:sophie.elissa.choi@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src = {Email} className = "w-[60px]"/> 
          </a>
        </div>
      </div>
    </div>
  )
}

export default HomePage