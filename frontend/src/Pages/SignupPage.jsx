// import React, { useState } from 'react';
// import {
//   Box,
//   FormControl,
//   FormLabel,
//   Input,
//   Button,
//   Heading,
// } from '@chakra-ui/react';

// const SignupPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     mobileNumber: '',
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform form submission logic, e.g., send data to backend
//     console.log(formData);
//   };

//   return (
//     <Box maxW="md" mx="auto" mt={8} p={6} borderWidth="1px" borderRadius="lg">
//       <Heading as="h1" mb={6} textAlign="center">
//         Signup
//       </Heading>
//       <form onSubmit={handleSubmit}>
//         <FormControl id="name" mb={4}>
//           <FormLabel>Name</FormLabel>
//           <Input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//           />
//         </FormControl>
//         <FormControl id="mobileNumber" mb={4}>
//           <FormLabel>Mobile Number</FormLabel>
//           <Input
//             type="tel"
//             name="mobileNumber"
//             value={formData.mobileNumber}
//             onChange={handleChange}
//           />
//         </FormControl>
//         <FormControl id="email" mb={4}>
//           <FormLabel>Email address</FormLabel>
//           <Input
//             type="email"
//             name="email"
//             value={formData.email}
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
//         <Button type="submit" colorScheme="blue" width="full">
//           Sign up
//         </Button>
//       </form>
//     </Box>
//   );
// };

// export default SignupPage;



import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react';

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    email: '',
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
      const response = await axios.post('http://localhost:5000/api/users/signup', formData);
      console.log('Signup successful:', response.data);
      setIsOpen(true);
      setTimeout(() => {
        navigate('/login');
      }, 2000);
      
      // Handle success - e.g., show a success message or redirect the user
    } catch (error) {
      console.error('Error:', error);
      // Handle error - e.g., show an error message to the user
    }
  };

  return (
    <Box maxW="md" mx="auto" mt={8} p={6} borderWidth="1px" borderRadius="lg">
      <Heading as="h1" mb={6} textAlign="center">
        Signup
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="name" mb={4}>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="mobileNumber" mb={4}>
          <FormLabel>Mobile Number</FormLabel>
          <Input
            type="tel"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="email" mb={4}>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="password" mb={4}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </FormControl>
        <Button type="submit" colorScheme="blue" width="full">
          Sign up
        </Button>
      </form>
      {/* Popup */}
      <AlertDialog isOpen={isOpen} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader>Signup Successful</AlertDialogHeader>
            <AlertDialogBody>
              Your signup was successful. You can now log in.
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button onClick={onClose}>Close</Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
};

export default SignupPage;

