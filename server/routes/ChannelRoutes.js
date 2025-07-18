import { Router } from "express";
import {
  createChannel,
  getChannelMessages,
  getUserChannel,
} from "../controllers/ChannelController.js";
import { verifyToken } from "../middlewares/AuthMiddleware.js";

const channelRoutes = Router();

channelRoutes.post("/create-channel", verifyToken, createChannel);
channelRoutes.get("/get-user-channels", verifyToken, getUserChannel);
channelRoutes.get("/get-channel-messages/:channelId", verifyToken, getChannelMessages);
export default channelRoutes;
