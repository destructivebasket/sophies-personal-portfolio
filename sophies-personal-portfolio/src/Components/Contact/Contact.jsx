import React from 'react'
import './Contact.css';
import NavBar from '../NavBar/Navbar';
import Socials from '../Socials/Socials';

const Contact = () => {
  return (
    <div className = "mr-20">

      <NavBar/>

      <h1 className = "contact gradient"> Contact </h1>
      <Socials/>
      <div className = "flex flex-col space-y-4 max-sm:mb-30">
        <p className = "text-left grid grid-cols-2 max-sm:text-[10px]"> 
          <span> Personal Email: </span> 
          <span className = "text-gray-400"> sophie.elissa.choi@gmail.com </span> 
        </p>
        <p className = "text-left grid grid-cols-2 max-sm:text-[10px]"> 
          <span> School Email: </span> 
          <span className = "text-gray-400"> sechoi3@uci.edu </span> 
        </p>
        <p className = "text-left grid grid-cols-2 max-sm:text-[10px]"> 
          <span> Phone: </span> 
          <span className = "text-gray-400"> 626-734-3575 </span> 
        </p>
      </div>
    </div>
  )
}

export default Contact