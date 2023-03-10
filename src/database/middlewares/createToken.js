require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '15d',
  algorithm: 'HS256',
};

const createToken = (id) => {
  const token = jwt.sign({ id }, secret, jwtConfig);
  return token;
};

module.exports = {
  createToken,
};
