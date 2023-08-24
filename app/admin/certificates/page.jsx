"use client";
import { useEffect, useState, useRef } from "react";
import "@/public/styles/certCarousel.css";
import { useSession } from "next-auth/react";
import "@/app/globals.css";
import Link from "next/link";


const page = () => {
    const { data: session } = useSession();
    const [fetched, setFetched] = useState(false);
    const [certs, setCerts] = useState([]);
    const [adding, setAdding] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const carouselRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const fetchCerts = async () => {
          try {
            const res = await fetch("/api/certificates");
            const data = await res.json();
            setCerts(data);
          } catch (error) {
            console.log(error);
          } finally {
            setFetched(true);
          }
        };
        fetchCerts();
      }, []);
      async function handleSubmit(e){
        e.preventDefault();
        setAdding(true);
        const form = e.currentTarget;

    // first one
    const fileInput = Array.from(form.elements).find(
      ({ name }) => name === "cert"
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
    const certId = form.elements.certId.value;
      
      sendToBackEnd(imageName, imageUrl, publicId, imageAlt, certId);
      
    }
    async function sendToBackEnd(imageName, imageUrl, publicId, imageAlt, certId){
        try{
            await fetch("/api/certificates/new", {
                method: "POST",
                body: JSON.stringify({
                    imageName,
                    imageUrl,
                    publicId,
                    imageAlt,
                    certId,
                }),
            }).then((r) => r.json());
        } catch (error){
            console.log(error);
        } finally{
            console.log("finally added cert images");
            window.location.reload();
        }
    }
    const handleDelete = async (id, publicId) => {
        try{
            await fetch(`/api/certificates/delete/${id}`, {
                method: "DELETE",
                body: JSON.stringify({
                    publicId,
                }),
            });
        } catch (error){
            console.log(error);
        } finally{
            console.log("finally deleted the certificate image");
           window.location.reload();
           setDeleting(false);
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
        <section className="container px-12 mt-5">
            <div className="flex justify-start items-center">
              <Link className="text-[#1A3DA7]" href="/admin/certificates/text">
              დაამატე მთავარი გვერდის ტექსტი
              </Link>
            </div>
          </section>
          <section className="container mx-auto mt-12">
                <div className="flex justify-center items-center">
                    <form
                    id="addForm"
                    onSubmit={handleSubmit}
                    className="flex flex-col justify-center items-start space-y-6"
                    >
                        <label>დაამატე ფოტო</label>
                        <input type="file" id="cert" name="cert" />
                        <label>დაამატე ფოტოს ალტი</label>
                        <input type="text" id="imageAlt" name="imageAlt" />
                        <label>დაამატე id</label>
                        <input type="text" id="certId" name="certId" placeholder="მთავარი --- გვერდის"/>
                        <button type="submit" className="bg-black border-black border-[1px] border-solid rounded px-4 py-2 text-white">
                            {adding === true ? "პროცესშია..." : "დაამატე"}
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
              {certs.map((cert, index) => (
                <div key={index} className="carousel-item relative flex flex-col justify-center items-center space-y-2">
                <img className="w-[288px] h-[367px]" src={cert.imageUrl} alt={cert.imageAlt} />
                <span>{cert.imageAlt}</span>
                <button onClick={() => handleDelete(cert._id, cert.publicId)} className="px-4 py-2 absolute top-0 right-0 border-black border-solid border-[1px] rounded bg-black text-red-600">
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
    ): (
        null
    )}
    </>
  )
}

export default page
