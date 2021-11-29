import UserModel from "../db/Models/user";
import { iUser } from "../db/schemas/User";

const registerUser = async (userData: iUser) => {
  const user = new UserModel(userData);
  await user.save();
  const registeredUser = await UserModel.findOne();
  return registeredUser;
};

export { registerUser };
