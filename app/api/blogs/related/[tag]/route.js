import { connectToDB } from "@/utils/database";
import blogs from "@/models/blogs";

export const GET = async (req, {params}) => {
    const tag = params.tag;
    const { id } = req.id;
    console.log(tag, id);
    try{
        await connectToDB();
        const fetchedBlogs = await blogs
        .find({
            blogTag: tag, // Exclude the document with matching publicId
        })
        .sort({ createdAt: -1 })
        .limit(12);
        return new Response(JSON.stringify(fetchedBlogs), {status: 200});
    } catch (error) {
        return new Response("failed to fetch related blogs", {status: 500});
    }
}