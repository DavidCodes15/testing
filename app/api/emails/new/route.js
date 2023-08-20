import { connectToDB } from "@/utils/database";
import { emails } from "@/models/emails";

export const POST = async (req) => {
    try{
        await connectToDB();
        const {name, phone, email, message} = await req.json();
        const newEmail = new emails({
            name: name,
            phone: phone,
            email: email,
            message: message,
        });
        await newEmail.save();
        return new Response(JSON.stringify(newEmail), {status: 201});
    } catch (error){
        return new Response("failed to add new email", {status: 500});
    }
}