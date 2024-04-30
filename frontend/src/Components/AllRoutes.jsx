import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import LoginPage from '../Pages/LoginPage';
import SignupPage from '../Pages/SignupPage';
import PaymentSuccess from '../Pages/PaymentSuccess';
const AllRoutes = () => {
    return (
      <Routes>
        <Route  path="/" element={<Home/>}></Route>
        <Route  path="/login" element={<LoginPage/>}></Route>
        <Route  path="/signup" element={<SignupPage/>}></Route>  
        <Route  path="/payment" element={<PaymentSuccess/>}></Route>  
      </Routes>
    );
  };
  
  export default AllRoutes;
  