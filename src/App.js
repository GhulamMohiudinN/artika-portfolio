import logo from './logo.svg';
import './App.css';
import './ContactUsPage.css'
import LandingPage from './Pages/LandingPage';
import ContactUsPage from './Pages/ContactUsPage';
import TestimonialPage from './Pages/TestimonialPage';
import FAQsPage from './Pages/FAQsPage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}></Route>
          <Route path='/contact' element={<ContactUsPage />}></Route>
          <Route path='/testimonial' element={<TestimonialPage />}></Route>
          <Route path='/faqs' element={<FAQsPage />}></Route>
        </Routes>
      </BrowserRouter>



      {/* <LandingPage /> */}
      {/* <ContactUsPage /> */}
      {/* <TestimonialPage /> */}
      {/* <FAQsPage /> */}
    </>
  );
}

export default App;
