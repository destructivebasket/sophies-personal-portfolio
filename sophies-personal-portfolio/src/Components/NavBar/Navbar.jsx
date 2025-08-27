import { Link } from 'react-router-dom'
import './NavBar.css'

const Navbar = () => {
  return (
    <div className = "nav-bar">
        <h2 className = "ml-5 font-[Poppins-Bold] text-[#ff3497FF] text-[18px]"> Sophie </h2>
        <div className = "flex space-x-4 mr-80">
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
            <button className = "nav-bar-buttons"> Contact </button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar