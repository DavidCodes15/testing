import { connectToDB } from "@/utils/database";
import blogs from "@/models/blogs";

export const GET = async (req, {params}) => {
    const title = params.title;
    try{
        await connectToDB();
        const fetchSpecific = await blogs.find({blogTitle: title}).limit(1);
        return new Response(JSON.stringify(fetchSpecific), {status: 200});
    } catch (error) {
        return new Response("failed to fetch specific blog", {status: 500});
    }
}