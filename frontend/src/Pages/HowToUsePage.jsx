import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';

const HowToUsePage = () => {
  return (
    <Box bg={useColorModeValue('#FFE6E6', '#E1AFD1')} color={useColorModeValue('#1A202C', '#7469B6')}>
      <Container maxW={'3xl'} py={[12, 24]} px={[4, 8]}>
        <Stack spacing={8} textAlign={'center'}>
          <Heading>How to Use</Heading>
          <Box display="flex" alignItems="center">
            <img src="https://media.istockphoto.com/id/1356368876/vector/sign-in-page-abstract-concept-vector-illustration.jpg?s=612x612&w=0&k=20&c=rzCsT-eZDA7UCe1DzEzvu5P7phea55C0QgLj1O1aE_Q=" alt="Step 1" style={{ borderRadius: '50%', width: '100px', height: '100px', marginRight: '20px' }} />
            <Text>
              1. <strong>Login or Sign Up:</strong> If you're a returning user, log in to your account. New users can sign up for an account to get started.
            </Text>
          </Box>
          <Box display="flex" alignItems="center">
            <img src="https://thumbs.dreamstime.com/b/flat-woman-monthly-payments-calendar-flat-monthly-payments-calendar-woman-payment-schedule-pay-money-interest-rate-245335892.jpg" alt="Step 2" style={{ borderRadius: '50%', width: '100px', height: '100px', marginRight: '20px' }} />
            <Text>
              2. <strong>Book Your Session:</strong> Once logged in, navigate to the booking section. Select your preferred time slot and duration, then proceed to payment.
            </Text>
          </Box>
          <Box display="flex" alignItems="center">
            <img src="https://www.siecindia.com/lc/img/aef_2020/imagia.gif" alt="Step 3" style={{ borderRadius: '50%', width: '100px', height: '100px', marginRight: '20px' }} />
            <Text>
              3. <strong>Start Your Session:</strong> After successful payment, the massage machine will automatically start at the booked time. Relax and enjoy your massage for 10 minutes.
            </Text>
          </Box>
          <Box display="flex" alignItems="center">
            <img src="https://media.istockphoto.com/id/1614144353/vector/thank-you-illustration-kind-communication-and-answer-to-birthday-or-wedding-celebration.jpg?s=612x612&w=0&k=20&c=ZFc3i5WTQAQjG6SSZB0wMbb67BTktoUbX9929h6T9Qo=" alt="Step 4" style={{ borderRadius: '50%', width: '100px', height: '100px', marginRight: '20px' }} />
            <Text>
              4. <strong>Thank You:</strong> We appreciate your trust in Zenpod. Thank you for choosing us for your relaxation needs.
            </Text>
          </Box>
          <Text fontSize={'sm'}>
            Need help? <Link color={'#7469B6'} href={'/contact'}>Contact us</Link>
          </Text>
        </Stack>
      </Container>
      {/* You can add a video component here */}
    </Box>
  );
};

export default HowToUsePage;
