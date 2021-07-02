// External Dependancies
import { boomify } from "boom";

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Get Data Models
import User from "../models/User";

// Get single User by ID
export const getSingleUser = async (req) => {
  try {
    const id = req.params === undefined ? req.id : req.params.id;
    const user = await User.findById(id);
    return user;
  } catch (err) {
    throw boomify(err);
  }
}

// Add a new user
export const createUser = async (req) => {
    try {
      const existingUser = await User.findOne({ email: req.email });
      if (existingUser) {
        throw new Error('User exists already.');
      }
      const hashedPassword = await bcrypt.hash(req.password, 12);

      const user = new User({
        email: req.email,
        password: hashedPassword
      });

      const result = await user.save();

      return "Successfully registered";
    } catch (err) {
      throw boomify(err);
    }
  }

  // Login user
  export const login = async (req) => {
    const user = await User.findOne({ email: req.email });
    if (!user) {
      throw new Error('User does not exist!');
    }
    const isEqual = await bcrypt.compare(req.password, user.password);
    if (!isEqual) {
      throw new Error('Password is incorrect!');
    }
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      'somesupersecretkey',
      {
        expiresIn: '1h'
      }
    );
    return { userId: user._id, token: token, tokenExpiration: 1, email: user.email };
  }
