// import React from 'react';
// import { Box, Stack } from "@chakra-ui/react";
// import Card from '../Components/Card';
// import nmp from '../images/neck-massage-pillow-.jpg';
// import Navbar from '../Components/Navbar';
// import axios from "axios";


// const Home = () => {


//     const checkoutHandler = async (amount) => {

//         const { data: { key } } = await axios.get("http://www.localhost:5000/api/getkey")

//         const { data: { order } } = await axios.post("http://www.localhost:5000/api/checkout", {
//             amount
//         })

//         const options = {
//             key,
//             amount: order.amount,
//             currency: "INR",
//             name: "Zenpod",
//             description: "A eye and neck massage machine",
//             image: "https://avatars.githubusercontent.com/u/25058652?v=4",
//             order_id: order.id,
//             callback_url: "http://www.localhost:5000/api/paymentverification",
//             prefill: {
//                 name: "Zenpod",
//                 email: "zenpod@example.com",
//                 contact: "9999999999"
//             },
//             notes: {
//                 "address": "Razorpay Corporate Office"
//             },
//             theme: {
//                 "color": "#121212"
//             }
//         };
//         const razor = new window.Razorpay(options);
//         razor.open();
//     }

//     return (
//         <Box>

//             <Stack h={"100vh"} alignItems="center" justifyContent="center" direction={["column", "row"]}>

//                 <Card amount={50} img={nmp} checkoutHandler={checkoutHandler} />
                

//             </Stack>
//         </Box>
//     )
// }

// export default Home

import React, { useState } from 'react';
import { Box, Stack, Button } from '@chakra-ui/react';
import Card from '../Components/Card';
import Navbar from '../Components/Navbar';
import nmp from '../images/neck-massage-pillow-.jpg';
import axios from 'axios';

const Home = () => {


            const checkoutHandler = async (amount) => {
        
                // const { data: { key } } = await axios.get("http://localhost:5000/api/getkey")
        
                // const { data: { order } } = await axios.post("http://localhost:5000/api/checkout", {
                //     amount
               // })
               try {
                const { data: { key } } = await axios.get("http://www.localhost:5000/api/getkey");
                const { data: { order } } = await axios.post("http://www.localhost:5000/api/checkout", { amount });
                const options = {
                    key,
                    amount: order.amount,
                    currency: "INR",
                    name: "Zenpod",
                    description: "A eye and neck massage machine",
                    image: "https://avatars.githubusercontent.com/u/25058652?v=4",
                    order_id: order.id,
                    callback_url: "http://www.localhost:5000/api/paymentverification",
                    prefill: {
                        name: "Zenpod",
                        email: "zenpod@example.com",
                        contact: "9999999999"
                    },
                    notes: {
                        "address": "Razorpay Corporate Office"
                    },
                    theme: {
                        "color": "#121212"
                    }
                };
                const razor = new window.Razorpay(options);
                razor.open();
            
                // Rest of your code
            } catch (error) {
                console.error("An error occurred while making the request:", error);
                console.error("Error details:", error.response.data);
            }
        }
        
                
  const [showCard, setShowCard] = useState(false);

  const handleBookNow = () => {
    setShowCard(true);
  };

  const handleCloseCard = () => {
    setShowCard(false);
  };

  return (
    <Box>
      <Navbar />
      <Stack h={"100vh"} alignItems="center" justifyContent="center" direction={["column", "row"]}>
          <Card amount={50} img={nmp} checkoutHandler={checkoutHandler} onClose={handleCloseCard} />
      </Stack>
    </Box>
  );
};

export default Home;