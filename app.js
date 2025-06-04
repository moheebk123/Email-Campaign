import express from "express";

import {connectDB} from "./config/db-client.config.js"
import { campaignRoutes } from "./routes/campaign.routes.js";
import { leadRoutes } from "./routes/lead.routes.js";
import {scheduleEmails} from "./controllers/emailScheduler.controllers.js"

const app = express();

app.use(express.json());

app.use("/api/campaigns", campaignRoutes);
app.use("/api/leads", leadRoutes);

// Start scheduler
scheduleEmails();

try {
  await connectDB();
  app.listen(process.env.PORT, () => {
    console.log(`Server listening on PORT:${process.env.PORT}`);
  });
} catch (error) {
  console.error(error);
}
