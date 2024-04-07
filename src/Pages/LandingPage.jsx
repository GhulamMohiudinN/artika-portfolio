import React from 'react'
import Navbar from '../Components/Navbar'
import Contact from '../Components/Contact'
import vector from '../imgs/Vector.png'
import girlLaptop from '../imgs/girlLaptop.png'
import previousCollaboration from '../imgs/Previous Collaborations.png'
import Project from '../Components/Project'
import ClientExperience from '../Components/ClientExperience'
import BehindDesign from '../Components/BehindDesign'
import Query from '../Components/Query'
import Footer from '../Components/Footer'
import PrevioudCollabrationImg from '../Components/PrevioudCollabrationImg'
const LandingPage = () => {
    return (
        <>
            <Navbar />
            <Contact
               name="ARTIKA"
                heading="Your Visionary Graphic Designer"
                para="With a Wacom pen as my wand and a kaleidoscope of cultural influences as my palette, I navigate the digital canvas,seamlessly blending traditional artistry with modren flair."
                vectorImg={vector}
                girlLaptopImg={girlLaptop}
            />
            <PrevioudCollabrationImg />
            <Project />
            <ClientExperience />
            <BehindDesign heading="Behind the Designs"/>
            <Query />
            <Footer />
        </>
    )
}

export default LandingPage