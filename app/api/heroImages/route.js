import { connectToDB } from "@/utils/database";
import heroimages from "@/models/heroImages";

export const GET = async (req) => {
    try{
        await connectToDB();
        const fetchedHeroImages = await heroimages.find({});
        return new Response(JSON.stringify(fetchedHeroImages), {status: 200});
    } catch (error) {
        return new Response("failed to get hero images", {status: 500});
    }
}