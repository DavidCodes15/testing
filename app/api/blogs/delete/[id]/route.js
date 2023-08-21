import { connectToDB } from "@/utils/database";
import blogpagetexts from "@/models/blogpagetexts";
import blogs from "@/models/blogs";
import cloudinary from "@/utils/cloudinary";

export const DELETE = async (req, {params}) => {
    try{
        const {publicId, secondPublicId, thirdPublicId} = await req.json();
        await connectToDB();
        await blogs.findByIdAndRemove(params.id);
        await blogpagetexts.findOneAndRemove({id: publicId});
        await cloudinary.v2.uploader.destroy(publicId, (error, result) => {
            if (error) {
              console.log("Error deleting image from Cloudinary:", error);
            } else {
              console.log("Image deleted from Cloudinary:", result);
            }
          });
          await cloudinary.v2.uploader.destroy(secondPublicId, (error, result) => {
            if (error) {
              console.log("Error deleting image from Cloudinary:", error);
            } else {
              console.log("Image deleted from Cloudinary:", result);
            }
          });
          await cloudinary.v2.uploader.destroy(thirdPublicId, (error, result) => {
            if (error) {
              console.log("Error deleting image from Cloudinary:", error);
            } else {
              console.log("Image deleted from Cloudinary:", result);
            }
          });
          return new Response("successfully deleted the blog", {status: 200});
    } catch (error){
        return new Response("failed to delete the blog", {status: 500});
    }
}