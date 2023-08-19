import { connectToDB } from "@/utils/database";
import products from "@/models/products";

export const GET = async (req) => {
    try{
        await connectToDB();
        const fetchedProducts = await products.find({}).sort({createdAt: -1});
        return new Response(JSON.stringify(fetchedProducts), {status: 200});
    } catch (error) {
        return new Response("failed to fetch products", {status: 500});
    }
}