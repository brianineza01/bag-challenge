import jwt from "jsonwebtoken";
const { SECRET_KEY } = process.env;
const generateToken = (data: any) => {
  try {
    const token = jwt.sign(data, SECRET_KEY, { expiresIn: "2h" });
    return token;
  } catch (error) {
    return error;
  }
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
