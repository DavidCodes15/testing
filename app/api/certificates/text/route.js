import { connectToDB } from "@/utils/database";
import certificateText from "@/models/certificateTexts";

export const GET = async (req) => {
    try{
        await connectToDB();
        const fetchedCertificateTexts = await certificateText.find({});
        return new Response(JSON.stringify(fetchedCertificateTexts), {status: 200});
    } catch (error) {
        return new Response("failed to fetch certificateText", {status: 500});
    }
}
