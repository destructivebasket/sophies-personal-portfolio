import NavBar from '../NavBar/Navbar';
import './Portfolio.css';
import PortfolioCard from './PortfolioCard';
import Emageo from '../../assets/emageo.png';
import Mathclopedia from '../../assets/mathclopedia.png';
import Jellyfish from '../../assets/jellyfish.png';
import Movie from '../../assets/movie.png';
import Station8 from '../../assets/station8.png';

const Portfolio = () => {
  return (
    <div>
      <NavBar/>
        <div className = "translate-y-10">
          <h1 className = "skills gradient max-md:translate-x-10 mb-10 max-sm:-translate-x-7"> Portfolio </h1>
          <div className = "space-y-5">
            <PortfolioCard
              title = "Emageo"
              description = {`Designed and developed a web travel planner using React, Ionic, and Tailwind CSS frameworks\n
                            Implemented AviationStack and SerpAPI to fetch real-time travel data and Google Maps locations\n
                            Integrated Firebase and Firestore for secure and scalable user data management\n
                            Deployed website on Cloudflare and backend server on Render. \nAPI's are not accessible at this time which will affect the user experience`}
              picture = {Emageo}
              link = "https://emageo.pages.dev/"
            />

            <PortfolioCard
              title = "Mathclopedia"
              description = {`Developed a math-assist platform using HTML, CSS, and JavaScript, hosted on Github Pages
                              Designed an intuitive interface with categorized tabs, ranging from Algebra to Calculus concepts`}
              picture = {Mathclopedia}
              link = "https://mathclopedia.github.io/"
            />

            <PortfolioCard
              title = "Jellyfish Clock"
              description = {`Implemented a real-time clock local to the user’s timezone, deployed on iOS with Capacitor, Xcode and Github Pages`}
              picture = {Jellyfish}
              link = "https://sophieelissachoi.github.io/jellyfish-clock/"
            />

            <PortfolioCard
              title = "Movie App"
              description = {`Implemented a real-time clock local to the user’s timezone, deployed on iOS with Capacitor, Xcode and Github Pages`}
              picture = {Movie}
              link = "https://sophieelissachoi.github.io/movie-app-new/"
            />

            <div className = "mb-10">
              <PortfolioCard
                title = "Station 8"
                description = {`Developed a horror game with Unity and C#, implementing AI pathfinding via NavMesh library
                                Designed gameplay and storyboarding using Unity Timeline for cutscenes and sprite animations`}
                picture = {Station8}
                link = "https://www.youtube.com/watch?v=ql5_dtAqs_A&feature=youtu.be"
              />
            </div>
          </div>
      </div>
    </div>
  )
}

export default Portfolio