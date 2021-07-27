import jwt from 'jsonwebtoken';

export const validEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

export const generateToken = (params = {}) => {
  return jwt.sign(params, process.env.JWT_SECRET, {
    expiresIn: 86400,
  });
};
