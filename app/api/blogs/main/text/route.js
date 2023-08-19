import { connectToDB } from "@/utils/database";
import blogtexts from "@/models/blogtexts";

export const GET = async (req) => {
    try{
        await connectToDB();
        const fetchedTexts = await blogtexts.find({});
        return new Response(JSON.stringify(fetchedTexts), {status: 200});
    } catch (error){
        return new Response("failed to fetch blog texts", {status: 500});
    }
}