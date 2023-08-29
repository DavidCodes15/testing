import { connectToDB } from "@/utils/database";
import certificates from "@/models/certificates";

export const POST = async (req) => {
    try{
        await connectToDB();
        const {imageName, imageUrl, publicId, imageAlt, certId, certName, certNameEng, certNameRus} = await req.json();
        const newCerts = new certificates({
            imageName,
            imageUrl,
            publicId,
            imageAlt,
            certId,
            certName,
            certNameEng,
            certNameRus,
        });
        await newCerts.save();
        return new Response(JSON.stringify(newCerts), {status: 200});
    } catch (error){
        return new Response("failed to add new certificate images", {status: 500});
    }
}