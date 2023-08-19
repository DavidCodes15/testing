"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import "@/app/globals.css";
const MainBlogCarousel = () => {
  const [blogs, setBlogs] = useState([]);
  const [fetched, setFetched] = useState(false);
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blogs/main/carousel");
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.log(error);
      } finally {
        setFetched(true);
      }
    };
    fetchBlogs();
  }, []);
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
              {blogs.map((blog, index) => (
                <div
                  key={index}
                  className="carousel-item flex flex-col justify-center items-center"
                >
                <div className="relative">
                  <img
                    src={blog.blogImageUrl}
                    alt={blog.blogImageAlt}
                    className="rounded fix-carousel-image"
                  />
                     <Link href={`/blogs/${blog.blogTitle}`}>
                  <button className="fix-carousel-button border-white border-solid border-[1px] rounded-full bg-transparent hover:bg-[#1A3DA7] text-white text-lg px-4 py-2 absolute top-[40%] left-[30%]">ვრცლად</button>
                  </Link>
                  </div>
                  <span className="fix-carousel-text">{blog.blogTitle}</span>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default MainBlogCarousel;
