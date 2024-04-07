import React from 'react'
import "../ContactUsPage.css"
import TestimonialApi from '../Components/TestimonialApi'
import Navbar from '../Components/Navbar'
import ClientExperience from '../Components/ClientExperience'
import Footer from '../Components/Footer'
import Slider from 'react-slick'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const TestimonialPage = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            <Navbar />
            {/* its css is added in contactus.css  */}

            <div className='testimonialHeading'>
                <h1>Don't take our word for it. </h1>
                <h1><span className='trust-span'>Trust</span> our customers. </h1>
            </div>
            <div className='testimonialCards'>
                <Slider {...settings}>
                    {
                        TestimonialApi.map((data) => {
                            return (
                                <>
                                    <div className='tetimonialCard' key={data.id}>
                                        <div className='dataDiv'>
                                            <p className='cusSms'><span className='commaSpan'>“</span>
                                                {data.cusSms}
                                                <span className='commaSpan'>“</span></p>
                                            <h3 className='cusName'>{data.cusName} &#128526; {data.cusCountry}</h3>
                                        </div>
                                        <div className='imgDiv'>

                                            <img src={data.cusImg} alt='customer img'></img>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </Slider>

            </div>

            <Footer />
        </>
    )
}

export default TestimonialPage