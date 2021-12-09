import { Schema } from "mongoose";

type iCountries = { name: string; status?: "to visit" | "visited" }[];
interface iUser {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: number;
  dateOfBirth: Date;
  country: string;
  createdOn?: Date;
  loggedInOn?: Date;
  countries?: iCountries;
}

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: Number,
  dateOfBirth: { type: Date, required: true },
  country: { type: String, required: true },
  createdOn: { type: Date, default: Date.now },
  loggedInOn: Date,
  countries: [
    {
      name: { type: String },
      status: {
        type: String,
        default: "to visit",
      },
    },
  ],
});

export { userSchema, iUser, iCountries };
