import React from 'react'
import ExperienceApi from './ExperienceApi'
const ClientExperience = () => {
    return (
        <>
            <h1 className='client-main-h1'>Client Experiences</h1>
            <div className='Client-main-div'>
                {
                    ExperienceApi.map((data) => {
                        return (
                            <>
                                <div className={data.clientClass} key={data.id}>
                                    <div className='Client-img-div'>
                                        <img  src={data.clientImg} alt='img'></img>
                                    </div>
                                    <div className='client-data-div'>

                                    <h1 className='client-h1'>{data.clientHeading}</h1>
                                    <p className='client-p'>{data.clientDetail}</p>
                                    <p className='client-address'>{data.clientAddress}</p>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ClientExperience