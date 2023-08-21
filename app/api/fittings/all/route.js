import { connectToDB } from "@/utils/database";
import fittings from "@/models/fittings";

export const GET = async (req) => {
    try{
        await connectToDB();
        const fetchedFittings = await fittings.find({});
        return new Response(JSON.stringify(fetchedFittings), {status: 200});
    } catch (error){
        return new Response("failed to fetch all the fittings", {status: 500});
    }
}