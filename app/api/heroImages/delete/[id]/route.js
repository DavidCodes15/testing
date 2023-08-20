import { connectToDB } from "@/utils/database";
import { heroimages } from "@/models/heroImages";
import cloudinary from "@/utils/cloudinary";

export const DELETE = async (req, {params}) => {
    const id = params.id;
    const {publicId} = req.json();
    try{
        await connectToDB();
        await heroimages.findByIdAndRemove(id);
        await cloudinary.v2.uploader.destroy(publicId, (error, result) => {
            if (error) {
              console.log("Error deleting image from Cloudinary:", error);
            } else {
              console.log("Image deleted from Cloudinary:", result);
            }
          });
          return new Response("successfully deleted hero image", {status: 200});
    
    } catch (error) {
        return new Response("failed to delete hero image", {status: 500});
    }
}