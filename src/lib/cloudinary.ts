import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.BUCKET_NAME!,
  api_key: process.env.BUCKET_API_KEY!,
  api_secret: process.env.BUCKET_API_SECRET!,
});

export default cloudinary;
