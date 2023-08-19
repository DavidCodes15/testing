import { connectToDB } from "@/utils/database";
import blogs from "@/models/blogs";

export const PUT = async (req, { params }) => {
  const blogId = params.blogId;

  try {
    await connectToDB();
    const updatedBlog = await blogs.findByIdAndUpdate(
      blogId,
      { $inc: { views: 1 } }, // Increment views by 1
      { new: true } // Return the updated document
    );

    return new Response(JSON.stringify(updatedBlog), { status: 200 });
  } catch (error) {
    return new Response("Failed to increment views", { status: 500 });
  }
};