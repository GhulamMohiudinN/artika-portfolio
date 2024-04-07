import React from 'react'
import "./Artika.css"

const Card = ({ manu }) => {
    return (
        <>
        <div className='project-heading-div'>
            <h1 className='project-heading'>My Projects</h1>
        </div>
            <div className='card-div'>
                {manu.map((current) => {
                    return (
                        <>
                            <div className={current.className} key={current.id}>
                                <img className='project-img' src={current.img1}></img>
                                <h1 className='project-h1'>{current.heading}</h1>
                                <p className='project-p'>{current.para}</p>
                            </div>
                        </>
                    )
                })}


            </div>
          
        </>
    )
}
export default Card
