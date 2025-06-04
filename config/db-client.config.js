import mongoose from "mongoose";
import { databaseName } from "../constants/db.constants.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}${databaseName}`);
    mongoose.set("debug", true);
  } catch (error) {
    console.error(error);
    process.exit();
  }
};
