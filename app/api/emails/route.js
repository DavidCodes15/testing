import { connectToDB } from "@/utils/database";
import emails from "@/models/emails";

export const GET = async (req) => {
    try{ 
        await connectToDB();
        const fetchedEmails = await emails.find({}).sort({createdAt: -1});
        return new Response(JSON.stringify(fetchedEmails), {status: 200});
    } catch (error) {
        return new Response("failed to fetch all emails", {status: 500});
    }
}