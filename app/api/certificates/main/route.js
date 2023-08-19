import { connectToDB } from "@/utils/database";
import certificates from "@/models/certificates";

export const GET = async (req) => {
    try{
        await connectToDB();
        const id = "მთავარი";
        const fetchedMainCerts = await certificates.find({certId: id}).limit(5);
        return new Response(JSON.stringify(fetchedMainCerts), {status: 200});
    } catch (error) {
        return new Response("failed to fetch main certificates", {status: 500});
    }
}