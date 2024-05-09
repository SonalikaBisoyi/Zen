import {
    Box,
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    IconButton,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { BiMailSend } from 'react-icons/bi';
  
  const SocialButton = ({ children, label, href }) => {
    return (
      <chakra.button
        bg={useColorModeValue('#AD88C6', '#7469B6')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('#FFE6E6', '#AD88C6'),
        }}
      >
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2} color={useColorModeValue('#7469B6', '#FFFFFF')}>
        {children}
      </Text>
    );
  };
  
  export default function LargeWithNewsletter() {
    return (
      <Box bg={useColorModeValue('#E1AFD1', '#1A202C')} color={useColorModeValue('#1A202C', '#FFE6E6')}>
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }} spacing={8}>
            <Stack spacing={6}>
              <Text fontSize={'sm'}>&copy; 2024 Zenpod. All rights reserved</Text>
              <Stack direction={'row'} spacing={6}>
                <SocialButton label={'Twitter'} href={'#'}>
                  <FaTwitter />
                </SocialButton>
                <SocialButton label={'YouTube'} href={'#'}>
                  <FaYoutube />
                </SocialButton>
                <SocialButton label={'Instagram'} href={'#'}>
                  <FaInstagram />
                </SocialButton>
              </Stack>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Company</ListHeader>
              <Link href={'/about'} color={useColorModeValue('#7469B6', '#FFFFFF')}>About us</Link>
              <Link href={'#'} color={useColorModeValue('#7469B6', '#FFFFFF')}>Blog</Link>
              <Link href={'/contact'} color={useColorModeValue('#7469B6', '#FFFFFF')}>Contact us</Link>
              <Link href={'#'} color={useColorModeValue('#7469B6', '#FFFFFF')}>Pricing</Link>
              <Link href={'#'} color={useColorModeValue('#7469B6', '#FFFFFF')}>Testimonials</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Support</ListHeader>
              <Link href={'#'} color={useColorModeValue('#7469B6', '#FFFFFF')}>Help Center</Link>
              <Link href={'#'} color={useColorModeValue('#7469B6', '#FFFFFF')}>Terms of Service</Link>
              <Link href={'#'} color={useColorModeValue('#7469B6', '#FFFFFF')}>Legal</Link>
              <Link href={'#'} color={useColorModeValue('#7469B6', '#FFFFFF')}>Privacy Policy</Link>
              <Link href={'#'} color={useColorModeValue('#7469B6', '#FFFFFF')}>Status</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Stay up to date</ListHeader>
              <Stack direction={'row'}>
                <Input
                  placeholder={'Your email address'}
                  bg={useColorModeValue('#AD88C6', '#7469B6')}
                  border={0}
                  _focus={{
                    bg: '#FFFFFF',
                  }}
                />
                <IconButton
                  bg={useColorModeValue('#FFE6E6', '#E1AFD1')}
                  color={useColorModeValue('#1A202C', '#FFE6E6')}
                  _hover={{
                    bg: useColorModeValue('#FFE6E6', '#E1AFD1'),
                  }}
                  aria-label="Subscribe"
                  icon={<BiMailSend />}
                />
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    );
  }
  