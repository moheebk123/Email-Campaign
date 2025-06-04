import Campaign from "../models/campaign.models.js";

export const createCampaign = async (req, res) => {
  const { userId, campaignName, scheduledTime, emails } = req.body;
  const campaign = new Campaign({
    userId,
    campaignName,
    scheduledTime,
    emails,
  });
  await campaign.save();
  res.json({ message: "Campaign created successfully", campaign });
};
