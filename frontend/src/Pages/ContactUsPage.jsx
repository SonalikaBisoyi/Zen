import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';

const ContactUsPage = () => {
  return (
    <Box bg={useColorModeValue('#FFE6E6', '#E1AFD1')} color={useColorModeValue('#1A202C', '#7469B6')}>
      <Container maxW={'3xl'} py={[12, 24]} px={[4, 8]} display={'flex'} alignItems={'center'}>
        {/* Image Section */}
        <Box flex={1} style={{ overflow: 'hidden' , height: '100%',marginLeft:"-25%",marginTop:"-10%"}}>
          <img
            src="https://webcdn.callhippo.com/blog/wp-content/uploads/2022/08/Leverage-Business-Phone-Numbers-To-Market-Your-Business.png"
            alt="Contact Us"
            style={{ width: '150%', height: '200%', objectFit: 'cover' }}
          />
        </Box>
        {/* Contact Form Section */}
        <Box flex={1} pl={[0, 8]}>
          <Stack spacing={8}>
            <Heading>Contact Us</Heading>
            <Text>
              Have a question or feedback for us? Fill out the form below and we'll get back to you as soon as possible.
            </Text>
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input type="text" placeholder="Your name" />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Your email" />
            </FormControl>
            <FormControl id="message">
              <FormLabel>Message</FormLabel>
              <Textarea placeholder="Your message" />
            </FormControl>
            <Button
              bg={useColorModeValue('#AD88C6', '#7469B6')}
              color={useColorModeValue('#FFE6E6', '#1A202C')}
              _hover={{ bg: useColorModeValue('#E1AFD1', '#AD88C6') }}
            >
              Send
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactUsPage;
