"use client";
import React, { useState, useEffect } from "react";
import "@/app/globals.css";
import MobilePagination from "./MobilePagination";
const ImageSlider = () => {
  const [heros, setHeros] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [preloadedImages, setPreloadedImages] = useState([]);
  useEffect(() => {
    const fetchHero = async () => {
      const response = await fetch("/api/heroImages");
      const data = await response.json();
      setHeros(data);

      preloadImages(data);
    };
    fetchHero();
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setActiveIndex((prevIndex) => (prevIndex + 1) % heros.length);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, activeIndex, heros]);

  const preloadImages = (images) => {
    // Create a new Image object for each image and set its src
    const imagePromises = images.map((hero) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = hero.imageUrl;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    // Wait for all images to be preloaded before setting them in state
    Promise.all(imagePromises)
      .then(() => {
        setPreloadedImages(images.map((hero) => hero.imageUrl));
      })
      .catch((error) => {
        console.error("Error preloading images:", error);
      });
  };

  const handlePaginationClick = (index) => {
    setActiveIndex(index);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };
  const handlePaginationHover = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
    <div
            className="main w-full relative mt-[80px]"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex slider-wrapper">
              {heros.map((hero, index) => (
                <div
                  key={index}
                  className={`slide ${
                    index === activeIndex ? "visible" : "hidden"
                  }`}
                >
                  <img
                    src={hero.imageUrl}
                    alt={`Slide ${index + 1}`}
                    className={`img ${
                      index === activeIndex ? "visible" : "hidden"
                    }`}
                  />
                </div>
              ))}
            </div>
            <div className="mob-pagination">
                <MobilePagination 
                activeIndex={activeIndex}
                handlePaginationClick={handlePaginationClick}
                handlePaginationHover={handlePaginationHover}
                />
            </div>
            <div className="w-screen pagination">
              <span
                className={`dot ${activeIndex === 0 ? "active" : ""}`}
                onClick={() => handlePaginationClick(0)}
                onMouseEnter={() => handlePaginationHover(0)}
              >
                გოფრირებული მილები
              </span>
              <span
                className={`dot ${activeIndex === 1 ? "active" : ""}`}
                onClick={() => handlePaginationClick(1)}
                onMouseEnter={() => handlePaginationHover(1)}
              >
                პოლიეთილენის მილები
              </span>
              <span
                className={`dot ${activeIndex === 2 ? "active" : ""}`}
                onClick={() => handlePaginationClick(2)}
                onMouseEnter={() => handlePaginationHover(2)}
              >
                პოლიპროპილენის მილები
              </span>
              <span
                className={`dot ${activeIndex === 3 ? "active" : ""}`}
                onClick={() => handlePaginationClick(3)}
                onMouseEnter={() => handlePaginationHover(3)}
              >
                ფიტინგები
              </span>
            </div>
          </div>
    </>
  )
};

export default ImageSlider;
