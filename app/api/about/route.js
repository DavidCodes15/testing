import { connectToDB } from "@/utils/database";
import aboutus from "@/models/aboutus";
export const GET = async (req) => {
    try{
        await connectToDB();
        const fetchedText = await aboutus.find({});
        return new Response(JSON.stringify(fetchedText), {status: 200});
    } catch (error) {
        return new Response("failed to fetch about page text", {status: 500});
    }
}