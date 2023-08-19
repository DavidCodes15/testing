"use client";
import { useEffect, useState } from "react";
import { useLanguage } from "@/utils/languageContext";
import Link from "next/link";
import RelatedBlogs from "@/components/user/RelatedBlogs";
import "@/app/globals.css";
const page = ({ params }) => {
  const blogtitle = params.title;
  const {selectedLanguage} = useLanguage();
  const [specificBlog, setSpecificBlog] = useState([]);
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
                    <img className="max-w-[1360px]" src={specificBlog[0].blogPageImageUrl} alt={specificBlog[0].blogPageImageAlt} />
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
        <RelatedBlogs id={specificBlog[0].blogImagePublicId} tag={specificBlog[0].blogTag} />
      </section>
        </>
    ): (
        null
    )}
    </>
  );
};

export default page;
