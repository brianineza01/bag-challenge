import UserModel from "../Models/user";

const updateUser = async (_id: string, updateObject: any) => {
  try {
    const res = await UserModel.updateOne({ _id }, updateObject);
    if (res.modifiedCount >= 1) return "success";
    throw new Error("update failed");
  } catch (error) {
    console.error(error.message);
  }
};

export { updateUser };
