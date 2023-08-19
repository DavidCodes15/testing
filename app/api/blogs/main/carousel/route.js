import { connectToDB } from "@/utils/database";
import blogs from "@/models/blogs";

export const GET = async (req) => {
    try{
        await connectToDB();
        const fetchedBlogs = await blogs.find({}).sort({createdAt: -1}).limit(5);
        return new Response(JSON.stringify(fetchedBlogs), {status: 200});
    } catch (error) {
        return new Response("failed to fetch newest five blogs for carousel", {status: 500});
    }
}