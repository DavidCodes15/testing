import { connectToDB } from "@/utils/database";
import fittings from "@/models/fittings";

export const POST = async (req, {params}) => {
    const id = params.id;
   const perPage = 20;
   const {page} = await req.json();
   const skip = (page - 1) * perPage;
    try{
        await connectToDB();
        const fetchedFittings = await fittings.find({fittingId: id}).skip(skip).limit(20);
        return new Response(JSON.stringify(fetchedFittings), {status: 200});
    } catch (error){
        return new Response("failed to fetch fittings by id", {status: 500});
    }
}