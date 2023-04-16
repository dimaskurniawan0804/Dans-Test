import jwt from "jsonwebtoken";
const key = process.env.JWT_SECRET_KEY;
const secret = "AAAA";

const createToken = (payload: any) => {
  const token = jwt.sign(payload, secret);
  return token;
};

const readToken = (token: any) => {
  return jwt.verify(token, secret);
};

export { createToken, readToken };
