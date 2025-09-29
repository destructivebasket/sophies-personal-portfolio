import { useLocation } from "react-router-dom";
import LinkedIn from '../../assets/linkedin.png'
import GitHub from '../../assets/github.png'
import Email from '../../assets/email.png'

const Socials = () => {
  const location = useLocation();
  
  function imageSize () {
    if (location.pathname === "contact") {
        return "w-[180px]";
    } else if (location.pathname === "/") {
        return "w-[60px]"
    }
  }

  function imageSpace () {
    if (location.pathname === "/contact") {
        return "space-x-20 max-sm:space-x-1";
    } else if (location.pathname === "/") {
        return "space-x-4"
    }
  }

  return (
    <div className = {`flex items-center mt-8 max-sm:ml-8 max-sm:mr-8 mb-30 ${imageSpace()}`}>
        <a 
          href="https://www.linkedin.com/in/sophie-choi-b78991319/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
            <img src = {LinkedIn} className = {imageSize()} /> 
        </a>
        <a 
          href="https://github.com/destructivebasket" 
          target="_blank" 
          rel="noopener noreferrer"
        >
            <img src = {GitHub} className = {imageSize()}/> 
        </a>
        <a 
          href="mailto:sophie.elissa.choi@gmail.com" 
          target="_blank" 
          rel="noopener noreferrer"
        >
            <img src = {Email} className = {imageSize()}/> 
        </a>
    </div>
  )
}

export default Socials