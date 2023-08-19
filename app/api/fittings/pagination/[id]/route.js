import { connectToDB } from "@/utils/database";
import fittings from "@/models/fittings";

export const GET = async (req, {params}) => {
    const id = params.id
    try{
        await connectToDB();
        const fetchedCount = await fittings.countDocuments({fittingId: id});
        return new Response(JSON.stringify(fetchedCount), {status: 200});
    } catch (error) {
        return new Response("failed to count fittings documents by id", {status: 500});
    }
}