import { connectToDB } from "@/utils/database";
import blogpagetexts from "@/models/blogpagetexts";

export const POST = async (req) => {
  try {
    await connectToDB();
    const {
      processedBlogText,
      processedBlogTextEng,
      processedBlogTextRus,
      secondProcessedBlogText,
      secondProcessedBlogTextEng,
      secondProcessedBlogTextRus,
      blogImagePublicId,
    } = await req.json();
    const newBlogText = await blogpagetexts({
        blogPageText: processedBlogText,
        blogPageTextEng: processedBlogTextEng,
        blogPageTextRus: processedBlogTextRus,
        secondBlogPageText: secondProcessedBlogText,
        secondBlogPageTextEng: secondProcessedBlogTextEng,
        secondBlogPageTextRus: secondProcessedBlogTextRus,
        id: blogImagePublicId,
    });
    await newBlogText.save();
    return new Response(JSON.stringify(newBlogText), {status: 200});
  } catch (error) {
    return new Response("failed to add new blog page text", { status: 500 });
  }
};
