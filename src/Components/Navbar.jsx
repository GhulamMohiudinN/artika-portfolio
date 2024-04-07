import React, { useState } from 'react'
import "./Artika.css"
import navbarIcon from '../imgs/hamburger.svg'
import xmarkIcon from '../imgs/xmark.svg'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <div className={showMediaIcons ? "main-div active" : "main-div"}>
        <h1>AK.</h1>
        <nav className="nav">

          <ul >
            <li><Link className='a-home' to='/'>Home</Link></li>
            <li><a href='#'>Work</a></li>
            <li><Link to='/testimonial'>Testimonial</Link></li>
            <li><Link to='/faqs'>FAQs</Link></li>
            <li><Link to='/contact'>Contact</Link></li>

          </ul>
          <button className="downloadBtn">Download CV</button>
        </nav>
        <img src={navbarIcon} alt="bar img" className="bar" onClick={() => setShowMediaIcons(!showMediaIcons)}></img>
        <img src={xmarkIcon} alt="bar img" className="bar2" onClick={() => setShowMediaIcons(!showMediaIcons)}></img>


      </div>
    </>
  )
}

export default Navbar