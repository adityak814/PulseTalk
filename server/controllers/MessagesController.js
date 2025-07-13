import Message from "../models/MessagesModel.js";
import { renameSync, mkdirSync } from "fs";

export const getMessages = async (request, response, next) => {
  try {
    const user1 = request.userId;
    const user2 = request.body.id;

    if (!user1 || !user2) {
      return response.status(400).send("Both user ID's are required.");
    }

    const messages = await Message.find({
      $or: [
        { sender: user1, recipient: user2 },
        { sender: user2, recipient: user1 },
      ],
    }).sort({ timestamp: 1 });
    return response.status(200).json({ messages });
  } catch (error) {
    console.log({ error });
    return response.status(500).send("Internal Server Error.");
  }
};


export const uploadFile = async (req, res) => {
  try {
    if (!req.file || !req.file.path) {
      return res.status(400).send("File is required.");
    }

    return res.status(200).json({ fileUrl: req.file.path });
  } catch (error) {
    console.log({ error });
    return res.status(500).send("Internal Server Error.");
  }
};
