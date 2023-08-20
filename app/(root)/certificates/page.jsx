"use client";
import { useEffect, useState, useRef } from "react";
import "@/public/styles/certCarousel.css";
import Popup from "@/components/user/Popup";
const certificatesPage = () => {
    const [texts, setTexts] = useState([]);
    const [certs, setCerts] = useState([]);
    const [opened, setOpened] = useState(false);
    const [image, setImage] = useState([]);
    useEffect(() => {
        const fetchTexts = async () => {
            const res = await fetch("/api/certificates/text");
            const data = await res.json();
            setTexts(data);
        }
        fetchTexts();
        const fetchCerts = async () => {
            const res = await fetch("/api/certificates");
            const data = await res.json();
            setCerts(data);

        }
        fetchCerts();
    }, []);
    const carouselRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handlePrevious = () => {
      setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
    };
  
    const handleNext = () => {
      const lastIndex = certs.length - 1;
      setCurrentIndex((prevIndex) => (prevIndex < lastIndex ? prevIndex + 1 : lastIndex));
    };
    const handleOpen = (imageUrl) => {
      setOpened(true);
      setImage(imageUrl);
    }
  return (
    <>
    <section className="container mt-[150px] px-24">
        <div
          id="navigation"
          className="hidden lg:flex justify-start items-start space-x-2"
        >
          <span className="flex justify-center items-center space-x-4">
            <span>მთავარი</span>
            <img src="/assets/icons/Vector.png" alt="navigation arrow" />
          </span>
          <span className="text-[#1A3DA7]">სერტიფიკატები</span>
        </div>
      </section>
    <section className="container mx-auto flex justify-center items-center mt-12 px-4">
        <div className="flex flex-col justify-center items-center space-y-4">
            <h1 className="font-bold text-xl lg:text-2xl">
                სერთიფიკატები
            </h1>
            {texts.map((text, index) => (
              <p key={index} className="max-w-[687px] text-lg text-center">
                {text.firstCertText}
              </p>
            ))}
        </div>
    </section>
    <section className="mt-24">
    

     <div className="flex justify-end items-center space-x-4 px-12 ">
        <button className="carousel-control" onClick={handlePrevious}>
          <img src="/assets/icons/left-arrow.png" />
        </button>
        <button className="carousel-control" onClick={handleNext}>
          <img src="/assets/icons/right-arrow.png" />
        </button>
      </div>

    <div className="carousel-container mt-5" ref={carouselRef}>
      <div className="carousel-wrapper flex space-x-4" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {certs.map((cert, index) => (
          <div key={index} className="carousel-item relative flex flex-col justify-center items-center space-y-2">
            <img className="w-[288px] h-[367px]" src={cert.imageUrl} alt={cert.imageAlt} />
            <button
                  onClick={() => handleOpen(cert.imageUrl)}
                  className="border-white border-solid border-[1px] rounded-3xl bg-transparent hover:bg-[#1A3DA7] text-white text-lg px-12 py-2 absolute top-[40%] left-[30%]"
                >
                  <img className="w-[36px] h-[36px]" src="/assets/icons/zoom-in.png" alt="zoom in"/>
                </button>
            <span>{cert.imageAlt}</span>
          </div>
        ))}
      </div>
    </div>
    </section>
    <section className="container mx-auto flex justify-center items-center px-4">
          {texts.map((text, index) => (
            <p key={index} className="max-w-[1000px] flex justify-center items-center text-center">
              {text.secondCertText}
            </p>
          ))}
    </section>
    <Popup trigger={opened} setTrigger={setOpened}>
            <div className="flex justify-center items-center py-12 px-4">
              <img className="w-[280px] h-[300px]" src={image} alt="certificate pop up image"/>
            </div>
      </Popup>
    </>
  )
}

export default certificatesPage
