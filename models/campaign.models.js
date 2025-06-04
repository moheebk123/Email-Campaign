import mongoose from "mongoose";

const campaignSchema = new mongoose.Schema({
  userId: String,
  campaignName: String,
  scheduledTime: Date,
  emails: [String],
  sent: { type: Boolean, default: false },
});

const Campaign = mongoose.model("Campaign", campaignSchema);
export default Campaign;
