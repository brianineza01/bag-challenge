import { model } from "mongoose";
import { userSchema, iUser } from "../schemas/User";

const UserModel = model<iUser>("User", userSchema);

export default UserModel;
