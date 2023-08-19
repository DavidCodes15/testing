"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import MainBlogCarousel from "./MainBlogCarousel";
const MainBlogComponent = () => {
  const [blogs, setBlogs] = useState([]);
  const [texts, setTexts] = useState([]);
  const [fetched, setFetched] = useState(false);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blogs/main");
        const data = await res.json();
        setBlogs(data);
        const textRes = await fetch("/api/blogs/main/text");
        const textData = await textRes.json();
        setTexts(textData);
        setFetched(true);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBlogs();
  }, []);
  return (
    <>
      {fetched === true ? (
        <>
          <div className="visible lg:hidden">
            <MainBlogCarousel />
          </div>
          <div className="hidden lg:flex justify-center items-center space-x-6 mt-[120px]">
            <div className="flex flex-col items-center justify-center space-y-32 border-r-[1px] border-black border-solid pr-10">
              <h2 className="font-bold text-2xl">ბოლო სიახლე</h2>
              {texts.map((text, index) => (
                <p key={index} className="max-w-xs text-[16px]">
                  {text.leftMessage}
                </p>
              ))}
              <Link href="/blogs">
                <button className="bg-[#1A3DA7] text-white text-base  rounded-xl px-4 py-4">
                  მეტის ნახვა
                </button>
              </Link>
            </div>
            <div className="flex flex-col items-center space-y-8 pl-10">
              <div className="flex justify-start items-center space-x-4">
                <div className="relative">
                  <img src={blogs[0].blogImageUrl} alt={blogs[0].blogImageAlt} />
                  <Link href={`/blogs/${blogs[0].blogTitle}`}>
                  <button className="border-white border-solid border-[1px] rounded-full bg-transparent hover:bg-[#1A3DA7] text-white text-lg px-4 py-2 absolute top-[40%] left-[30%]">ვრცლად</button>
                  </Link>
                </div>
                <div className="flex flex-col space-y-8 justify-center">
                  <h2 className="font-bold text-xl">{blogs[0].blogTitle}</h2>
                  {texts.map((text, index) => (
                    <p key={index} className="max-w-[441px]">
                        {text.blogMessage}
                  </p>
                  ))}
                  <div className="flex space-x-4 justify-start items-center">
                      <div>
                        <span>{blogs[0].blogDate}</span>
                      </div>
                      <div className="flex space-x-4 items-center bg-[#ECF5FF] px-2 py-2 rounded-full">
                      <img className="w-[15px] h-[15px]" src="/assets/icons/eye.png" alt="views"/>
                          <span>{blogs[0].views} ნახვა</span>
                      </div>
                      
                  </div>
                </div>
              </div>
              <div className="flex justify-end items-center space-x-4 pl-24">
                <div className="flex flex-col space-y-8 text-right">
                <h2 className="font-bold text-xl">{blogs[1].blogTitle}</h2>
                  {texts.map((text, index) => (
                     <p key={index} className="max-w-[441px]">
                     {text.secondBlogMessage}
                   </p>
                  ) )}
                  <div className="flex space-x-4 justify-end items-center">
                      <div>
                        <span>{blogs[1].blogDate}</span>
                      </div>
                      <div className="flex space-x-4 items-center bg-[#ECF5FF] px-2 py-2 rounded-full">
                      <img className="w-[15px] h-[15px]" src="/assets/icons/eye.png" alt="views"/>
                          <span>{blogs[1].views} ნახვა</span>
                      </div>
                      
                  </div>
                </div>
                <div className="relative">
                <img src={blogs[1].blogImageUrl} alt={blogs[1].blogImageAlt} />
                <Link href={`/blogs/${blogs[1].blogTitle}`}>
                  <button onClick={() => handleSpecificBlog(blogs[1].blogTitle)} className="absolute z-1 top-[40%] left-[30%] border-white border-solid border-[1px] rounded-full bg-transparent hover:bg-[#1A3DA7] text-white text-lg px-4 py-2">ვრცლად</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default MainBlogComponent;
