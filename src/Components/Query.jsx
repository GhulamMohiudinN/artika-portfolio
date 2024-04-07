import React from 'react'
import queryImg from '../imgs/Imagr.png'

const Query = () => {
    return (
        <>
            <div className='query-main-div'>
                <div className='query-a'>
                    <h1 className='query-a-h1'>Still have any Queries?</h1>
                    <p className='query-a-p1'>OR</p>
                    <p className='query-a-p2'>A creative idea you'd like to discuss? Feel free to ping me anytime! 🥰</p>
                </div>


                <div className='query-b'>
                    <div className='query-b-img-div'>
                        <img className='query-b-img' src={queryImg} alt='query img'></img>
                    </div>
                    <div className='query-b-form-div'>
                        <p>Your Name</p>
                        <input className='query-input1' type='input' value="Aman Bansal"></input>
                        <p>Email</p>
                        <input className='query-input2' type='email' value="Aman8958bansal@gmail.com"></input>
                        <p>Message</p>
                        <textarea className='query-textArea' rows="8" cols="10" value="Lorem ipsum dolor sit amet consectetur. Tincidunt magna ultrices elementum pellentesque tristique iaculis vitae. Praesent blandit ipsum cras vitae. Condimentum scelerisque sem eget fermentum. Pellentesque sem interdum blandit vel leo congue mi eget."></textarea>
                        <div className='query-btn-div'>
                            <button className='query-btn'>Send Message</button>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Query