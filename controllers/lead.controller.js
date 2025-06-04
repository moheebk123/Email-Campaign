import Lead from "../models/lead.models.js";

export const getUserLeads = async (req, res) => {
  const leads = await Lead.find({ userId: req.params.userId });
  res.json(leads);
};
