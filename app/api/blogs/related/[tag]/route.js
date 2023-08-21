import { connectToDB } from "@/utils/database";
import blogs from "@/models/blogs";

export const GET = async (req, {params}) => {
    try{
        await connectToDB();
        const fetchedBlogs = await blogs
        .find()
        .sort({ blogTag: params.tag });
        return new Response(JSON.stringify(fetchedBlogs), {status: 200});
    } catch (error) {
        return new Response("failed to fetch related blogs", {status: 500});
    }
}