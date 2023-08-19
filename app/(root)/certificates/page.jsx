"use client";
import { useEffect, useState, useRef } from "react";
import "@/public/styles/certCarousel.css";
const certificatesPage = () => {
    const [texts, setTexts] = useState([]);
    const [certs, setCerts] = useState([]);
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

  return (
    <>
     <div className="flex justify-end items-center space-x-4 px-12 ">
        <button className="carousel-control" onClick={handlePrevious}>
          Prev
        </button>
        <button className="carousel-control" onClick={handleNext}>
          Next
        </button>
      </div>

    <div className="carousel-container mt-5" ref={carouselRef}>
      <div className="carousel-wrapper flex space-x-0" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {certs.map((cert, index) => (
          <div key={index} className="carousel-item flex justify-center items-center">
            <img className="w-[288px] h-[367px]" src={cert.imageUrl} alt={cert.imageAlt} />
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default certificatesPage
