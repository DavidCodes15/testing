"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import MainBlogCarousel from "./MainBlogCarousel";
import { useLanguage } from "@/utils/languageContext";
const MainBlogComponent = () => {
  const [blogs, setBlogs] = useState([]);
  const [texts, setTexts] = useState([]);
  const [fetched, setFetched] = useState(false);
  const {selectedLanguage}  = useLanguage();
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
          <div className="hidden lg:flex justify-center items-center space-x-6 mt-[120px] px-4">
            <div className="flex flex-col items-center justify-center space-y-32 border-r-[1px] border-black border-solid pr-10">
              <h2 className="font-bold text-2xl">
              {selectedLanguage === "GEO" && "ბოლო სიახლე"}
              {selectedLanguage === "ENG" && "Last News"}
              {selectedLanguage === "RUS" && "Последние новости"}
              </h2>
              {texts.map((text, index) => (
                <p key={index} className="max-w-xs text-[16px]">
                  {selectedLanguage === "GEO" && `${text.leftMessage}`}
                  {selectedLanguage === "ENG" && `${text.leftMessageEng}`}
                  {selectedLanguage === "RUS" && `${text.leftMessageRus}`}
                </p>
              ))}
              <Link href="/blogs">
                <button className="bg-[#1A3DA7] text-white text-base  rounded-xl px-4 py-4">
                {selectedLanguage === "GEO" && "მეტის ნახვა"}
                  {selectedLanguage === "ENG" && "View More"}
                  {selectedLanguage === "RUS" && "просмотры"}
                </button>
              </Link>
            </div>
            <div className="flex flex-col items-center space-y-8 pl-10">
              <div className="flex justify-start items-center space-x-4">
                <div className="relative">
                  <img src={blogs[0].blogImageUrl} alt={blogs[0].blogImageAlt} />
                  <Link href={`/blogs/${blogs[0].blogTitle}`}>
                  <button className="border-white border-solid border-[1px] rounded-full bg-transparent hover:bg-[#1A3DA7] text-white text-lg px-4 py-2 absolute top-[40%] left-[30%]">
                  {selectedLanguage === "GEO" && "ვრცლად"}
                    {selectedLanguage === "ENG" && "In Detail"}
                    {selectedLanguage === "RUS" && "В деталях"}
                  </button>
                  </Link>
                </div>
                <div className="flex flex-col space-y-8 justify-center">
                  <h2 className="font-bold text-xl">
                  {selectedLanguage === "GEO" && `${blogs[0].blogTitle}`}
                    {selectedLanguage === "ENG" && `${blogs[0].blogTitleEng}`}
                    {selectedLanguage === "RUS" && `${blogs[0].blogTitleRus}`}
                  </h2>
                  {texts.map((text, index) => (
                    <p key={index} className="max-w-[441px]">
                  {selectedLanguage === "GEO" && `${text.blogMessage}`}
                  {selectedLanguage === "ENG" && `${text.blogMessageEng}`}
                  {selectedLanguage === "RUS" && `${text.blogMessageRus}`}
                  </p>
                  ))}
                  <div className="flex space-x-4 justify-start items-center">
                      <div>
                        <span>
                        {selectedLanguage === "GEO" && `${blogs[0].blogDate}`}
                      {selectedLanguage === "ENG" && `${blogs[0].blogDateEng}`}
                        {selectedLanguage === "RUS" && `${blogs[0].blogDateRus}`}
                        </span>
                      </div>
                      <div className="flex space-x-4 items-center bg-[#ECF5FF] px-2 py-2 rounded-full">
                      <img className="w-[15px] h-[15px]" src="/assets/icons/eye.png" alt="views"/>
                          <span>{blogs[0].views}  {selectedLanguage === "GEO" && "ნახვა"} {selectedLanguage === "ENG" && "views"} {selectedLanguage === "RUS" && "просмотры"}</span>
                      </div>
                      
                  </div>
                </div>
              </div>
              <div className="flex justify-end items-center space-x-4 pl-24">
                <div className="flex flex-col space-y-8 text-right">
                <h2 className="font-bold text-xl">
                {selectedLanguage === "GEO" && `${blogs[1].blogTitle}`}
                    {selectedLanguage === "ENG" && `${blogs[1].blogTitleEng}`}
                    {selectedLanguage === "RUS" && `${blogs[1].blogTitleRus}`}
                </h2>
                  {texts.map((text, index) => (
                     <p key={index} className="max-w-[441px]">
                  {selectedLanguage === "GEO" && `${text.secondBlogMessage}`}
                  {selectedLanguage === "ENG" && `${text.secondBlogMessageEng}`}
                  {selectedLanguage === "RUS" && `${text.secondBlogMessageRus}`}
                   </p>
                  ) )}
                  <div className="flex space-x-4 justify-end items-center">
                      <div>
                        <span>
                        {selectedLanguage === "GEO" && `${blogs[1].blogDate}`}
                    {selectedLanguage === "ENG" && `${blogs[1].blogDateEng}`}
                    {selectedLanguage === "RUS" && `${blogs[1].blogDateRus}`}
                        </span>
                      </div>
                      <div className="flex space-x-4 items-center bg-[#ECF5FF] px-2 py-2 rounded-full">
                      <img className="w-[15px] h-[15px]" src="/assets/icons/eye.png" alt="views"/>
                          <span>{blogs[1].views} {selectedLanguage === "GEO" && "ნახვა"} {selectedLanguage === "ENG" && "views"} {selectedLanguage === "RUS" && "просмотры"}</span>
                      </div>
                      
                  </div>
                </div>
                <div className="relative">
                <img src={blogs[1].blogImageUrl} alt={blogs[1].blogImageAlt} />
                <Link href={`/blogs/${blogs[1].blogTitle}`}>
                  <button onClick={() => handleSpecificBlog(blogs[1].blogTitle)} className="absolute z-1 top-[40%] left-[30%] border-white border-solid border-[1px] rounded-full bg-transparent hover:bg-[#1A3DA7] text-white text-lg px-4 py-2">
                  {selectedLanguage === "GEO" && "ვრცლად"}
                    {selectedLanguage === "ENG" && "In Detail"}
                    {selectedLanguage === "RUS" && "В деталях"}
                  </button>
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
