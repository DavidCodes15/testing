import { connectToDB } from "@/utils/database";
import fittings from "@/models/fittings";
import cloudinary from "@/utils/cloudinary";
export const DELETE = async (req, {params}) => {
    try{
        await connectToDB();
        await fittings.findByIdAndRemove(params.id);
        const {publicId, firstId, secondId, thirdId} = await req.json();
        await cloudinary.v2.uploader.destroy(publicId, (error, result) => {
            if (error) {
              console.log("Error deleting image from Cloudinary:", error);
            } else {
              console.log("Image deleted from Cloudinary:", result);
            }
          });
        await cloudinary.v2.uploader.destroy(firstId, (error, result) => {
            if (error) {
              console.log("Error deleting image from Cloudinary:", error);
            } else {
              console.log("Image deleted from Cloudinary:", result);
            }
          });
          await cloudinary.v2.uploader.destroy(secondId, (error, result) => {
            if (error) {
              console.log("Error deleting image from Cloudinary:", error);
            } else {
              console.log("Image deleted from Cloudinary:", result);
            }
          });
          await cloudinary.v2.uploader.destroy(thirdId, (error, result) => {
            if (error) {
              console.log("Error deleting image from Cloudinary:", error);
            } else {
              console.log("Image deleted from Cloudinary:", result);
            }
          });
          return new Response("successfully deleted fitting", {status: 200});
    } catch (error){
        return new Response("failed to delete fitting", {status: 500});
    }
}