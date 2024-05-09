// import React,{useEffect,useState,useRef} from 'react';
// import { Box, Flex, IconButton, useColorMode, Text ,Spacer,Menu, MenuButton, MenuList, MenuItem} from '@chakra-ui/react';
// import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
// import { SunIcon, MoonIcon } from '@chakra-ui/icons';
// import {useNavigate} from 'react-router-dom';

// const Navbar = () => {
//   //window.location.reload()
//   const navigate=useNavigate();
//   const { colorMode, toggleColorMode } = useColorMode();
//   const isDark = colorMode === 'dark';
//   const [isOpen, setIsOpen] = React.useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const prevIsLoggedIn = useRef(isLoggedIn);
//   useEffect(() => {

//     const token = localStorage.getItem('token');
//     console.log('login',token)
//     if (token) {
//       setIsLoggedIn(true);
//     } else {
//       setIsLoggedIn(false);
//     }
//   }, []);
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };
//   const handleLogout = () => {
//     // Remove the token from local storage
//     localStorage.removeItem('token');
//     // Update isLoggedIn state to false
//     setIsLoggedIn(false);
//     window.location.reload();
//   };

//   return (
//     <Flex
//       as="nav"
//       align="center"
//       justify="space-between"
//       wrap="wrap"
//       padding="1rem"
//       bg={isDark ? 'gray.800' : 'gray.200'}
//       color={isDark ? 'white' : 'black'}
//       mb={0} 
//     >
//       <Box>
//         <Box display="flex" flexDirection="column">
//           <Text fontWeight="bold" fontSize="2xl" color="blue.500">
//             Zenpod
//           </Text>
//           <Text fontSize="sm" fontWeight="normal" color="gray.500" ml={2}>
//             Your workplace relaxation partner
//           </Text>
//         </Box>
//       </Box>

//       <IconButton
//         display={{ base: 'block', md: 'none' }}
//         onClick={toggleMenu}
//         icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
//         aria-label="Toggle navigation"
//         variant="outline"
//       />

//       <Box
//         display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
//         flexBasis={{ base: '100%', md: 'auto' }}
//       >
//         <Flex
//           align="center"
//           justify={['center', 'space-between', 'flex-end', 'flex-end']}
//           direction={['column', 'row', 'row', 'row']}
//           pt={[4, 0, 0, 0]}
//         >
//           <Box p={[2, 4, 4, 4]}>
//             <a href="#">Orders</a>
//           </Box>
//           <Box p={[2, 4, 4, 4]}>
//             <a href="#">How to use?</a>
//           </Box>
//           <Box p={[2, 4, 4, 4]}>
//             <a href="#">Contact</a>
//           </Box>
//           <Box p={[2, 4, 4, 4]}>
//             <a href="#">About</a>
//           </Box>
//         </Flex>
//       </Box>

//       <Spacer />

//        <Box display="flex" alignItems="center">
        
//       <Menu>
//   <MenuButton as={Box} p={[2, 4, 4, 4]} cursor="pointer">
//     {isLoggedIn ? 'Welcome, user' : 'Login/Register'}
//   </MenuButton>
//   <MenuList>
//     {isLoggedIn ? (
//       <MenuItem onClick={handleLogout}>Logout</MenuItem>
//     ) : (
//       <MenuItem onClick={() => navigate('/login')}>Login/Register</MenuItem>
//     )}
//   </MenuList>
// </Menu>
//          <IconButton
//            ml={2}
//            onClick={toggleColorMode}
//            icon={isDark ? <SunIcon /> : <MoonIcon />}
//            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
//          />
//        </Box> 
//     </Flex>
//   );
// };

// export default Navbar;

// import React,{useEffect,useState,useRef} from 'react';
// import { Box, Flex, IconButton, useColorMode, Text ,Spacer,Menu, MenuButton, MenuList, MenuItem} from '@chakra-ui/react';
// import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
// import { SunIcon, MoonIcon } from '@chakra-ui/icons';
// import {useNavigate} from 'react-router-dom';

// const Navbar = () => {
//   const navigate=useNavigate();
//   const { colorMode, toggleColorMode } = useColorMode();
//   const isDark = colorMode === 'dark';
//   const [isOpen, setIsOpen] = React.useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const prevIsLoggedIn = useRef(isLoggedIn);
//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       setIsLoggedIn(true);
//     } else {
//       setIsLoggedIn(false);
//     }
//   }, []);
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };
//   const handleLogout = () => {
//     // Remove the token from local storage
//     localStorage.removeItem('token');
//     // Update isLoggedIn state to false
//     setIsLoggedIn(false);
//     window.location.reload();
//   };

