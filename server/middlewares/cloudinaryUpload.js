import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    const isImage = file.mimetype.startsWith("image/");

    return {
      folder: "my-chat-app/profile-images",
      resource_type: isImage ? "image" : "raw",
      allowed_formats: ["jpg", "png", "jpeg", "pdf", "doc", "mp4", "zip"],
      public_id: `${Date.now()}-${file.originalname}`,
      access_mode: "public",
    };
  },
});

const cloudinaryUpload = multer({ storage });

export default cloudinaryUpload;
