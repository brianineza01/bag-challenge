import { request, Request, Response } from "express";
import bcrypt from "bcrypt";
import { registerUser } from "../helpers/authHelper";
import { iUser } from "../schemas/User";
import passport from "passport";
import { updateUser } from "../helpers/userHelper";
import { generateToken } from "../helpers/tokenHelper";
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

const userLogin = (request: Request, response: Response) => {
  try {
    passport.authenticate("local", { session: false }, async (error, user) => {
      if (error || !user) {
        return response.status(404).json({ error });
      }
      const { _id: id, firstName, lastName, email }: iUser = user;
      //save the logged in Date
      const res = await updateUser(id, { loggedInOn: Date.now() });
      // This is what is stored in token
      const payload = {
        id,
        firstName,
        lastName,
        email,
      };
      const token = generateToken(payload);
      // Returning the token and some user information
      request.login(payload, { session: false }, () =>
        response.status(200).json({
          status: 200,
          message: "User signed in successfully",
          data: {
            token,
            user: {
              id,
              firstName,
              lastName,
              email,
            },
          },
        })
      );
    })(request, response);
  } catch (error) {
    return response.status(500).json({
      status: 500,
      message: "Something went wrong when signing in",
      error: error.message,
    });
  }
};

export { userSignUp, userLogin };
