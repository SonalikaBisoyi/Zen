// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./Home";
// import PaymentSuccess from "./PaymentSuccess";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/paymentsuccess" element={<PaymentSuccess />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React from "react";
import AllRoutes from "./Components/AllRoutes";
import { Box } from "@chakra-ui/react"; // Assuming you're using Chakra UI for styling
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';

const App = () => {
  return (
      <Box> {/* Adjust the margin top to accommodate the height of the Navbar */}
        <Navbar/>
        <AllRoutes />
        <Footer/>
    </Box>
  );
};

export default App;
