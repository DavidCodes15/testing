import { connectToDB } from "@/utils/database";
import blogs from "@/models/blogs";

export const GET = async (req) => {
    try{
        await connectToDB();
        const fetchedCount = await blogs.countDocuments();
        return new Response(JSON.stringify(fetchedCount), {status: 200});
    } catch (error){
        return new Response("failed to count documents", {status: 500});
    }
}