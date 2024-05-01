// import { Button, Image, Text, VStack } from '@chakra-ui/react'
// import React from 'react'

// const Card = ({ amount, img, checkoutHandler }) => {
//     return (
//         <VStack>
//             <Image src={img} boxSize={"64"} objectFit="cover" />
//             <Text>₹{amount}</Text>
//             <Button onClick={() => checkoutHandler(amount)}>Book Now</Button>
//         </VStack>
//     )
// }

// export default Card


import { Button, Image, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const Card = ({ amount, img, checkoutHandler }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Check login status from local storage
    React.useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    return (
        <VStack>
            <Image src={img} boxSize="64" objectFit="cover" />
            <Text>₹{amount}</Text>
            {isLoggedIn ? (
                <Button onClick={() => checkoutHandler(amount)}>Book Now</Button>
            ) : (
                <Text>Please log in to book</Text>
            )}
        </VStack>
    );
};

export default Card;
