import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/userModel';

const userController = {
    signup: async (req, res) => {
        try {
          // Extracting user details from request body
          const { name, mobileNumber, email, password } = req.body;
    
          // Checking if user with the same email already exists
          let user = await User.findOne({ email });
    
          if (user) {
            return res.status(400).json({ message: 'User already exists' });
          }
    
          // Creating new user instance
          user = new User({
            name,
            mobileNumber,
            email,
            password,
          });
    
          // Encrypting password using bcrypt
          const salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(password, salt);
    
          // Saving user to the database
          await user.save();
    
          res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
          console.error(error.message);
          res.status(500).json({ message: 'Server Error' });
        }
      },
    
  login: async (req, res) => {
    try {
      // Extracting mobile number and password from request body
      const { mobileNumber, password } = req.body;

      // Checking if a user with the provided mobile number exists
      const user = await User.findOne({ mobileNumber });

      if (!user) {
        return res.status(400).json({ message: 'Invalid mobile number or password' });
      }

      // Validating password
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(400).json({ message: 'Invalid mobile number or password' });
      }

      // Generating JWT token
      const payload = {
        user: {
          id: user._id,
        },
      };

      jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (error, token) => {
        if (error) throw error;
        res.json({ token });
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: 'Server Error' });
    }
  },
  getUserProfile: async (req, res) => {
    try {
      // Fetch user data based on user ID from JWT token payload
      const user = await User.findById(req.user.id).select('-password');
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json(user);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: 'Server Error' });
    }
  },
};

export default userController;
