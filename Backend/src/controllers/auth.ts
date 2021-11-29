import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { registerUser } from "../helpers/userHelper";
import { iUser } from "../db/schemas/User";
// import { generateToken } from "../helpers/tokenHelper";

const userSignUp = async (req: Request, res: Response) => {
  try {
    const {
      lastName,
      firstName,
      email,
      password,
      confirmPassword,
      country,
      dateOfBirth,
      phoneNumber,
    } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({
        status: 400,
        message: "The passwords must match.",
      });
    }
    const hashedPassword = bcrypt.hashSync(password, 10);
    const data: iUser = {
      lastName,
      firstName,
      email,
      password: hashedPassword,
      country,
      dateOfBirth: new Date(dateOfBirth),
      phoneNumber,
      createdOn: new Date(Date.now()),
    };
    const user = await registerUser(data);
    if (user) {
      res.status(201).send({
        status: 201,
        message: "Account has been created successfully. Proceed to sign in",
        user: user,
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Something went wrong when registering the user",
      error: error.message,
      name: error.name,
      errorOb: error,
    });
  }
};

export { userSignUp };
