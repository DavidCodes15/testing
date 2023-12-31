"use client";
import { useEffect, useState, useRef } from "react";
import { useLanguage } from "@/utils/languageContext";
import Link from "next/link";
import RelatedBlogs from "@/components/user/RelatedBlogs";
import "@/app/globals.css";
const page = ({ params }) => {
  const blogtitle = params.title;
  const {selectedLanguage} = useLanguage();
  const [specificBlog, setSpecificBlog] = useState([]);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [specificText, setSpecificText] = useState([]);
  const [fetched, setFetched] = useState(false);
  const [textFetched, setTextFetched] = useState(false);
  useEffect(() => {
    fetchSpecific(blogtitle);
  }, []);
  const fetchSpecific = async (title) => {
    try {
      const res = await fetch(`/api/blogs/specific/${title}`);
      const data = await res.json();
      incrementViews(data[0]._id);
      setSpecificBlog(data);
      console.log(data[0].blogTag);
      const relatedRes = await fetch(`/api/blogs/related/${data[0].blogTag}`);
      const relatedData = await relatedRes.json();
      setRelatedBlogs(relatedData);
      fetchText(data[0].blogImagePublicId);
    } catch (error) {
      console.log(error);
    } finally{
        setFetched(true);
    }
  };
  const fetchText = async (id) => {
    try {
      const res = await fetch(`/api/blogs/texts/${id}`);
      const data = await res.json();
      setSpecificText(data);
    } catch (error) {
      console.log(error);
    } finally {
        setTextFetched(true);
    }
  };
  const incrementViews = async (blogId) => {
    try {
      await fetch(`/api/blogs/increment-views/${blogId}`, {
        method: "PUT",
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const handleNext = () => {
    const lastIndex = relatedBlogs.length - 1;
    setCurrentIndex((prevIndex) =>
      prevIndex < lastIndex ? prevIndex + 1 : lastIndex
    );
  };
  return (
    <>
    {fetched ? (
        <>
        <section
        className="hidden lg:block container px-5 mt-[100px]"
        id="header"
      >
        <div className="flex justify-start items-center space-x-4">
          <div className="flex justify-center items-center space-x-2">
            <span>
              <Link href="/">
                {selectedLanguage === "GEO" && "მთავარი"}
                {selectedLanguage === "ENG" && "Home"}
                {selectedLanguage === "RUS" && "Главная"}
              </Link>
            </span>
            <span>
              <img src="/assets/icons/Vector.png" />
            </span>
          </div>
          <div className="flex justify-center items-center space-x-4">
            <Link href="/blogs" className="text-[#1A3DA7]">
              {selectedLanguage === "GEO" && "ბლოგი"}
              {selectedLanguage === "ENG" && "blog"}
              {selectedLanguage === "RUS" && "блог"}
            </Link>
            <span>
            <img src="/assets/icons/Vector.png" />
            </span>
          </div>
          <div>
            {specificBlog.map((specific, index) => (
              <Link key={index}
                href={`/blogs/${specific.blogTitle}`}
                className="text-[#1A3DA7]"
              >
                {selectedLanguage === "GEO" && specific.blogTitle}
                {selectedLanguage === "ENG" && specific.blogTitleEng}
                {selectedLanguage === "RUS" && specific.blogTitleRus}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section id="specificBlog" className="container mx-auto mt-[100px] px-4">
            <div className="flex flex-col justify-center items-start space-y-6">
                <div>
                    <img className="max-h-[400px] w-[1360px]" src={specificBlog[0].blogPageImageUrl} alt={specificBlog[0].blogPageImageAlt} />
                </div>
                <div className="flex flex-col justify-center items-start space-y-6">
                    <h1 className="font-bold text-xl lg:text-2xl">
                        {selectedLanguage === "GEO" && specificBlog[0].blogTitle}
                        {selectedLanguage === "ENG" && specificBlog[0].blogTitleEng}
                        {selectedLanguage === "RUS" && specificBlog[0].blogTitleRus}
                        </h1>
                    {specificText.map((text, index) => (
                            <p
                            className="max-w-[1360px]"
                            key={index}
                            dangerouslySetInnerHTML={{
                              __html: selectedLanguage === "GEO"
                                ? text.blogPageText
                                : selectedLanguage === "ENG"
                                ? text.blogPageTextEng
                                : text.blogPageTextRus
                            }}
                          />
                        ))}
                </div>
                {textFetched ? (
                    <>
                    {specificText[0].secondBlogPageText && (
                    <div className="flex justify-start items-start flex-col space-x-0 space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
                        <div className="w-full lg:w-1/2">

                        {specificText.map((text, index) => (
                            <p
                            key={index}
                            dangerouslySetInnerHTML={{
                              __html: selectedLanguage === "GEO"
                                ? text.secondBlogPageText
                                : selectedLanguage === "ENG"
                                ? text.secondBlogPageTextEng
                                : text.secondBlogPageTextRus
                            }}
                          />
                        ))}
                        </div>
                        <div className="w-full lg:w-1/2">
                            <img className="w-full" src={specificBlog[0].secondBlogPageImageUrl} alt={specificBlog[0].secondBlogPageImageAlt} />
                        </div>
                    </div>
                )}

                    </>
                ): (
                    null
                )}
                <div className="flex justify-start items-center space-x-4">
                    <span>
                        {selectedLanguage === "GEO" && specificBlog[0].blogDate}
                        {selectedLanguage === "ENG" && specificBlog[0].blogDateEng}
                        {selectedLanguage === "RUS" && specificBlog[0].blogDateRus}
                    </span>
                    <span className="flex justify-center items-center space-x-2 rounded-full px-4 py-2 bg-[#ECF5FF]">
                        <img src="/assets/icons/eye.png" alt="watched" />
                        <span>
                        {specificBlog[0].views} {selectedLanguage === "GEO" && "ნახვა"} {selectedLanguage === "ENG" && "views"} {selectedLanguage === "RUS" && "Взгляды"}
                        </span>
                    </span>
                </div>
                <div className="w-full flex justify-start items-center space-x-4">
                    <span className="w-1/6">
                        {selectedLanguage === "GEO" && specificBlog[0].blogTag}
                        {selectedLanguage === "ENG" && specificBlog[0].blogTagEng}
                        {selectedLanguage === "RUS" && specificBlog[0].blogTagRus}
                    </span>
                    <span className="w-full h-[1px] bg-black">

                    </span>
                </div>
            </div>
      </section>
      <section className="mt-10 container mx-auto">
        <h2 className="flex justify-center items-center">
            {selectedLanguage === "GEO" && "მსაგვსი ბლოგები"}
            {selectedLanguage === "ENG" && "Similar Blogs"}
            {selectedLanguage === "RUS" && "Похожие блоги"}
        </h2>
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
              {relatedBlogs
                .filter((blog) => blog.blogImagePublicId !== specificBlog[0].blogImagePublicId)
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
      </section>
        </>
    ): (
        null
    )}
    </>
  );
};

export default page;
