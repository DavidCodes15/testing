import { connectToDB } from "@/utils/database";
import aboutus from "@/models/aboutus";

export const DELETE = async (req, {params}) => {
  try {
    await connectToDB();
    await aboutus.findByIdAndRemove(params.id);
    return new Response("successfully deleted the text", {status: 200});

  } catch (error) {
    return new Response("failed to delete about us text", { status: 500 });
  }
};
