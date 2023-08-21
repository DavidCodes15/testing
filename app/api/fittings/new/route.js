import fittings from "@/models/fittings";
import { connectToDB } from "@/utils/database";

export const POST = async (req) => {
  try {
    await connectToDB();
    const {
      imageName,
      imageUrl,
      publicId,
      imageAlt,
      firstCarouselImageName,
      firstCarouselImageUrl,
      firstCarouselPublicId,
      firstCarouselImageAlt,
      secondCarouselImageName,
      secondCarouselImageUrl,
      secondCarouselPublicId,
      secondCarouselImageAlt,
      thirdCarouselImageName,
      thirdCarouselImageUrl,
      thirdCarouselPublicId,
      thirdCarouselImageAlt,
      fittingId,
      fittingName,
      fittingNameEng,
      fittingNameRus,
    } = await req.json();
    const newFitting = new fittings({
      imageName,
      imageUrl,
      publicId,
      imageAlt,
      firstCarouselImageName,
      firstCarouselImageUrl,
      firstCarouselPublicId,
      firstCarouselImageAlt,
      secondCarouselImageName,
      secondCarouselImageUrl,
      secondCarouselPublicId,
      secondCarouselImageAlt,
      thirdCarouselImageName,
      thirdCarouselImageUrl,
      thirdCarouselPublicId,
      thirdCarouselImageAlt,
      fittingId,
      fittingName,
      fittingNameEng,
      fittingNameRus,
    });
    await newFitting.save();
    return new Response(JSON.stringify(newFitting), {status: 200});
  } catch (error) {
    return new Response("failed to add new fitting", { status: 500 });
  }
};
