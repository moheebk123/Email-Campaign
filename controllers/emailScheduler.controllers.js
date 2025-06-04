import cron from "node-cron";
import Campaign from "../models/campaign.models.js";

export const scheduleEmails = () => {
  cron.schedule("* * * * *", async () => {
    const now = new Date();
    const dueCampaigns = await Campaign.find({
      scheduledTime: { $lte: now },
      sent: false,
    });

    dueCampaigns.forEach(async (campaign) => {
      campaign.emails.forEach((email) => {
        console.log(
          `Sending email to ${email} for campaign "${campaign.campaignName}"`
        );
      });
      campaign.sent = true;
      await campaign.save();
    });
  });
};
