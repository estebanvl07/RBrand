import { NextApiRequest, NextApiResponse } from "next";
import cloudinary from "~/lib/cloudinary";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const { file } = req.body;

    try {
      const result = await cloudinary.uploader.upload(file, {
        folder: "your_folder_name",
      });

      res.status(200).json({ url: result.secure_url });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
