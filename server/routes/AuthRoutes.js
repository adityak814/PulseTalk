import { Router } from "express";
import {
  signup,
  login,
  getUserInfo,
  updateProfile,
  addProfileImage,
  removeProfileImage,
  logout,
} from "../controllers/AuthController.js";
import { verifyToken } from "../middlewares/AuthMiddleware.js";
import cloudinaryUpload from "../middlewares/cloudinaryUpload.js";

// import multer from "multer";

const authRoutes = Router();
// const upload = multer({ dest: "uploads/profiles/" });

authRoutes.post("/signup", signup);
authRoutes.post("/login", login);
authRoutes.get("/user-info", verifyToken, getUserInfo);
authRoutes.post("/update-profile", verifyToken, updateProfile);
// authRoutes.post(
//   "/add-profile-image",
//   verifyToken,
//   upload.single("profile-image"),
//   addProfileImage
// );
authRoutes.post(
  "/add-profile-image",
  verifyToken,
  cloudinaryUpload.single("profile-image"),
  addProfileImage
);

authRoutes.delete("/remove-profile-image", verifyToken, removeProfileImage);
authRoutes.post("/logout", logout);

export default authRoutes;
