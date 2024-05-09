// import { Box, Heading, Text, VStack } from '@chakra-ui/react'
// import React from 'react'
// import { useSearchParams } from "react-router-dom"
// const PaymentSuccess = () => {

//     const seachQuery = useSearchParams()[0]

//     const referenceNum = seachQuery.get("reference")
//     return (
//         <Box>
//             <VStack h="100vh" justifyContent={"center"}>

//                 <Heading textTransform={"uppercase"}> Order Successfull</Heading>

//                 <Text>
//                     Reference No.{referenceNum}
//                 </Text>
//                 <a href='/'>Back to Home</a>
//             </VStack>
//         </Box>
//     )
// }

// export default PaymentSuccess


import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useSearchParams } from "react-router-dom"

const PaymentSuccess = () => {
    const seachQuery = useSearchParams()[0]
    const referenceNum = seachQuery.get("reference")
    
    return (
        <Box bg="#7469B6" color="#FFE6E6"> {/* Background and text color */}
            <VStack h="100vh" justifyContent="center">

                <Heading textTransform="uppercase" color="#AD88C6"> {/* Heading color */}
                    Order Successful
                </Heading>

                <Text color="#E1AFD1"> {/* Text color */}
                    Reference No. {referenceNum}
                </Text>
                <a href="/" color="#FFE6E6"> {/* Link color */}
                    Back to Home
                </a>
            </VStack>
        </Box>
    )
}

export default PaymentSuccess
