import cloudinary from "cloudinary";

// Set up the Cloudinary configuration with your credentials
cloudinary.v2.config({
  cloud_name: process.env.NEXTAUTH_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export default cloudinary;