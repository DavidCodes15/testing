import { connectToDB } from "@/utils/database";
import blogpagetexts from "@/models/blogpagetexts";

export const POST = async (req) => {
    const {
        processedBlogText,
        processedBlogTextEng,
        processedBlogTextRus,
        secondProcessedBlogText,
        secondProcessedBlogTextEng,
        secondProcessedBlogTextRus,
        blogImagePublicId,
      } = await req.json();
      console.log(processedBlogText, processedBlogTextEng, processedBlogTextRus, blogImagePublicId);
    try{
        await connectToDB();
        const newBlogText = await blogpagetexts({
            processedBlogText,
            processedBlogTextEng,
            processedBlogTextRus,
            secondProcessedBlogText,
            secondProcessedBlogTextEng,
            secondProcessedBlogTextRus,
            blogImagePublicId,
        });
        await newBlogText.save();
        return new Response(JSON.stringify(newBlogText), {status: 200});

    } catch (error){
        return new Response("errror occured", { status: 500 });
    }
}