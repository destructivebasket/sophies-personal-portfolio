import './HomePage.css'
import NavBar from '../NavBar/Navbar';
import { Link } from 'react-router-dom';

const HomePage = () => {

  return (
    <div>
      
      <NavBar/>

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
        <a 
          href="https://drive.google.com/file/d/1TtDaoL9nrAMLa2ce_MWDm7kJxx088VgI/view?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img src = ""/> 
        </a>
      </div>
    </div>
  )
}

export default HomePage