"use client";
import { useEffect, useState } from "react";
import { useLanguage } from "@/utils/languageContext";
import "@/public/styles/aboutPage.css"; // Import the CSS file for styling
import Link from "next/link";
import MainBlogComponent from "@/components/user/MainComponent";
const AboutPage = () => {
  const [texts, setTexts] = useState([]);
  const [fetched, setFetched] = useState(false);
  const {selectedLanguage} = useLanguage();
  useEffect(() => {
    const fetchText = async () => {
      try{
        const res = await fetch("/api/about");
        const data = await res.json();
        setTexts(data);
      } catch (error){
        console.log(error);
      } finally {
        setFetched(true);
      }
    }
    fetchText();
  }, []);
  return (
    <>
    {fetched === true ? (
      <>
         <section className="hidden lg:block container px-5 mt-[100px]" id="header">
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
        <Link href="/about" className="text-[#1A3DA7]">
        {selectedLanguage === "GEO" && "ჩვენს შესახებ"}
        {selectedLanguage === "ENG" && "About Us"}
        {selectedLanguage === "RUS" && "о нас"}
          </Link>
        </div>
      </div>
    </section>
    <section>
    <div className="container mx-auto flex flex-col justify-center items-center space-y-8 mt-24 lg:mt-0">
            <div className="flex flex-col justify-center items-center space-y-4">
              <h1 className="font-bold text-2xl">
              {selectedLanguage === "GEO" && "ჩვენს შესახებ"}
                  {selectedLanguage === "ENG" && "About Us"}
                  {selectedLanguage === "RUS" && "о нас"}
              </h1>
              <p className="max-w-[760px] text-center">
                  {selectedLanguage === "GEO" && texts[0].generalText}
                  {selectedLanguage === "ENG" && texts[0].generalEngText}
                  {selectedLanguage === "RUS" && texts[0].generalRusText}
              </p>
            </div>
            <div className="flex flex-col justify-center space-y-12">
           
              <div className="flex justify-center items-center space-x-0 space-y-4 fix-first-about flex-col lg:flex-row lg:space-x-6 lg:space-y-0">
                <img src="/assets/icons/about1.png" alt="first about us" />
                <p className="max-w-[717px] bg-[#ADD1FC] rounded-md px-8 py-12">
                {selectedLanguage === "GEO" && texts[0].firstText}
                  {selectedLanguage === "ENG" && texts[0].firstEngText}
                  {selectedLanguage === "RUS" && texts[0].firstRusText}
                </p>
              </div>
             
            
              <div className="flex justify-center items-center space-x-6 fix-second-about flex-col lg:flex-row lg:space-x-6 lg:space-y-0 lg:justify-center lg:items-center">
                <img src="/assets/icons/about3.png" alt="second about us" />
                <p className="max-w-[717px] bg-[#ADD1FC] rounded-md px-8 py-12">
                {selectedLanguage === "GEO" && texts[0].secondText}
                  {selectedLanguage === "ENG" && texts[0].secondEngText}
                  {selectedLanguage === "RUS" && texts[0].secondRusText}
                </p>
              </div>
           
              
              <div className="flex justify-center items-center space-x-6 flex-col fix-third-about lg:flex-row lg:space-x-6 lg:space-y-0">
                <img src="/assets/icons/about3.png" alt="third about us" />
                <p className="max-w-[717px] bg-[#ADD1FC] rounded-md px-8 py-12">
                {selectedLanguage === "GEO" && texts[0].thirdText}
                  {selectedLanguage === "ENG" && texts[0].thirdEngText}
                  {selectedLanguage === "RUS" && texts[0].thirdRusText}
                </p>
              </div>
              
            </div>
          </div>
    </section>
    <section className="mt-12">
      <MainBlogComponent />
    </section>
      </>
    ): (
      null
    )}
    </>
  );
};

export default AboutPage;
