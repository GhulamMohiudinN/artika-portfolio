import React from 'react'
import "../ContactUsPage.css"
import vector from '../imgs/Vector.png'
import girlLaptop from '../imgs/girlLaptop.png'
import Contact from '../Components/Contact'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import FAQs from '../Components/FAQs'
const FAQsPage = () => {
    return (
        <>
            {/* FAQs page css include in Contactus.css */}
            <Navbar />
            <Contact
                name="FAQs"
                heading="Section"
                para="The page begins with the headline and question categories are given on the right side. Below the headline, questions are provided in each category. These questions are answered with one or two sentences that are easy to read and understand."
                vectorImg={vector}
                girlLaptopImg={girlLaptop}
            />
            <FAQs />
            <Footer />
        </>
    )
}

export default FAQsPage