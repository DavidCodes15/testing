import { connectToDB } from "@/utils/database";
import blogs from "@/models/blogs";

export const GET = async (req, {params}) => {
    const page = params.page;
    const perPage = 9;
    const skip = (page - 1) * perPage;
    try{
        await connectToDB();
        const fetchedBlogs = await blogs.find({}).skip(skip).limit(perPage);
        return new Response(JSON.stringify(fetchedBlogs), {status: 200});

    } catch (error){
        return new Response("failed to fetch blogs per page", {status: 500});
    }
}