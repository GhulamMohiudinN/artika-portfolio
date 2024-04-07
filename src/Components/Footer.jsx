import React from 'react'
import vectorC from "../imgs/Vector c.png"
const Footer = () => {
  return (
    <>
        <div className='footer-main-div'>
            <div className='footer-div-a'>
                <img src={vectorC} alt='vector c img'></img>
                <span className='footer-span'>Artika Sharma</span>
            </div>
            <div className='footer-div-b'>
                <ul>
                    <li><a>Behance ↗</a></li>
                    <li><a>Twitter ↗</a></li>
                    <li><a>Instagram ↗</a></li>
                    <li><a>LinkedIn ↗</a></li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Footer