import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import LoginPage from '../Pages/LoginPage';
import SignupPage from '../Pages/SignupPage';
import PaymentSuccess from '../Pages/PaymentSuccess';
import About from '../Pages/About';
import HowToUsePage from '../Pages/HowToUsePage';
import ContactUsPage from '../Pages/ContactUsPage';

const AllRoutes = () => {
    return (
      <Routes>
        <Route  path="/" element={<Home/>}></Route>
        <Route  path="/login" element={<LoginPage/>}></Route>
        <Route  path="/signup" element={<SignupPage/>}></Route>  
        <Route  path="/paymentsuccess" element={<PaymentSuccess/>}></Route>  
        <Route  path="/about" element={<About/>}></Route>
        <Route  path="/howtouse" element={<HowToUsePage/>}></Route>
        <Route  path="/contact" element={<ContactUsPage/>}></Route>
      </Routes>
    );
  };
  
  export default AllRoutes;
  