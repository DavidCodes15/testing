import { connectToDB } from "@/utils/database";
import heroimages from "@/models/heroImages";

export const POST = async (req) => {
    try{
        await connectToDB();
        const {imageName, imageUrl, publicId} = await req.json();
        const newHeroImages = new heroimages({
            imageName: imageName,
            imageUrl: imageUrl,
            publicId: publicId,
        });
        await newHeroImages.save();
        return new Response(JSON.stringify(newHeroImages), {status: 200});
    } catch (error){
        return new Response("failed to add new Images", {status: 500});
    }
}