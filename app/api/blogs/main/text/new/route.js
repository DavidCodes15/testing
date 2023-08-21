import { connectToDB } from "@/utils/database";
import blogtexts from "@/models/blogtexts";

export const POST = async (req) => {
    try{
        await connectToDB();
        const {leftMessage,
            blogMessage,
            secondBlogMessage,
            leftMessageEng,
            blogMessageEng,
            secondBlogMessageEng,
            leftMessageRus,
            blogMessageRus,
            secondBlogMessageRus} = await req.json();
        const newMessage = await blogtexts({
            leftMessage,
      blogMessage,
      secondBlogMessage,
      leftMessageEng,
      blogMessageEng,
      secondBlogMessageEng,
      leftMessageRus,
      blogMessageRus,
      secondBlogMessageRus,
        });
        await newMessage.save();
        return new Response(JSON.stringify(newMessage), {status: 200});
    } catch (error){
        return new Response("failed to add new blog messages", {status: 500});
    }
}