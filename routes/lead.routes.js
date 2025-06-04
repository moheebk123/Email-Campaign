import express from "express";
import { getUserLeads } from "../controllers/lead.controller.js";

const router = express.Router();

router.get("/:userId", getUserLeads);

export const leadRoutes = router;
