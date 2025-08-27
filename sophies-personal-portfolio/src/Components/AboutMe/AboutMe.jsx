import React from 'react'
import NavBar from '../NavBar/Navbar';
import './AboutMe.css'

const AboutMe = () => {
  return (
    <div>
      <NavBar/>
      
      <div className = "flex flex-col absolute top-30 space-y-4 max-lg:-translate-x-30 max-sm:-translate-x-60">
        <h1 id = "about-me"> About Me </h1>
        <p id = "about-me-paragraph">
          Hi, my name is Sophie Choi and I am a freshman at University of California, Irvine studying Computer Science! I have experience with HTML, CSS, JavaScript and the React framework, while also exploring computer networking. My goal is to develop user-friendly, intuitive, and creative applications that will contribute to the efficiency of daily life. 
        </p>
        <div className = "mt-10 space-y-4">
          <p className = "text-left grid grid-cols-2"> 
            <span> Name: </span> <span className = "text-gray-400"> Sophie Choi </span> 
          </p>
          <p className = "text-left grid grid-cols-2"> 
            <span> Date of Birth: </span> <span className = "text-gray-400"> August 23, 2007 </span> 
          </p>
          <p className = "text-left grid grid-cols-2"> 
            <span> Located: </span> <span className = "text-gray-400"> Los Angeles, CA </span> 
            <br/> 
            <span className = "text-gray-400"> Irvine, CA </span> 
          </p>
          <p className = "text-left grid grid-cols-2"> 
            <span> Email: </span> 
            <span className = "text-gray-400"> Personal: sophie.elissa.choi@gmail.com </span> 
            <br/> 
            <span className = "text-gray-400"> School: sechoi3@uci.edu </span> 
          </p>
          <p className = "text-left grid grid-cols-2"> 
            <span> Phone: </span> 
            <span className = "text-gray-400"> 626-734-3575 </span> 
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe