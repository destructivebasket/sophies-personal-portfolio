import { Link } from 'react-router-dom'
import './NavBar.css'

const Navbar = () => {
  const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  return (
    <div className = "nav-bar z-50">
        <h2 className = "ml-5 font-[Poppins-Bold] text-[#ff3497FF] text-[18px]"> Sophie </h2>
        <div className = "flex space-x-4 mr-80 max-sm:space-x-0">
            <Link to = "/">
              <button className = "nav-bar-buttons"> Home </button>
            </Link>
            <Link to = "/aboutme">
              <button className = "nav-bar-buttons"> About </button>
            </Link>
            <Link to = "/skills">
              <button className = "nav-bar-buttons"> Skills </button>
            </Link>
            <Link to = "/portfolio">
              <button className = "nav-bar-buttons"> Portfolio </button>
            </Link>
            <Link to = "/contact">
              <button className = "nav-bar-buttons max-sm:translate-x-1/2"> Contact </button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar