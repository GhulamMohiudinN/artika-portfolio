import React, { useState } from 'react'
import FAQsApi from './FAQsApi'
const FAQs = () => {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    return (
        <>
            <div className='faqs-main-div'>
                <h1 className='faqs-heading'>Frequently Asked Questions</h1>
                {/* /////////// 1  ///////////// */}
                <div className='faqs-div'>
                    <div className='faqs-question-div'>
                        <p onClick={() => setShow1(!show1)} className='plus'>{show1 ? "–" : "+"}</p>
                        <p className='question'>{FAQsApi[0].question}</p>
                    </div>
                    {show1 && <div className='faqs-answer-div'>
                        <p className='answer'>{FAQsApi[0].answer}</p>
                    </div>}
                </div>


                {/* ////////////// 2 /////////// */}
                <div className='faqs-div'>
                    <div className='faqs-question-div'>
                        <p onClick={() => setShow2(!show2)} className='plus'>{show2 ? "–" : "+"}</p>
                        <p className='question'>{FAQsApi[1].question}</p>
                    </div>
                    {show2 && <div className='faqs-answer-div'>
                        <p className='answer'>{FAQsApi[1].answer}</p>
                    </div>}
                </div>
                {/* ////////////// 3 //////////////// */}
                <div className='faqs-div'>
                    <div className='faqs-question-div'>
                        <p onClick={() => setShow3(!show3)} className='plus'>{show3 ? "–" : "+"}</p>
                        <p className='question'>{FAQsApi[2].question}</p>
                    </div>
                    {show3 && <div className='faqs-answer-div'>
                        <p className='answer'>{FAQsApi[2].answer}</p>
                    </div>}
                </div>
                {/* ////////////// 4 //////////////// */}
                <div className='faqs-div'>
                    <div className='faqs-question-div'>
                        <p onClick={() => setShow4(!show4)} className='plus'>{show4 ? "–" : "+"}</p>
                        <p className='question'>{FAQsApi[3].question}</p>
                    </div>
                    {show4 && <div className='faqs-answer-div'>
                        <p className='answer'>{FAQsApi[3].answer}</p>
                    </div>}
                </div>
                {/* ////////////// 5 //////////////// */}
                <div className='faqs-div'>
                    <div className='faqs-question-div'>
                        <p onClick={() => setShow5(!show5)} className='plus'>{show5 ? "–" : "+"}</p>
                        <p className='question'>{FAQsApi[4].question}</p>
                    </div>
                    {show5 && <div className='faqs-answer-div'>
                        <p className='answer'>{FAQsApi[4].answer}</p>
                    </div>}
                </div>

            </div>


            {/* <div className='faqs-main-div'>
            <h1 className='faqs-heading'>Frequently Asked Questions</h1>
                {
                    FAQsApi.map((data) => {
                        return (
                            <div className='faqs-div' key={data.id}>
                                <div className='faqs-question-div'>
                                    <p onClick={() => setShow(!show)} className='plus'>{show ? "–" : "+"}</p>
                                    <p className='question'>{data.question}</p>
                                </div>
                                {show && <div className='faqs-answer-div'>
                                    <p className='answer'>{data.answer}</p>
                                </div>}
                            </div>
                        )
                    })

                }
            </div> */}


        </>
    )
}

export default FAQs