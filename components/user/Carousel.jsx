"use client";
import { useEffect, useState, useRef } from "react";
import "@/public/styles/certCarousel.css";
import Link from "next/link";
import { useLanguage } from "@/utils/languageContext";
const Carousel = () => {
    const [products, setProducts] = useState([]);
    const carouselRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const {selectedLanguage} = useLanguage();
    useEffect(() => {
        const fetchProducts = async () => {
          const response = await fetch("/api/products");
          const data = await response.json();
          setProducts(data);
        };
        fetchProducts();
      }, []);
    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
      };
    
      const handleNext = () => {
        const lastIndex = products.length - 1;
        setCurrentIndex((prevIndex) => (prevIndex < lastIndex ? prevIndex + 1 : lastIndex));
      };
  return (
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
     <div className="carousel-wrapper flex space-x-4" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
       {products.map((product, index) => (
      
       <div key={index} className="carousel-item flex flex-col justify-center items-center">
            <Link href={product.productLink}>
            <img src={product.imageUrl} alt={product.imageAlt} className="rounded w-[232px] h-[232px] lg:w-[332px] lg:h-[332px]" />
            <span>
              {selectedLanguage === "GEO" && `${product.productName}`}
              {selectedLanguage === "ENG" && `${product.productNameEng}`}
              {selectedLanguage === "RUS" && `${product.productNameRus}`}
            </span>
            </Link>
        </div>
        
       ))}
     </div>
   </div>
   </>
  )
}

export default Carousel
