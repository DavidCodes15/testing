import { connectToDB } from "@/utils/database";
import cloudinary from "@/utils/cloudinary";
import certificates from "@/models/certificates";


export const DELETE = async (req, {params}) => {
    try{
        await connectToDB();
        await certificates.findByIdAndRemove(params.id);
        const {publicId} = await req.json();
        await cloudinary.v2.uploader.destroy(publicId, (error, result) => {
            if (error) {
              console.log("Error deleting image from Cloudinary:", error);
            } else {
              console.log("Image deleted from Cloudinary:", result);
            }
          });
        return new Response("successfully deleted the certificate image", {status: 200});
    } catch (error){
        return new Response("failed to delete the certificate image", {status: 500});
    }
}