//   return (
//     <Flex
//       as="nav"
//       align="center"
//       justify="space-between"
//       wrap="wrap"
//       padding="1rem"
//       bg="#E1AFD1" // Light complementary color
//       color="#7469B6" // Dark text color for better contrast
//       mb={0} 
//     >
//       <Box>
//         <Box display="flex" flexDirection="column">
//           <Text fontWeight="bold" fontSize="2xl" color="#AD88C6">
//             Zenpod
//           </Text>
//           <Text fontSize="sm" fontWeight="normal" color="#FFE6E6" ml={2}>
//             Your workplace relaxation partner
//           </Text>
//         </Box>
//       </Box>

//       <IconButton
//         display={{ base: 'block', md: 'none' }}
//         onClick={toggleMenu}
//         icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
//         aria-label="Toggle navigation"
//         variant="outline"
//       />

//       <Box
//         display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
//         flexBasis={{ base: '100%', md: 'auto' }}
//       >
//         <Flex
//           align="center"
//           justify={['center', 'space-between', 'flex-end', 'flex-end']}
//           direction={['column', 'row', 'row', 'row']}
//           pt={[4, 0, 0, 0]}
//         >
//           <Box p={[2, 4, 4, 4]}>
//             <a href="#">Orders</a>
//           </Box>
//           <Box p={[2, 4, 4, 4]}>
//             <a href="#">How to use?</a>
//           </Box>
//           <Box p={[2, 4, 4, 4]}>
//             <a href="#">Contact</a>
//           </Box>
//           <Box p={[2, 4, 4, 4]}>
//             <a href="#">About</a>
//           </Box>
//         </Flex>
//       </Box>

//       <Spacer />

//        <Box display="flex" alignItems="center">
        
//       <Menu>
//   <MenuButton as={Box} p={[2, 4, 4, 4]} cursor="pointer">
//     {isLoggedIn ? 'Welcome, user' : 'Login/Register'}
//   </MenuButton>
//   <MenuList>
//     {isLoggedIn ? (
//       <MenuItem onClick={handleLogout}>Logout</MenuItem>
//     ) : (
//       <MenuItem onClick={() => navigate('/login')}>Login/Register</MenuItem>
//     )}
//   </MenuList>
// </Menu>
//          <IconButton
//            ml={2}
//            onClick={toggleColorMode}
//            icon={isDark ? <SunIcon /> : <MoonIcon />}
//            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
//          />
//        </Box> 
//     </Flex>
//   );
// };

// export default Navbar;


import React,{useEffect,useState,useRef} from 'react';
import { Box, Flex, IconButton, useColorMode, Text ,Spacer,Menu, MenuButton, MenuList, MenuItem} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import {useNavigate} from 'react-router-dom';

const Navbar = () => {
  const navigate=useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const prevIsLoggedIn = useRef(isLoggedIn);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleLogout = () => {
    // Remove the token from local storage
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    // Update isLoggedIn state to false
    setIsLoggedIn(false);
    window.location.reload();
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg="#E1AFD1" // Light complementary color
      color="#7469B6" // Dark text color for better contrast
      mb={0}
      mt={0} // Adjusted margin top
      style={{ marginTop: '0', position: 'sticky', top: '0', zIndex: '1000', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }} // Added inline style to override any existing margin
    >
      <Box>
        <Box display="flex" flexDirection="column">
          <Text fontWeight="bold" fontSize="2xl" color="#AD88C6">
            Zenpod
          </Text>
          <Text fontSize="sm" fontWeight="normal" color="gray.500" ml={2}>
            Your workplace relaxation partner
          </Text>
        </Box>
      </Box>

      <IconButton
        display={{ base: 'block', md: 'none' }}
        onClick={toggleMenu}
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        aria-label="Toggle navigation"
        variant="outline"
      />

      <Box
        display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
        flexBasis={{ base: '100%', md: 'auto' }}
      >
        <Flex
          align="center"
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          direction={['column', 'row', 'row', 'row']}
          pt={[2, 0, 0, 0]} // Adjusted padding top
        >
          <Box p={[2, 4, 4, 4]}>
            <a href="#">Orders</a>
          </Box>
          <Box p={[2, 4, 4, 4]}>
            <a href="/howtouse">How to use?</a>
          </Box>
          <Box p={[2, 4, 4, 4]}>
            <a href="/contact">Contact</a>
          </Box>
          <Box p={[2, 4, 4, 4]}>
            <a href="/about">About</a>
          </Box>
        </Flex>
      </Box>

      <Spacer />

       <Box display="flex" alignItems="center">
        
      <Menu>
  <MenuButton as={Box} p={[2, 4, 4, 4]} cursor="pointer">
    {isLoggedIn ? 'Welcome, user' : 'Login/Register'}
  </MenuButton>
  <MenuList>
    {isLoggedIn ? (
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    ) : (
      <MenuItem onClick={() => navigate('/login')}>Login/Register</MenuItem>
    )}
  </MenuList>
</Menu>
         <IconButton
           ml={2}
           onClick={toggleColorMode}
           icon={isDark ? <SunIcon /> : <MoonIcon />}
           aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
         />
       </Box> 
    </Flex>
  );
};

export default Navbar;




