import './HomePage.css'
import NavBar from '../NavBar/Navbar';
import { Link } from 'react-router-dom';
import LinkedIn from '../../assets/linkedin.png'
import GitHub from '../../assets/github.png'
import Email from '../../assets/email.jpg'

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
        <div className = "flex items-center">
          <a 
            href="www.linkedin.com/in/sophie-choi-b78991319" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src = {LinkedIn}/> 
          </a>
          <a 
            href="https://github.com/destructivebasket" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src = {GitHub}/> 
          </a>
          <a 
            href="mailto:sophie.elissa.choi@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src = {Email}/> 
          </a>
        </div>
      </div>
    </div>
  )
}

export default HomePage