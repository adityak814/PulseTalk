import { Router } from "express";
import { getMessages, uploadFile } from "../controllers/MessagesController.js";
import { verifyToken } from "../middlewares/AuthMiddleware.js";
import cloudinaryUpload from "../middlewares/cloudinaryUpload.js";


const messagesRoutes = Router();



messagesRoutes.post("/get-messages", verifyToken, getMessages);

messagesRoutes.post(
  "/upload-file",
  verifyToken,
  cloudinaryUpload.single("file"),
  uploadFile
);

export default messagesRoutes;
