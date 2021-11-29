import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION);
  } catch (err) {
    console.error(err);
  }
};

export { connectDB };
