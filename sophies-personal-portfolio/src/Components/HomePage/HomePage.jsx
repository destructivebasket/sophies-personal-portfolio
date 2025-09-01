import './HomePage.css'
import NavBar from '../NavBar/Navbar';
import Socials from '../Socials/Socials';

const HomePage = () => {

  return (
    <div>
      
      <NavBar/>

      {/* Intro Text */}
      <div className = "sm:absolute left-0 top-50 sm:ml-10 max-sm:mr-10">
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
        <Socials/>
      </div>
    </div>
  )
}

export default HomePage