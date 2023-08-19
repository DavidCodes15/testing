import { connectToDB } from "@/utils/database";
import blogs from "@/models/blogs";
export const GET = async (req) => {
    try{
        await connectToDB();
        const fetchedMainBlogs = await blogs.find({}).sort({createdAt: -1}).limit(2);
        return new Response(JSON.stringify(fetchedMainBlogs), {status: 200});
    } catch (error) {
        return new Response("failed to fetch blogs", {status: 500});
    }
}