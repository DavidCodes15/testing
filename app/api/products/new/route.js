import { connectToDB } from "@/utils/database";
import products from "@/models/products";

export const POST = async (req) => {
  try {
    await connectToDB();
    const {
      imageName,
      imageUrl,
      publicId,
      imageAlt,
      productName,
      productNameEng,
      productNameRus,
      productId,
      productLink,
    } = await req.json();
    const newProduct = new products({
        imageName: imageName,
        imageUrl: imageUrl,
        publicId: publicId,
        imageAlt: imageAlt,
        productName: productName,
        productNameEng: productNameEng,
        productNameRus: productNameRus,
        productId: productId,
        productLink: productLink,
    });
    await newProduct.save();
    return new Response(JSON.stringify(newProduct), {status: 200});
  } catch (error) {
    return new Response("failed to add new product", { status: 500 });
  }
};
