const bcrypt = require( 'bcrypt');
const User = require('../models/users');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const registerUser = async (req, res) => {
     try {
        const { name, email, password} = req.body;

        const existingUser = await User.findOne({ email });

        if( existingUser ){
            return res.status(400).json({ message: " User already exists"})
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ 
            name : name, 
            email : email, 
            password : hashedPassword
        });

        await newUser.save();

        res.status(201).json({ message: " User Registered Successfully"});
      } catch (error) {
        res
          .status(500)
          .json({ message: " Registered failed...", error: error.message });
      }
}

const loginUser = async ( req, res ) => {
    try{
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if( !user ){
            return res.status(400).json({ message: " User not found"});
        }

        const isPasswordValid = await bcrypt.compare(password, user.password)

        if( !isPasswordValid ){
            return res.status(400).json({ message: "Password incorrect"});
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // return success response
        res.status(200).json({ message: 'Login successful', token });

    }catch (error) {
        res
          .status(500)
          .json({ message: " Login failed...", error: error.message });
      }
}

module.exports = {
    registerUser,
    loginUser
}