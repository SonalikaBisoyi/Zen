// import React, { useState } from 'react';
// import {useNavigate} from 'react-router-dom';
// import {
//   Box,
//   FormControl,
//   FormLabel,
//   Input,
//   Button,
//   Heading,
//   Link,
//   AlertDialog,
//   AlertDialogBody,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogContent,
//   AlertDialogOverlay,
// } from '@chakra-ui/react';
// import axios from 'axios';
// const LoginPage = () => {
//   const navigate=useNavigate();
//   const [formData, setFormData] = useState({
//     mobileNumber: '',
//     password: '',
//   });
//   const [isOpen, setIsOpen] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };
//   const onClose = () => setIsOpen(false);
//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     try {
//       const response = await axios.post('http://localhost:5000/api/users/login', formData);
  
//       if (response.status === 200) {
//         // Successful login
//         console.log(response.data); // Handle the response data appropriately
//         const { token } = response.data;
//         localStorage.setItem('token', token); 
//         setIsOpen(true);
//         setTimeout(() => {
//         navigate('/');
//       }, 2000);

//       } else {
//         // Handle other status codes or errors
//         console.error('Login failed:', response.data);

//       }
//     } catch (error) {
//       // Handle network errors or exceptions
//       console.error('Error:', error);
//     }
//   };
  

//   return (
//     <Box maxW="md" mx="auto" mt={8} p={6} borderWidth="1px" borderRadius="lg">
//       <Heading as="h1" mb={6} textAlign="center">
//         Login
//       </Heading>
//       <form onSubmit={handleSubmit}>
//         <FormControl id="mobileNumber" mb={4}>
//           <FormLabel>Mobile Number</FormLabel>
//           <Input
//             type="tel"
//             name="mobileNumber"
//             value={formData.mobileNumber}
//             onChange={handleChange}
//           />
//         </FormControl>
//         <FormControl id="password" mb={4}>
//           <FormLabel>Password</FormLabel>
//           <Input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//         </FormControl>
//         <Button type="submit" colorScheme="blue" width="full" mb={4}>
//           Login
//         </Button>
//       </form>
//       <Box textAlign="center">
//       <a href="/signup">Don't have an account?Signup please.</a>
//       </Box>
//       <AlertDialog isOpen={isOpen} onClose={onClose}>
//         <AlertDialogOverlay>
//           <AlertDialogContent>
//             <AlertDialogHeader>Login Successful</AlertDialogHeader>
//             <AlertDialogBody>
//               Thank you for joining us. Have a nice experience.
//             </AlertDialogBody>
//             <AlertDialogFooter>
//               <Button onClick={onClose}>Close</Button>
//             </AlertDialogFooter>
//           </AlertDialogContent>
//         </AlertDialogOverlay>
//       </AlertDialog>
//     </Box>
//   );
// };

// export default LoginPage;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Link,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react';
import axios from 'axios';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    mobileNumber: '',
    password: '',
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const onClose = () => setIsOpen(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/users/login', formData);

      if (response.status === 200) {
        // Successful login
        console.log(response.data); // Handle the response data appropriately
        const { token, id } = response.data;
        localStorage.setItem('id',id);
        localStorage.setItem('token', token);
        setIsOpen(true);
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        // Handle other status codes or errors
        console.error('Login failed:', response.data);
      }
    } catch (error) {
      // Handle network errors or exceptions
      console.error('Error:', error);
    }
  };

  return (
    <Box
      maxW="md"
      mx="auto"
      mt={8}
      p={6}
      borderWidth="1px"
      borderRadius="lg"
      bg="#FFE6E6" // Background color
    >
      <Heading as="h1" mb={6} textAlign="center" color="#7469B6"> {/* Heading color */}
        Login
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="mobileNumber" mb={4}>
          <FormLabel color="#7469B6">Mobile Number</FormLabel> {/* Label color */}
          <Input
            type="tel"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            borderColor="#AD88C6" // Input border color
          />
        </FormControl>
        <FormControl id="password" mb={4}>
          <FormLabel color="#7469B6">Password</FormLabel> {/* Label color */}
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            borderColor="#AD88C6" // Input border color
          />
        </FormControl>
        <Button type="submit" colorScheme="blue" width="full" mb={4} bg="#AD88C6"> {/* Button color */}
          Login
        </Button>
      </form>
      <Box textAlign="center">
        <Link href="/signup" color="#7469B6">Don't have an account? Signup please.</Link> {/* Link color */}
      </Box>
      <AlertDialog isOpen={isOpen} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent bg="#E1AFD1"> {/* Alert dialog background color */}
            <AlertDialogHeader color="#7469B6">Login Successful</AlertDialogHeader> {/* Alert dialog header color */}
            <AlertDialogBody color="#7469B6">
              Thank you for joining us. Have a nice experience.
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button onClick={onClose} bg="#AD88C6"> {/* Button color */}
                Close
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
};

export default LoginPage;
