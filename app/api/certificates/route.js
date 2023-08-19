import { connectToDB } from "@/utils/database";
import certificates from "@/models/certificates";
export const GET = async (req) => {
    try{
        await connectToDB();
        const fetchedCertificates = await certificates.find({});
        return new Response(JSON.stringify(fetchedCertificates), {status: 200});

    } catch (error){
        return new Response("failed to fetch certificates", {status: 500});
    }
}