import { connectToDB } from "@/utils/database";
import blogs from "@/models/blogs";

export const POST = async (req) => {
    try{
        await connectToDB();
        const { blogImageName,
            blogImageUrl,
            blogImagePublicId,
            blogImageAlt,
            blogTitle,
            blogTag,
            blogDate,
            blogTitleEng,
            blogTagEng,
            blogDateEng,
            blogTitleRus,
            blogTagRus,
            blogDateRus,
            blogPageImageName,
            blogPageImageUrl,
            blogPageImagePublicId,
            blogPageImageAlt,
            secondBlogPageImageName,
            secondBlogPageImageUrl,
            secondBlogPageImagePublicId,
            secondBlogPageImageAlt,} = await req.json();
            const newBlog = await blogs({
                blogImageName,
                blogImageUrl,
                blogImagePublicId,
                blogImageAlt,
                blogTitle,
                blogTag,
                blogDate,
                blogTitleEng,
                blogTagEng,
                blogDateEng,
                blogTitleRus,
                blogTagRus,
                blogDateRus,
                blogPageImageName,
                blogPageImageUrl,
                blogPageImagePublicId,
                blogPageImageAlt,
                secondBlogPageImageName,
                secondBlogPageImageUrl,
                secondBlogPageImagePublicId,
                secondBlogPageImageAlt,
            });
            await newBlog.save();
            return new Response(JSON.stringify(newBlog), {status: 200});
    } catch (error){
        return new Response("failed to add new blog", {status: 500});
    }
}