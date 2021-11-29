import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const { SECRET_KEY } = process.env;

const generateToken = (data: any) => {
  const token = jwt.sign(data, SECRET_KEY, { expiresIn: "2h" });
  return token;
};

const verifyToken = (token: string) => {
  try {
    const data = jwt.verify(token, SECRET_KEY);
    return data;
  } catch (err) {
    return err;
  }
};

export { generateToken, verifyToken };
