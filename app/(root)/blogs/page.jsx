"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/utils/languageContext";
import Link from "next/link";
import "@/app/globals.css";
const blogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const { selectedLanguage } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 9;
  const router = useRouter();
  const [totalCount, setTotalCount] = useState(0);
  const totalPages = Math.ceil(totalCount / perPage);
  useEffect(() => {
    fetchCount();
    fetchBlogs(currentPage);
  }, [currentPage]);
  const fetchCount = async () => {
    try {
      const res = await fetch("/api/blogs/count");
      const data = await res.json();
      setTotalCount(data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchBlogs = async (page) => {
    try {
      const res = await fetch(`/api/blogs/${page}`);
      const data = await res.json();
      setBlogs(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSpecificBlogPage = async (title) => {
    router.push(`/blogs/${title}`);
  };
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  const handleNextPage = () => {
    const nextPage = Math.min(currentPage + 1);
    setCurrentPage(nextPage);
  };
  const mobilePageNumbers = [currentPage];

  if (currentPage < totalPages) {
    mobilePageNumbers.push("...");
  }
  const pageNumbers = Array.from(
    { length: Math.min(5, totalPages) },
    (_, i) => i + 1
  );
  return (
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
          <div>
            <Link href="/blogs" className="text-[#1A3DA7]">
              {selectedLanguage === "GEO" && "ბლოგი"}
              {selectedLanguage === "ENG" && "Blogs"}
              {selectedLanguage === "RUS" && "Блоги"}
            </Link>
          </div>
        </div>
      </section>
      <div className="mt-[100px] lg:mt-10 flex justify-center items-center">
        <h1 className="font-bold fix-blog-text">
          {selectedLanguage === "GEO" && "სამშენებლო და სარემონტო ბლოგები"}
          {selectedLanguage === "ENG" && "Construction and renovation blogs"}
          {selectedLanguage === "RUS" && "Блоги о строительстве и ремонте"}
        </h1>
      </div>
      <section className="container mx-auto mt-[60px]">
        <div className="grid-fix">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="border-black border-solid border-[0.8px] rounded-[0.9rem] flex flex-col justify-start space-y-4 py-0"
            >
              <div className="relative">
                <img
                  className="w-[488px] h-[300]"
                  src={blog.blogImageUrl}
                  alt={blog.blogImageAlt}
                />
                <button
                  onClick={() => handleSpecificBlogPage(blog.blogTitle)}
                  className="border-white border-solid border-[1px] rounded-full bg-transparent hover:bg-[#1A3DA7] text-white text-lg px-4 py-2 absolute top-[50%] left-[30%]"
                >
                  {selectedLanguage === "GEO" && "ვრცლად"}
                  {selectedLanguage === "ENG" && "In Detail"}
                  {selectedLanguage === "RUS" && "В деталях"}
                </button>
              </div>

              <div className="flex flex-col justify-end space-y-2 px-2">
                <div>
                  <h3 className="text-base">
                  {selectedLanguage === "GEO" && `${blogs.blogTitle}`}
                    {selectedLanguage === "ENG" && `${blogs.blogTitleEng}`}
                    {selectedLanguage === "RUS" && `${blogs.blogTitleRus}`}
                  </h3>
                </div>
                <div>
                  <span className="text-base">
                  {selectedLanguage === "GEO" && `${blogs.blogTag}`}
                    {selectedLanguage === "ENG" && `${blogs.blogTagEng}`}
                    {selectedLanguage === "RUS" && `${blogs.blogTagRus}`}
                  </span>
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
                      <span>{blogs.views} {selectedLanguage === "GEO" && "ნახვა"} {selectedLanguage === "ENG" && "views"} {selectedLanguage === "RUS" && "просмотры"}</span>
                    </span>
                  </span>
                  <span className="text-base">
                  {selectedLanguage === "GEO" && `${blogs.blogDate}`}
                    {selectedLanguage === "ENG" && `${blogs.blogDateEng}`}
                    {selectedLanguage === "RUS" && `${blogs.blogDateRus}`}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center space-x-6 mt-12">
          <button
            disabled={currentPage === 1}
            onClick={handlePrevPage}
            className={`text-white px-4 py-2 rounded ${
              currentPage === 1 ? "bg-[#C6CACC]" : "bg-[#1A3DA7]"
            }`}
          >
          {selectedLanguage === "GEO" && "წინა"}
          {selectedLanguage === "ENG" && "previous"}
          {selectedLanguage === "RUS" && "предыдущий"}
          </button>
          <div className="flex justify-center items-end space-x-2 lg:hidden">
            {mobilePageNumbers.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  if (typeof item === "number") {
                    setCurrentPage(item);
                  }
                }}
                className={`${
                  item === currentPage
                    ? "bg-[#1A3DA7] text-white"
                    : item === "..."
                    ? "text-gray-600" // Only set the text color for "..."
                    : "bg-[#C6CACC] text-white"
                } px-4 py-2 rounded`}
                style={
                  item === "..."
                    ? { backgroundColor: "transparent", padding: 0 }
                    : {}
                }
              >
                {item}
              </button>
            ))}
          </div>
          <div className="hidden lg:flex justify-center items-center space-x-4">
            {pageNumbers.map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => setCurrentPage(pageNumber)}
                className={`${
                  currentPage === pageNumber
                    ? "bg-[#1A3DA7] text-white"
                    : "bg-[#C6CACC] text-white"
                } px-4 py-2 rounded`}
              >
                {pageNumber}
              </button>
            ))}
          </div>
          <button
            disabled={currentPage === Math.ceil(totalCount / perPage)}
            onClick={handleNextPage}
            className={`px-4 py-2 rounded ${
              currentPage === Math.ceil(totalCount / perPage)
                ? "bg-[#C6CACC] text-white"
                : "bg-[#1A3DA7] text-white"
            }`}
          >
          {selectedLanguage === "GEO" && "შემდეგ"}
          {selectedLanguage === "ENG" && "Next"}
          {selectedLanguage === "RUS" && "Следующий"}
          </button>
        </div>
      </section>
    </>
  );
};

export default blogsPage;
