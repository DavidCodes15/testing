"use client";
import { useEffect, useState, useRef } from "react";
import "@/public/styles/certCarousel.css";
const ProductsCarousel = () => {
    const [products, setProducts] = useState([]);
    const carouselRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        fetchProducts();
    }, []);
    const fetchProducts = async () => {
        try{
            const res = await fetch("/api/products");
            const data = res.json();
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    }
    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
      };
    
      const handleNext = () => {
        const lastIndex = products.length - 1;
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
       {products.map((product, index) => (
         <div key={index} className="carousel-item flex justify-center items-center">
           <img className="w-[288px] h-[367px]" src={product.imageUrl} alt={product.imageAlt} />
         </div>
       ))}
     </div>
   </div>
   </>
  )
}

export default ProductsCarousel
