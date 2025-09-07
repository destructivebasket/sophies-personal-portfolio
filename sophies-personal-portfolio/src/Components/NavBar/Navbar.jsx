import { Link } from 'react-router-dom'
import './NavBar.css'

const Navbar = () => {
  const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  return (
    <div className = "nav-bar z-50">
        <h2 className = "ml-5 font-[Poppins-Bold] text-[#ff3497FF] text-[18px]"> Sophie </h2>
        <div className = "flex space-x-4 mr-80 max-sm:space-x-0">
            <Link to = "/sophies-personal-portfolio/">
            <button className = "nav-bar-buttons"> Home </button>
            </Link>
            <Link to = "/sophies-personal-portfolio/aboutme">
            <button className = "nav-bar-buttons"> About </button>
            </Link>
            <Link to = "/sophies-personal-portfolio/skills">
            <button className = "nav-bar-buttons"> Skills </button>
            </Link>
            <Link to = "/sophies-personal-portfolio/portfolio">
            <button className = "nav-bar-buttons"> Portfolio </button>
            </Link>
            <Link to = "/sophies-personal-portfolio/contact">
            <button className = "nav-bar-buttons"> Contact </button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar