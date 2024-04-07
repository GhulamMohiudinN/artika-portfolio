import React from 'react'
import "./Artika.css"
const Contact = (props) => {
    return (
        <>
            <div className='contact-div'>
                <div className='heading-div'>

                    <h1 className='contact-h1'>I'm <span>{props.name}</span> {props.heading}</h1>
                    <p className='contact-p'>{props.para}</p>
                </div>
                <div className='contact-btn-div'>
                    <button className='contact-btn'>Contact Me</button>
                </div>
                <div className='vector-img-div'>
                    <img className='vector-img' src={props.vectorImg} alt='img'></img>
                </div>
                <div className='girl-img-div'>
                    <img className='girl-img' src={props.girlLaptopImg} alt='img'></img>
                </div>
            </div>
          </>
    )
}

export default Contact