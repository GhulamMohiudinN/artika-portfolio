import React from 'react'
import Navbar from '../Components/Navbar'
import Contact from '../Components/Contact'
import vector from '../imgs/Vector.png'
import girlLaptop from '../imgs/girlLaptop.png'
import locationSvg from '../imgs/location-dot-solid.svg'
import phoneSvg from '../imgs/phone-volume-solid.svg'
import emailSvg from '../imgs/envelope-solid.svg'
import websiteSvg from '../imgs/globe-solid.svg'
import contactUsImg1 from '../imgs/contactusImgs (1).jpg'
import contactUsImg2 from '../imgs/contactusImgs (2).jpg'
import contactUsImg3 from '../imgs/contactusImgs (3).jpg'
import contactUsImg4 from '../imgs/contact-us.png'
import Form from '../Components/Form'
import "../ContactUsPage.css"
import Footer from '../Components/Footer'
const ContactUsPage = (props) => {
 
  return (
    <>
      <Navbar />
      <Contact
        heading="Your Contact Agent."
        para="Thank you for considering reaching out to us! Whether you have a question, feedback, or just want to say hello, we're here to listen. Our team is dedicated to providing you with the support and assistance you need. Feel free to fill out the form below or use the contact information provided to connect with us. We value your input and look forward to hearing from you."
        vectorImg={vector}
        girlLaptopImg={girlLaptop}
        previousCollaborationImg={contactUsImg4}
      />
      {/* /////////////////////////// Form ////////////////////////////////////////// */}
      <div className='form-main-div'>
        <h1 className='form-num-1'>Contact Form #01</h1>
        <Form />
      </div>
      <Footer />
    </>
  )
}

export default ContactUsPage