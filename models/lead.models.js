import mongoose from "mongoose";

const leadSchema = new mongoose.Schema({
  userId: String,
  name: String,
  email: String,
});

const Lead = mongoose.model("Lead", leadSchema);
export default Lead;
