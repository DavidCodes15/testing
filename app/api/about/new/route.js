import { connectToDB } from "@/utils/database";
import aboutus from "@/models/aboutus";

export const POST = async (req) => {
  try {
    await connectToDB();
    const {
      generalText,
      firstText,
      secondText,
      thirdText,
      generalEngText,
      firstEngText,
      secondEngText,
      thirdEngText,
      generalRusText,
      firstRusText,
      secondRusText,
      thirdRusText,
    } = await req.json();
    const newText = new aboutus({
      generalText,
      firstText,
      secondText,
      thirdText,
      generalEngText,
      firstEngText,
      secondEngText,
      thirdEngText,
      generalRusText,
      firstRusText,
      secondRusText,
      thirdRusText,
    });
    await newText.save();
    return new Response(JSON.stringify(newText), {status: 200});
  } catch (error) {
    return new Response("Failed to add new about us page text", {
      status: 500,
    });
  }
};
