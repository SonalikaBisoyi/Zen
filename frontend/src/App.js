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

const App = () => {
  return (
      <Box mt="60px"> {/* Adjust the margin top to accommodate the height of the Navbar */}
        <AllRoutes />
    </Box>
  );
};

export default App;
