import React, { useState } from 'react'
import FAQsApi from './FAQsApi'
import FAQs from './FAQs'
const MainFAQs = () => {
    const [data, setData] = useState(question);
    return (
        <>
            <div className='faqs-main-div'>
                <h1>Questions</h1>
                {
                    data.map((curEle) => {
                        const { id } = curEle;
                        return <FAQs key={id} {...curEle} />
                    })
                }
            </div>

        </>
    )
}

export default MainFAQs