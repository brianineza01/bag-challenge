import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const { SECRET_KEY } = process.env;

const generateToken = (data: any) => {
  const token = jwt.sign(data, SECRET_KEY, { expiresIn: "7d" });
  return token;
};

const verifyToken = (token: string) => {
  try {
    const data = jwt.verify(token, SECRET_KEY);
    return { status: "success", user: data };
  } catch (err) {
    return { status: "error occurred", error: err.message };
  }
};

export { generateToken, verifyToken };
