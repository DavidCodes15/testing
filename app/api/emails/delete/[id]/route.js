import { connectToDB } from "@/utils/database";
import { emails } from "@/models/emails";

export const DELETE = async (req, {params}) => {
    const id = params.id;
    try{
        await connectToDB();
        await emails.findByIdAndRemove(id);
        return new Response("successfully deleted email", {status: 200});
    } catch (error){
        return new Response("failed to dellete email", {status: 500});
    }
}