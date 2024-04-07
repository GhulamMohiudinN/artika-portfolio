import React from 'react'
import faqsImg from '../imgs/FAQ.png'
import vactor2 from '../imgs/Vector (2).png'
const BehindDesign = (props) => {
    return (
        <>
        <h1 className='behind-h1'>{props.heading}</h1>
            <div className='behind-main-div'>
                <div className='behind-img-div'>
                    <img  className='behind-img' src={faqsImg} alt='img'></img>
                </div>
                <div className='behind-div-b'>
                    <div className='behind-div-b-child'>
                    <p className='behind-p'>What inspires your design process?</p>
                    <img   className='behind-arrow-img'  src={vactor2} alt='img'></img>
                    </div>
                    <div className='behind-div-b-child'>
                    <p className='behind-p'>How do you approach new projects?</p>
                    <img  className='behind-arrow-img'   src={vactor2} alt='img'></img>
                    </div>
                    <div className='behind-div-b-child'>
                    <p className='behind-p' >Can I commission a custom design for my business?</p>
                    <img  className='behind-arrow-img'   src={vactor2} alt='img'></img>
                    </div>
                    <div className='behind-div-b-child'>
                    <p className='behind-p' >What software and tools do you use for your designs?</p>
                    <img  className='behind-arrow-img'   src={vactor2} alt='img'></img>
                    </div>
                    <div className='behind-div-b-child'>
                    <p className='behind-p' >How often do you update your portfolio with new work?</p>
                    <img  className='behind-arrow-img'   src={vactor2} alt='img'></img>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default BehindDesign