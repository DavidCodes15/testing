import { connectToDB } from "@/utils/database";
import blogtexts from "@/models/blogtexts";

export const DELETE = async (req, {params}) => {
    try{
        await connectToDB();
        await blogtexts.findByIdAndRemove(params.id);
        return new Response("successfully deleted blog texts", {status: 200});
    } catch (error){
        return new Response("failed to delete blog texts", {status: 500});
    }
}