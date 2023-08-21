"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
const RelatedBlogs = ({ tag, id }) => {
  const [blogs, setBlogs] = useState([]);
  const [fetched, setFetched] = useState(false);
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const blogTag = tag;
  
  useEffect(() => {
    console.log(blogTag);
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`/api/blogs/related/${blogTag}`);
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
              {/* {blogs.map((blog, index) => (
            
              ))} */}
              {blogs
                .filter((blog) => blog.blogImagePublicId !== id)
                .map((blog, index) => (
                  <div
                    key={index}
                    className="carousel-item flex flex-col justify-center items-start border-[1px] border-black border-solid rounded-lg"
                  >
                    <div className="relative">
                      <img
                        src={blog.blogImageUrl}
                        alt={blog.blogImageAlt}
                        className="rounded w-[303px] h-[179px] lg:w-[404px] lg:h-[279px]"
                      />
                      <Link href={`/blogs/${blog.blogTitle}`}>
                        <button className="border-white border-solid border-[1px] rounded-full bg-transparent hover:bg-[#1A3DA7] text-white text-lg px-4 py-2 absolute top-[50%] left-[30%]">
                          ვრცლად
                        </button>
                      </Link>
                    </div>
                    <div className="w-full flex flex-col justify-end space-y-2 px-2">
                      <div>
                        <h3 className="text-base">{blog.blogTitle}</h3>
                      </div>
                      <div>
                        <span className="text-base">{blog.blogTag}</span>
                      </div>
                      <div className="flex justify-between mb-6">
                        <span className="text-base flex justify-center items-center space-x-2">
                          <span className="text-sm lg:text-base flex justify-center items-center space-x-2">
                            <span>
                              <img
                                className="w-[15px] h-[15px]"
                                src="/assets/icons/eye.png"
                                alt="views"
                              />
                            </span>
                            <span>{blog.views} ნახვა</span>
                          </span>
                        </span>
                        <span className="text-base">{blog.blogDate}</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default RelatedBlogs;
