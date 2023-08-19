import { connectToDB } from "@/utils/database";
import blogpagetexts from "@/models/blogpagetexts";

export const GET = async (req, {params}) => {
    const id = params.id;
    try{
        await connectToDB();
        const fetchedText = await blogpagetexts.find({id: id}).limit(1);
        return new Response(JSON.stringify(fetchedText), {status: 200});
    } catch (error) {
        return new Response("failed to fetch specific blog page text", {status: 500});
    }
}