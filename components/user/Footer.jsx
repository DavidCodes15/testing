"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useLanguage } from "@/utils/languageContext";
const Footer = () => {
  const {selectedLanguage} = useLanguage();
  const {data: session} = useSession();
  return (
    <>
    {session?.user ? (
        null
    ): (
      <footer className="block z-0 mt-24 bg-transparent lg:bg-[#ECF5FF] full-bleed">
      <div className="container mx-auto w-full px-[1px] flex flex-col items-center justify-center space-y-6 lg:hidden">
          <div className="w-full flex justify-between items-center bg-[#ECF5FF] rounded-full py-2 px-2">
            <span>info@.geopipe.ge</span>
            <img src="/assets/icons/Group.png" alt="company email"/>
          </div>
          <div className="w-full flex justify-between items-center bg-[#ECF5FF] rounded-full py-2 px-2">
          <span>+995 551 03 03 03</span>
            <img src="/assets/icons/phone.png" alt="company phone number"/>
          </div>
          <div className="w-full flex justify-between items-center bg-[#ECF5FF] rounded-full py-2 px-2">
          <span className="text-sm">12 ქიზიყის ქუჩა, თბილისი, საქართველო</span>
            <img src="/assets/icons/location.png" alt="company location"/>
          </div>
      </div>
      <div className="hidden lg:block">
      <div className="flex justify-between items-center foot-md px-24 py-12">
        <div>
          <img className="w-[445px] h-[65px]" src="/assets/icons/logo.svg" alt="company logo"/>
        </div>
        <nav className="flex justify-center items-start space-x-12">
          <ul className="flex flex-col justify-center items-start space-y-4">
            <li className="font-bold">
              <Link href="/about">
              ჩვენს შესახებ
              </Link>
          
            </li>
            <li>
              <Link href="/">
              პროდუქცია
              </Link>
             
              </li>
            <li>
              <Link href="/certificates">
              სერტიფიკატები
              </Link>
             
              </li>
            <li>
              <Link href="/blogs">
              ბლოგი
              </Link>
             

            </li>
          
          </ul>
          <ul className="flex flex-col justify-center items-start space-y-6">
            <li className="font-bold">
              <Link href="/contact">
              დაგვიკავშირდით
              </Link>
                
            </li>
            <li className="flex flex-col space-y-4 justify-center items-start">
              <span className="flex space-x-4 items-center">
                <img src="/assets/icons/phone.png" alt="company phone number"/>
                <span>+995 551 03 03 03</span>
              </span>
              <span className="flex space-x-4 items-center">
                <img src="/assets/icons/Group.png" alt="company email"/>
                <span>info@geopipe.ge</span>
              </span>
              <span className="flex space-x-4 items-center">
                <img src="/assets/icons/location.png" alt="company location"/>
                <span>
                  {selectedLanguage === "GEO" && "ქ.თბილისი, ქიზიყის ქ. N42"}
                  {selectedLanguage === "ENG" && "N42 Kiziki, 0182 Tbilisi, Georgia"}
                  {selectedLanguage === "RUS" && "N42 Кизики, 0182 Тбилиси, Грузия"}
                </span>
              </span>
            </li>
          </ul>
        </nav>
      </div>
        <div className="border-t-[1px] border-gray border-solid flex justify-center items-center space-x-6 py-4">
          <hr className="bg-gray h-[2px]"/>
          <span>©</span>
          <span className="text-md">geopipe.ge</span>
          <span className="text-md">ყველა უფლება დაცულია</span>
        </div>
      </div>
  </footer>
    )}
    </>
  )
}

export default Footer
