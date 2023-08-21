"use client";
import { useEffect, useState, useRef } from "react";
import "@/public/styles/certCarousel.css";
import { useSession } from "next-auth/react";
import "@/app/globals.css";
const page = () => {
  const { data: session } = useSession();
  const [fetched, setFetched] = useState(false);
  const [products, setProducts] = useState([]);
  const [adding, setAdding] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const [deleting, setDeleting] = useState(false);
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setFetched(true);
      }
    };
    fetchProducts();
  }, []);
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const handleNext = () => {
    const lastIndex = products.length - 1;
    setCurrentIndex((prevIndex) =>
      prevIndex < lastIndex ? prevIndex + 1 : lastIndex
    );
  };
  async function handleSubmit(e) {
    e.preventDefault();
    setAdding(true);
    const form = e.currentTarget;
    const fileInput = Array.from(form.elements).find(
        ({ name }) => name === "product"
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
      const imageName = data.original_filename;
      const imageUrl = data.secure_url;
      const publicId = data.public_id;
      const imageAlt = form.elements.imageAlt.value;
      const productName = form.elements.nameGeo.value;
      const productNameEng = form.elements.nameEng.value;
      const productNameRus = form.elements.nameRus.value;
      const productId = form.elements.productId.value;
      const productLink = form.elements.productLink.value;
      setImageSrc(imageUrl);
      try{
        const heroUpload = await fetch("/api/products/new", {
            method: "POST",
            body: JSON.stringify({
                imageName,
                imageUrl,
                publicId,
                imageAlt,
                productName,
                productNameEng,
                productNameRus,
                productId,
                productLink,
            }),
        }).then((r) => r.json());
        if(heroUpload.ok){
            console.log("uploaded");
        }
    } catch (error) {
        console.log(error);
    } finally{
       window.location.reload();
    }
  }
  const handleDelete = async (id, publicId) => {
    try {
      setDeleting(true);
      await fetch(`/api/products/delete/${id}`, {
        method: "DELETE",
        body: JSON.stringify({
          publicId,
        }),
      });
    } catch (error) {
      console.log(error);
    } finally {
      console.log("finally deleted");
      window.location.reload();
    }
  };
  return (
    <>
      {session?.user ? (
        <>
          <section className="container mx-auto">
            <div className="flex justify-center items-center">
              <form
                id="addForm"
                onSubmit={handleSubmit}
                className="flex flex-col justify-center items-start space-y-6"
              >
                <label htmlFor="product">დაამატე პროდუქტის ფოტო</label>
                <input
                  type="file"
                  id="product"
                  name="product"
                  className="bg-black text-white px-4 py-2 rounded-xl"
                />
                {imageSrc === "" ? null : (
                  <img src={imageSrc} className="w-[300px] h-[200px]" />
                )}
                <label htmlFor="imageAlt">დაამატე ფოტოს ალტი</label>
                <input type="text" id="imageAlt" name="imageAlt" />
                <label htmlFor="nameGeo">
                  დაამატე პროდუქტის სახელი ქართულად
                </label>
                <input type="text" id="nameGeo" name="nameGeo" />
                <label htmlFor="nameEng">
                  დაამატე პროდუქტის სახელი ინგლისურად
                </label>
                <input type="text" id="nameEng" name="nameEng" />
                <label htmlFor="nameRus">
                  დაამატე პროდუქტის სახელი რუსულად
                </label>
                <input type="text" id="nameRus" name="nameRus" />
                <label htmlFor="productId">დაამატე პროდუქტის id</label>
                <input
                  type="text"
                  id="productId"
                  name="productId"
                  placeholder="PN6"
                />
                <label htmlFor="productLink">დაამატე პროდუქტის ლინკი</label>
                <input
                  type="text"
                  id="productLink"
                  name="productLink"
                  placeholder="/products/fittings"
                />
                <button
                  type="submit"
                  className="border-black border-solid border-[1px] rounded bg-black text-white px-4 py-2"
                >
                  {adding === true ? "პროცესშია..." : "დაამატე"}
                </button>
              </form>
            </div>
          </section>
          {fetched === true ? (
            <>
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
                  {products.map((product, index) => (
                    <div
                      key={index}
                      className="relative carousel-item flex flex-col justify-center items-center"
                    >
                      <img
                        src={product.imageUrl}
                        alt={product.imageAlt}
                        className="rounded w-[232px] h-[232px] lg:w-[332px] lg:h-[332px]"
                      />
                      <button
                        onClick={() =>
                          handleDelete(product._id, product.publicId)
                        }
                        className={`absolute top-4 right-4 border-black border-solid border-[1px] px-4 py-2 rounded ${
                          deleting === true
                            ? "bg-red-600 text-black"
                            : "bg-black text-red-600"
                        }`}
                      >
                        წაშალე
                      </button>
                      <span>{product.productName}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : null}
        </>
      ) : null}
    </>
  );
};

export default page;
