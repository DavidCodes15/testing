import { connectToDB } from "@/utils/database";
import certificateText from "@/models/certificateTexts";

export const DELETE = async (req, {params}) => {
    try{
        await connectToDB();
        await certificateText.findByIdAndRemove(params.id);
        return new Response("successfully deleted the certificate text", {status: 200});
    } catch (error){
        return new Response("failed to delete the text", {status: 500});
    }
}