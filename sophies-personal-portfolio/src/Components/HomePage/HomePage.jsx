import './HomePage.css'
import NavBar from '../NavBar/Navbar';
import { Link } from 'react-router-dom';

const HomePage = () => {

  return (
    <div>
      
      <NavBar/>

      <div className = "flex flex-col absolute left-0 top-60 ml-20">
        <p id = "hello"> Hello! </p>
        <h1 id = "name"> I'm <span className = "gradient"> Sophie Choi </span> </h1>
        <h2 id = "intro-line"> CS @ UC Irvine </h2>
        <Link to = "">
          <button id = "resume-button"> Resume </button>
        </Link>
      </div>
    </div>
  )
}

export default HomePage