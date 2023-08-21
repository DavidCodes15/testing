import { connectToDB } from "@/utils/database";
import certificateText from "@/models/certificateTexts";

export const POST = async (req) => {
  try {
    await connectToDB();
    const {
      firstCertText,
      secondCertText,
      firstEngCertText,
      secondEngCertText,
      firstRusCertText,
      secondRusCertText,
    } = await req.json();
    const newTexts = new certificateText({
      firstCertText,
      secondCertText,
      firstEngCertText,
      secondEngCertText,
      firstRusCertText,
      secondRusCertText,
    });
    await newTexts.save();
    return new Response(JSON.stringify(newTexts), {status: 200});
  } catch (error) {
    return new Response("failed to add the new text", { status: 500 });
  }
};
