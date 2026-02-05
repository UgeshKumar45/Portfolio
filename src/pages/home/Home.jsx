import Profile from '../../assets/home.png'
import { Link } from 'react-router'
import { RiArrowRightLine } from "react-icons/ri";
import './home.css'

const Home = () => {
  return (
    <section className="home-container grid">
      <img src={Profile} alt="" className="home-img" />

      <div className="home-content">
        <h1 className="home-title">
          <span>I'm UGESHKUMAR K</span> <br/> MERN Stack Developer
        </h1>
        <p className="home-description">
          I am a passionate MERN Stack Developer specializing in MongoDB, Express.js, React.js, and Node.js.
          I enjoy building modern, responsive, and user-friendly web applications.
          My focus is on writing clean, maintainable code and creating smooth user experiences.
          I have experience developing full-stack projects with secure authentication and REST APIs.
          I am always eager to learn new technologies and improve my skills as a developer.
        </p>
        <Link to="/about" className='button'>More About Me
        <span className='button-icon'>
          <RiArrowRightLine />
        </span>
        </Link>
      </div>

      <div className="color-block"></div>
    </section>
  )
}

export default Home
