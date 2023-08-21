import { connectToDB } from "@/utils/database";
import products from "@/models/products";
import cloudinary from "@/utils/cloudinary";

export const DELETE = async (req, {params}) => {
    try{
        await connectToDB();
        const id = params.id;
        const {publicId} = await req.json();
        await products.findByIdAndRemove(id);
        await cloudinary.v2.uploader.destroy(publicId, (error, result) => {
            if (error) {
              console.log("Error deleting image from Cloudinary:", error);
            } else {
              console.log("Image deleted from Cloudinary:", result);
            }
          });
          return new Response("successfully deleted product", {status: 200});
    } catch (error){
        return new Response("failed to delete product", {status: 500});
    }
}