import React from 'react'

const Card2 = ({second}) => {
  return (
    <>
        <div className='car-div2'>
                {second.map((curr) => {
                    return (
                        <>
                            <div className='card2' key={curr.id}>
                                <img className='project-img2' src={curr.img1}></img>
                                <h1 className='project-h12'>{curr.heading}</h1>
                                <p className='project-p2'>{curr.para}</p>
                            </div>
                        </>
                    )
                })}

                
            </div>
    </>
  )
}

export default Card2