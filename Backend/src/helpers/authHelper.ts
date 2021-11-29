import bcrypt from "bcrypt";
import UserModel from "../Models/user";
import { iUser } from "../schemas/User";

const registerUser = async (userData: iUser) => {
  const user = new UserModel(userData);
  await user.save();
  const registeredUser = await UserModel.findOne();
  return registeredUser;
};

const localSignIn = async (email: string, password: string, done: any) => {
  try {
    const user = await UserModel.findOne({ email: email });
    if (user === null) return done("Password or email is incorrect");
    const passwordExists = bcrypt.compareSync(password, user.password);
    if (passwordExists) return done(null, user);
    return done("Password or email is incorrect");
  } catch (error) {
    return error;
  }
};

export { registerUser, localSignIn };
