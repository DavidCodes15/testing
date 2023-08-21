"use client";
import { useEffect, useState, useRef } from "react";
import "@/public/styles/certCarousel.css";
import { useSession } from "next-auth/react";
import "@/app/globals.css";
import Link from "next/link";

const page = () => {
  const { data: session } = useSession();
  const [fetched, setFetched] = useState(false);
  const [fittings, setFittings] = useState([]);
  const [adding, setAdding] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const fetchFittings = async () => {
      try {
        const res = await fetch("/api/fittings/all");
        const data = await res.json();
        setFittings(data);
      } catch (error) {
        console.log(error);
      } finally {
        setFetched(true);
      }
    };
    fetchFittings();
  }, []);
  async function handleSubmit(e) {
    e.preventDefault();
    setAdding(true);
    const form = e.currentTarget;
    const fileInput = Array.from(form.elements).find(
      ({ name }) => name === "fitting"
    );
    const formData = new FormData();
    for (const file of fileInput.files) {
      formData.append("file", file);
    }
    formData.append("upload_preset", process.env.NEXT_PUBLIC_UPLOAD_PRESET);
    const data = await fetch(
      "https://api.cloudinary.com/v1_1/dvp84pcrp/image/upload",
      {
        method: "POST",
        body: formData,
      }
    ).then((r) => r.json());
    // second one
    const firstFileInput = Array.from(form.elements).find(
      ({ name }) => name === "firstCarouselImage"
    );
    const firstFormData = new FormData();
    for (const file of firstFileInput.files) {
      firstFormData.append("file", file);
    }
    firstFormData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_UPLOAD_PRESET
    );
    const firstData = await fetch(
      "https://api.cloudinary.com/v1_1/dvp84pcrp/image/upload",
      {
        method: "POST",
        body: firstFormData,
      }
    ).then((r) => r.json());
    // third one

    const secondFileInput = Array.from(form.elements).find(
      ({ name }) => name === "secondCarouselImage"
    );
    const secondFormData = new FormData();
    for (const file of secondFileInput.files) {
      secondFormData.append("file", file);
    }
    secondFormData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_UPLOAD_PRESET
    );
    const secondData = await fetch(
      "https://api.cloudinary.com/v1_1/dvp84pcrp/image/upload",
      {
        method: "POST",
        body: secondFormData,
      }
    ).then((r) => r.json());

    // fourth one

    const thirdFileInput = Array.from(form.elements).find(
      ({ name }) => name === "thirdCarouselImage"
    );
    const thirdFormData = new FormData();
    for (const file of thirdFileInput.files) {
      thirdFormData.append("file", file);
    }
    thirdFormData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_UPLOAD_PRESET
    );
    const thirdData = await fetch(
      "https://api.cloudinary.com/v1_1/dvp84pcrp/image/upload",
      {
        method: "POST",
        body: thirdFormData,
      }
    ).then((r) => r.json());

    const imageName = data.original_filename;
    const imageUrl = data.secure_url;
    const publicId = data.public_id;
    const firstCarouselImageName = firstData.original_filename;
    const firstCarouselImageUrl = firstData.secure_url;
    const firstCarouselPublicId = firstData.public_id;
    const secondCarouselImageName = secondData.original_filename;
    const secondCarouselImageUrl = secondData.secure_url;
    const secondCarouselPublicId = secondData.public_id;
    const thirdCarouselImageName = thirdData.original_filename;
    const thirdCarouselImageUrl = thirdData.secure_url;
    const thirdCarouselPublicId = thirdData.public_id;

    const imageAlt = form.elements.imageAlt.value;
    const firstCarouselImageAlt = form.elements.firstCarouselImageAlt.value;
    const secondCarouselImageAlt = form.elements.secondCarouselImageAlt.value;
    const thirdCarouselImageAlt = form.elements.thirdCarouselImageAlt.value;

    const fittingId = form.elements.fittingId.value;
    const fittingName = form.elements.fittingName.value;
    const fittingNameEng = form.elements.fittingNameEng.value;
    const fittingNameRus = form.elements.fittingNameRus.value;
    console.log(imageUrl, publicId);
    console.log(imageAlt,firstCarouselImageAlt, secondCarouselImageAlt, thirdCarouselImageAlt);
      console.log(fittingName, fittingNameEng, fittingNameRus);
      console.log(fittingId);

    sendToBackEnd(
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
      fittingNameRus
    );
  }
  async function sendToBackEnd(
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
    fittingNameRus
  ) {
    try {
      await fetch("/api/fittings/new", {
        method: "POST",
        body: JSON.stringify({
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
          fittingNameRus
      }),
      });
    } catch (error) {
      console.log(error);
    } finally {
      window.location.reload();
    }
  }
  const handleDelete = async (id, publicId, firstId, secondId, thirdId) => {
    try{
        await fetch(`/api/fittings/delete/${id}`, {
            method: "DELETE",
            body: JSON.stringify({
                publicId,
                firstId,
                secondId,
                thirdId,
            }),
        });
    } catch (error){
        console.log(error);
    } finally{
        console.log("finally deleted");
        window.location.reload();
    }
  }
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const handleNext = () => {
    const lastIndex = blogs.length - 1;
    setCurrentIndex((prevIndex) =>
      prevIndex < lastIndex ? prevIndex + 1 : lastIndex
    );
  };
  return (
    <>
      {session?.user ? (
        <>
          <section className="container mx-auto mt-[50px]">
            <div className="flex justify-center items-center">
              <form
                id="addForm"
                onSubmit={handleSubmit}
                className="flex flex-col justify-center items-start space-y-6"
              >
                <label>დაამატე ფოტო</label>
                <input type="file" name="fitting" id="fitting" />
                <label>დაამატე ფოტოს ალტი</label>
                <input type="text" name="imageAlt" id="imageAlt" />
                <span>
                  სურვილისამებრ დაამატეთ pop upში ჩასასმელი მაქსიმუმ სამი ფოტო
                </span>

                <label>დაამატე ფოტო</label>
                <input
                  type="file"
                  name="firstCarouselImage"
                  id="firstCarouselImage"
                />
                <label>დაამატე ფოტოს ალტი</label>
                <input
                  type="text"
                  name="firstCarouselImageAlt"
                  id="secondCarouselImageAlt"
                />

                <label>დაამატე ფოტო</label>
                <input
                  type="file"
                  name="secondCarouselImage"
                  id="secondCarouselImage"
                />
                <label>დაამატე ფოტოს ალტი</label>
                <input
                  type="text"
                  name="secondCarouselImageAlt"
                  id="secondCarouselImageAlt"
                />

                <label>დაამატე ფოტო</label>
                <input
                  type="file"
                  name="thirdCarouselImage"
                  id="thirdCarouselImage"
                />
                <label>დაამატე ფოტოს ალტი</label>
                <input
                  type="text"
                  name="thirdCarouselImageAlt"
                  id="thirdCarouselImageAlt"
                />

                <label>დაამატე id</label>
                <input
                  type="text"
                  id="fittingId"
                  name="fittingId"
                  placeholder="main -- გოფრირებული მილებისთვის"
                />
                <span>ქართულად</span>
                <label>დაამატე ფიტინგის სახელი</label>
                <input type="text" id="fittingName" name="fittingName" />
                <span>ინგლისურად</span>
                <label>დაამატე ფიტინგის სახელი</label>
                <input type="text" id="fittingNameEng" name="fittingNameEng" />
                <span>რუსულად</span>
                <label>დაამატე ფიტინგის სახელი</label>
                <input type="text" id="fittingNameRus" name="fittingNameRus" />
                <button
                  type="submit"
                  className="border-[1px] border-solid border-black bg-black text-white rounded px-4 py-2"
                >
                  {adding === true ? "პროცესშია" : "დაამატე"}
                </button>
              </form>
            </div>
          </section>
          {fetched === true ? (
          <section>
          <div className="flex justify-end items-center space-x-2 px-12 mt-24">
            <button className="carousel-control" onClick={handlePrevious}>
              <img src="/assets/icons/left-arrow.png" alt="left arrow" />
            </button>
            <button className="carousel-control" onClick={handleNext}>
              <img src="/assets/icons/right-arrow.png" alt="right arrow" />
            </button>
          </div>

          <div className="carousel-container mt-5 px-4" ref={carouselRef}>
            <div
              className="carousel-wrapper flex space-x-4"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {fittings.map((fitting, index) => (
                <div key={index} className="carousel-item relative flex flex-col justify-center items-center space-y-2">
                <img className="w-[288px] h-[300px]" src={fitting.imageUrl} alt={fitting.imageAlt} />
                <span>{fitting.fittingName}</span>
                <button onClick={() => handleDelete(fitting._id, fitting.publicId, fitting.firstCarouselPublicId, fitting.secondCarouselPublicId, fitting.thirdCarouselPublicId)} className="px-4 py-2 absolute top-0 right-0 border-black border-solid border-[1px] rounded bg-black text-red-600">
                    {deleting === true ? "იშლება" : "წაშალე"}
                </button>
              </div>
              ))}
            </div>
          </div>
        </section>
        ): (
          null
        )}
        </>
      ) : null}
    </>
  );
};

export default page;
