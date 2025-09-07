import NavBar from '../NavBar/Navbar';
import SkillsCard from './SkillsCard';
import HTML from '../../assets/html.png';
import CSS from '../../assets/css.png';
import JavaScript from '../../assets/javascript.png';
import C from '../../assets/c.png';
import Java from '../../assets/java.webp';
import Python from '../../assets/python.png';
import React from '../../assets/react.svg';
import Node from '../../assets/node.png';
import Ionic from '../../assets/ionic.webp';
import Capacitor from '../../assets/capacitor.svg';
import TailwindCSS from '../../assets/tailwindcss.png';
import Figma from '../../assets/figma.png';
import Firebase from '../../assets/firebase.png';
import GoogleCloud from '../../assets/googlecloud.png';
import Cloudflare from '../../assets/cloudflare.png';
import Render from '../../assets/render.png';
import Xcode from '../../assets/xcode.png';
import Unity from '../../assets/unity.avif';
import GirlsWhoCode from '../../assets/girlswhocode.webp';

const Skills = () => {
  return (
    <div>
      <NavBar/>
      <div className = "mt-20 max-md:-translate-x-26">
        <h1 className = "skills gradient max-md:translate-x-10"> Skills </h1>
        <h4 className = "purple-gradient mt-10 max-md:translate-x-10"> Languages </h4>
        <div className = "max-md:translate-x-6">
          <div className = "flex max-lg:flex-col space-x-10 mt-10 max-lg:ml-17 max-lg:space-y-10">
            <SkillsCard
              skill = "HTML"
              image = {HTML}
            />
            <SkillsCard
              skill = "CSS"
              image = {CSS}
            />
            <SkillsCard
              skill = "JavaScript"
              image = {JavaScript}
            />
          </div>
          
          <div className = "flex max-lg:flex-col space-x-10 mt-10 max-lg:ml-17 max-lg:space-y-10">
            <SkillsCard
              skill = "C#"
              image = {C}
            />
            <SkillsCard
              skill = "Java"
              image = {Java}
            />
            <SkillsCard
              skill = "Python"
              image = {Python}
            />
          </div>

          <h4 className = "purple-gradient mt-10 max-md:translate-x-4"> Frameworks/Libraries </h4>
          <div className = "flex max-lg:flex-col space-x-10 mt-10 max-lg:ml-17 max-lg:space-y-10">
            <SkillsCard
              skill = "React"
              image = {React}
            />
            <SkillsCard
              skill = "Node.js"
              image = {Node}
            />
            <SkillsCard
              skill = "Tailwind CSS"
              image = {TailwindCSS}
            />
          </div>

          <div className = "flex max-lg:flex-col space-x-10 mt-10 max-lg:ml-17 max-lg:space-y-10 lg:translate-x-45">
            <SkillsCard
              skill = "Ionic"
              image = {Ionic}
            />
            <SkillsCard
              skill = "Capacitor"
              image = {Capacitor}
            />
          </div>

          <h4 className = "purple-gradient mt-10 max-md:translate-x-4"> Tools </h4>
          <div className = "flex max-lg:flex-col space-x-10 mt-10 max-lg:ml-17 max-lg:space-y-10">
            <SkillsCard
              skill = "Figma"
              image = {Figma}
            />
            <SkillsCard
              skill = "Firebase"
              image = {Firebase}
            />
            <SkillsCard
              skill = "Google Cloud"
              image = {GoogleCloud}
            />
          </div>

          <div className = "flex max-lg:flex-col space-x-10 mt-10 max-lg:ml-17 max-lg:space-y-10">
            <SkillsCard
              skill = "Cloudflare"
              image = {Cloudflare}
            />
            <SkillsCard
              skill = "Render"
              image = {Render}
            />
            <SkillsCard
              skill = "Xcode"
              image = {Xcode}
            />
          </div>
          <div className = "flex max-lg:flex-col space-x-10 mt-10 max-lg:ml-17 max-lg:space-y-10 lg:translate-x-102">
            <SkillsCard
              skill = "Unity"
              image = {Unity}
            />
          </div>

          <h4 className = "purple-gradient mt-10 max-md:translate-x-4"> Certifications </h4>
          <div className = "flex max-lg:flex-col space-x-10 mt-10 max-lg:ml-17 max-lg:space-y-10 mb-20">
            <SkillsCard
              skill = "Intuit 1"
              image = {GirlsWhoCode}
            />
            <SkillsCard
              skill = "Data Science for Good"
              image = {GirlsWhoCode}
            />
            <SkillsCard
              skill = "Intro to Data Science"
              image = {GirlsWhoCode}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills