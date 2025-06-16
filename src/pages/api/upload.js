import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(400).end();

  const { file } = req.body;
  const upload = await cloudinary.uploader.upload(file, {
    upload_preset: process.env.CLOUDINARY_PRESET,
  });

  res.json({ url: upload.secure_url });
}
