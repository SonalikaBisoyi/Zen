import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';

const About = () => {
  return (
    <Box bg={useColorModeValue('#FFE6E6', '#E1AFD1')} color={useColorModeValue('#1A202C', '#7469B6')}>
      <Box display="flex" justifyContent="center">
        <Box width="50%" mx={2} height="500px">
          <img src='https://hacsu.asn.au/image/D5bl7v7wk81K3s4AARcuAA/Supervision' alt='about' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Box>
        <Box width="50%" mx={2} height="500px">
          <img src='https://www.onlinecounselling4u.com/blog/wp-content/uploads/2022/02/signs-that-you-need-therapy.jpg' alt='about' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Box>
      </Box>
      <Container maxW={'3xl'} py={[12, 24]} px={[4, 8]}>
        <Stack spacing={8} textAlign={'center'}>
          <Heading>About Us</Heading>
          <Text>
            Zenpod is a team of four dedicated individuals passionate about promoting relaxation and wellness in the workplace.
          </Text>
          <Text>
            As a pay-to-use massage service provider, our mission is to enhance the well-being of employees during their breaks by offering premium neck and eye massagers.
          </Text>
          <Text>
            Our team understands the importance of relaxation amidst busy work schedules, and we strive to create a serene environment where individuals can rejuvenate and re-energize.
          </Text>
          <Text>
            With Zenpod, experience the ultimate relaxation experience tailored to meet the needs of modern professionals.
          </Text>
          <Link to="/contact">
            <Button
              bg={useColorModeValue('#AD88C6', '#7469B6')}
              color={useColorModeValue('#FFE6E6', '#1A202C')}
              _hover={{ bg: useColorModeValue('#E1AFD1', '#AD88C6') }}
            >
              Contact Us
            </Button>
          </Link>
        </Stack>
      </Container>
      
    </Box>
  );
};

export default About;
