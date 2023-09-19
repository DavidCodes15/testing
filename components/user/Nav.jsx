"use client";
import "@/app/globals.css";
import { useLanguage } from "@/utils/languageContext";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
const Nav = () => {
  const { data: session } = useSession();
  const { selectedLanguage, setSelectedLanguage } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isArrowRotated, setIsArrowRotated] = useState(false);
  const [accordion, setAccordion] = useState(false);
  const [isProductDropdownVisible, setIsProductDropdownVisible] =
    useState(true);
  const [isClicked, setIsClicked] = useState(0);

  const items = [
    { imageUrl: "/assets/icons/geo.png", name: "GEO" },
    { imageUrl: "/assets/icons/eng.png", name: "ENG" },
    { imageUrl: "/assets/icons/rus.png", name: "RUS" },
  ];
  const closeMenu = () => {
    setIsMenuVisible(false);
    document.body.classList.remove("no-scroll");
    const menuElement = document.querySelector(".menu-content");
    if (menuElement) {
      menuElement.style.top = "0";
    }
  };
  const handleMenu = () => {
    setIsMenuVisible(true);
    document.body.classList.add("no-scroll");
    const currentScrollPosition = window.scrollY;

    const menuElement = document.querySelector(".menu-content");
    if (menuElement) {
      menuElement.style.top = `${currentScrollPosition}px`;
    }
  };
  const handleItemClick = (item) => {
    // setSelectedItem(item);
    setSelectedLanguage(item.name);
    setIsVisible(false);
    setIsArrowRotated(false);
    // Dispatch a custom event when the language changes
    const event = new CustomEvent("languageChange", { detail: item.name });
    window.dispatchEvent(event);
  };
  const handleLinkClick = (index) => {
    setIsClicked(index);
  };

  const handleAccordion = () => {
    if (accordion === false) {
      setAccordion(true);
    } else {
      setAccordion(false);
    }
  };

  return (
    <>
      {session?.user ? (
        <div className="bg-[#ECF5FF] w-full">
          <header className="container mx-auto py-0 px-0 lg:py-6 lg:px-10">
            <nav className="flex justify-center items-center">
              <ul className="text-[16px] flex justify-center items-center space-x-12">
                <li>
                  <Link href="/admin/mails">მეილები</Link>
                </li>
                <li>
                  <Link href="/admin/hero">მთავარი</Link>
                </li>
                <li>
                  <Link href="/admin/production">პროდუქცია</Link>
                </li>
                <li>
                  <Link href="/admin/blogs">ბლოგი</Link>
                </li>
                <li>
                  <Link href="/admin/certificates">სერთიფიკატები</Link>
                </li>
                <li>
                  <Link href="/admin/about">ჩვენს შესახებ</Link>
                </li>
                <li>
                  <Link href="/admin/fittings">ფიტინგები</Link>
                </li>
              </ul>
            </nav>
          </header>
        </div>
      ) : (
        <>
          <div className="bg-[#ECF5FF] fixed top-0 w-full z-10">
            <header className=" container mx-auto py-0 px-0 lg:py-6 lg:px-10">
              <nav
                id="navigation"
                className="hidden lg:flex justify-between items-center relative"
              >
                <ul className="text-[16px] fix-resolution flex justify-around space-x-12 items-center">
                  <li>
                    <Link href="/">
                      <img
                        className="fix-image"
                        src="/assets/icons/logo.svg"
                        alt="company logo"
                      />
                    </Link>
                  </li>
                  <li className={`cursor-pointer`}>
                    <Link href="/">
                      {selectedLanguage === "GEO" && "მთავარი"}
                      {selectedLanguage === "ENG" && "Home"}
                      {selectedLanguage === "RUS" && "Главная"}
                    </Link>
                  </li>
                  <li className={`cursor-pointer`}>
                    <Link href="/about">
                      {selectedLanguage === "GEO" && "ჩვენს შესახებ"}
                      {selectedLanguage === "ENG" && "About Us"}
                      {selectedLanguage === "RUS" && "О нас"}
                    </Link>
                  </li>
                  <li
                    onMouseEnter={() => setIsProductDropdownVisible(true)}
                    onMouseLeave={() => setIsProductDropdownVisible(false)}
                  >
                    <span className="cursor-pointer">
                      {selectedLanguage === "GEO" && "პროდუქცია"}
                      {selectedLanguage === "ENG" && "Products"}
                      {selectedLanguage === "RUS" && "Продукция"}
                    </span>
                    {isProductDropdownVisible ? (
                      <div className="product-dropdown">
                        <ul className="flex justify-center items-start space-x-24 px-10 py-10">
                          <li className="flex flex-col space-y-4">
                            <span className="flex justify-center items-start space-x-2">
                              <span>
                                <img
                                  src="/assets/icons/Settings.png"
                                  alt="product list image"
                                />
                              </span>
                              <span className="max-w-[300px]">
                                <Link
                                  className={`cursor-pointer`}
                                  href="/products/DrainageAndSewage/pipes/corrugated"
                                >
                                  {selectedLanguage === "GEO" &&
                                    "სანიაღვრე და საკანალიზაციო გოფრირებული მილები"}
                                  {selectedLanguage === "ENG" &&
                                    "Drainage and sewage corrugated pipes"}
                                  {selectedLanguage === "RUS" &&
                                    "Дренажные и канализационные гофрированные трубы"}
                                </Link>
                              </span>
                            </span>
                            <span className="flex justify-center items-start space-x-2">
                              <span>
                                <img
                                  src="/assets/icons/Settings.png"
                                  alt="product list image"
                                />
                              </span>
                              <span className="max-w-[300px]">
                                <Link
                                  className={`cursor-pointer`}
                                  href="/products/DrainageAndSewage/pipes/corrugated/spiral"
                                >
                                  {selectedLanguage === "GEO" &&
                                    "სანიაღვრე და საკანალიზაციო სპირალური გოფრირებული მილები"}
                                  {selectedLanguage === "ENG" &&
                                    "Drainage and sewage spiral corrugated pipes"}
                                  {selectedLanguage === "RUS" &&
                                    "Дренажные и канализационные спирально-гофрированные трубы"}
                                </Link>
                              </span>
                            </span>
                            <span className="flex justify-center items-start space-x-2">
                              <span>
                                <img
                                  src="/assets/icons/Settings.png"
                                  alt="product list image"
                                />
                              </span>
                              <span className="max-w-[300px]">
                                <Link
                                  className={`cursor-pointer`}
                                  href="/products/polyethylene/waterAndGas"
                                >
                                  {selectedLanguage === "GEO" &&
                                    "პოლიეთილენის სასმელი წყლის და გაზის მილები"}
                                  {selectedLanguage === "ENG" &&
                                    "Polyethylene drinking water and gas pipes"}
                                  {selectedLanguage === "RUS" &&
                                    "Полиэтиленовые трубы для питьевой воды и газа"}
                                </Link>
                              </span>
                            </span>
                          </li>
                          <li className="flex flex-col space-y-4">
                            <span className="flex justify-center items-start space-x-2">
                              <span>
                                <img
                                  src="/assets/icons/Settings.png"
                                  alt="product list image"
                                />
                              </span>
                              <span className="max-w-[250px]">
                                <Link
                                  className={`cursor-pointer`}
                                  href="/products/Polypropylene/sewage/pipes"
                                >
                        {selectedLanguage === "GEO" &&
                          "პოლიპროპილენის საკანალიზაციო (PPR) მილები"}
                        {selectedLanguage === "ENG" &&
                          "Polypropylene sewage (PPR) pipes"}
                        {selectedLanguage === "RUS" &&
                          "Полипропиленовые (ППР) канализационные трубы"}
                                </Link>
                              </span>
                            </span>
                            <span className="flex justify-center items-start space-x-2">
                              <span>
                                <img
                                  src="/assets/icons/Settings.png"
                                  alt="product list image"
                                />
                              </span>
                              <span className="max-w-[250px]">
                                <Link
                                  className={`cursor-pointer`}
                                  href="/products/Polypropylene/hotAndCold"
                                >
                                  {selectedLanguage === "GEO" &&
                                    "პოლიპროპილენის ცივი და ცხელი წყლის (PPR) მილები"}
                                  {selectedLanguage === "ENG" &&
                                    "Polypropylene cold and hot water (PPR) pipes"}
                                  {selectedLanguage === "RUS" &&
                                    "Полипропиленовые (ППР) трубы Для холодной и горячей воды"}
                                </Link>
                              </span>
                            </span>
                            <span className="flex justify-start items-start space-x-2">
                              <span>
                                <img
                                  className="fix-icon"
                                  src="/assets/icons/Settings.png"
                                  alt="product list image"
                                />
                              </span>
                              <span className="max-w-[250px]">
                                <Link
                                  className={`cursor-pointer`}
                                  href="/products/Cable/corrugated-pipes"
                                >
                                  {selectedLanguage === "GEO" &&
                                    "საკაბელო გოფრირებული მილები"}
                                  {selectedLanguage === "ENG" &&
                                    "Cable corrugated pipes"}
                                  {selectedLanguage === "RUS" &&
                                    "Кабельные гофрированные трубы"}
                                </Link>
                              </span>
                            </span>
                          </li>
                          <li className="flex justify-center items-center space-x-2">
                            <span>
                              <img
                                src="/assets/icons/Settings.png"
                                alt="product list image"
                              />
                            </span>
                            <span>
                              <Link
                                className={`cursor-pointer`}
                                href="/products/fittings"
                              >
                                {selectedLanguage === "GEO" && "ფიტინგები"}
                                {selectedLanguage === "ENG" && "Fittings"}
                                {selectedLanguage === "RUS" && "арматура"}
                              </Link>
                            </span>
                          </li>
                        </ul>
                      </div>
                    ) : null}
                  </li>
                  <li className="cursor-pointer">
                    <Link className={`cursor-pointer`} href="/certificates">
                      {selectedLanguage === "GEO" && "სერთიფიკატები"}
                      {selectedLanguage === "ENG" && "Certificates"}
                      {selectedLanguage === "RUS" && "Сертификаты"}
                    </Link>
                  </li>
                  <li className="cursor-pointer">
                    <Link className={`cursor-pointer`} href="/blogs">
                      {/* {selectedItem.name === "GEO" && "ბლოგი"}
            {selectedItem.name === "ENG" && "blog"}
            {selectedItem.name === "RUS" && "блог"} */}
                      {selectedLanguage === "GEO" && "ბლოგი"}
                      {selectedLanguage === "ENG" && "Blogs"}
                      {selectedLanguage === "RUS" && "Блоги"}
                    </Link>
                  </li>
                  <li className="cursor-pointer">
                    <Link href="/contact">
                      {selectedLanguage === "GEO" && "კონტაქტი"}
                      {selectedLanguage === "ENG" && "Contact"}
                      {selectedLanguage === "RUS" && "Контакты"}
                    </Link>
                  </li>
                </ul>
                <ul className="flex flex-col justify-center items-center space-y-4">
                  <li className="flex justify-center items-center space-x-4">
                    {selectedLanguage && (
                      <span className="flex justify-center items-center space-x-4">
                        <span>
                          {/* <img src={selectedItem.imageUrl} alt={selectedItem.name} /> */}
                          <img
                            src={`/assets/icons/${selectedLanguage.toLowerCase()}.png`}
                            alt={selectedLanguage}
                          />
                        </span>
                        <span>{selectedLanguage}</span>
                      </span>
                    )}
                    {/* <span>
                    <img 
                     className="cursor-pointer" src="/assets/icons/header.png" />
                    </span> */}
                    <span>
                      {/* Update the arrow rotation based on isArrowRotated state */}
                      <img
                        onClick={() => {
                          setIsVisible((prev) => !prev);
                          setIsArrowRotated((prev) => !prev);
                        }}
                        className={`cursor-pointer ${
                          isArrowRotated ? "rotate-180" : ""
                        }`} // Add the 'rotate-90' class conditionally
                        src="/assets/icons/header.png"
                      />
                    </span>
                  </li>
                  {isVisible && (
                    // <div className="bg-white flex flex-col space-y-6 justify-center items-center px-4 py-2 rounded-xl">
                    <div className="language-dropdown flex flex-col space-y-4 justify-center items-center px-5 py-2">
                      {items.map((item, index) => (
                        <span
                          key={index}
                          onClick={() => handleItemClick(item)}
                          className="cursor-pointer flex justify-center items-center space-x-4"
                        >
                          <img src={item.imageUrl} alt={item.name} />
                          <span>{item.name}</span>
                        </span>
                      ))}
                    </div>
                  )}
                </ul>
              </nav>
              <nav className="flex justify-start items-center px-5 py-5 lg:hidden">
                <ul className="flex justify-start items-center space-x-4">
                  <li onClick={handleMenu}>
                    <img
                      src="/assets/icons/hamburger.png"
                      alt="hamburger menu icon"
                    />
                  </li>
                  <li>
                    <img src="/assets/icons/logo.svg" alt="company logo" />
                  </li>
                </ul>
              </nav>
            </header>
          </div>
          <div
            className={`${isMenuVisible ? "block" : "hidden"} overlay`}
            style={{
              scrollbarColor: `${
                isMenuVisible
                  ? "var(-webkit-scrollbar-thumb) var(--scrollbar-track-color)"
                  : "auto"
              }`,
            }}
          ></div>
          <div
            className={`${
              isMenuVisible ? "block" : "hidden"
            } menu-content w-full h-full bg-[#DFEEFF] absolute top-0 overflow-y-auto left-0 z-10 rounded-r-[60px]`}
          >
            <ul className="flex flex-col justify-center items-start space-y-4 py-4 px-2 text-[20px]">
              <li className="px-6 border-b-[0.5px] border-solid border-[#ABABAB] py-4 w-[90%]">
                <Link
                  onClick={() => handleLinkClick(0)}
                  className={`${isClicked === 0 ? "text-black font-bold" : ""}`}
                  href="/"
                >
                  {selectedLanguage === "GEO" && "მთავარი"}
                  {selectedLanguage === "ENG" && "Home"}
                  {selectedLanguage === "RUS" && "Главная"}
                </Link>
              </li>
              <li
                onClick={() => handleLinkClick(1)}
                className={`px-6 border-b-[0.5px] border-solid border-[#ABABAB] py-4 w-[90%] ${
                  isClicked === 1 ? "text-black font-bold" : ""
                }`}
              >
                <Link href="/about">
                  {selectedLanguage === "GEO" && "ჩვენს შესახებ"}
                  {selectedLanguage === "ENG" && "About Us"}
                  {selectedLanguage === "RUS" && "О нас"}
                </Link>
              </li>

              <li
                className={`has-submenu px-6 border-b-[0.5px] border-solid border-[#ABABAB] py-4 w-[90%] flex flex-col space-y-6 justify-center items-start`}
              >
                <span className="w-[100%] flex justify-between items-center">
                  <span className="submenu-trigger">
                    {selectedLanguage === "GEO" && "პროდუქცია"}
                    {selectedLanguage === "ENG" && "products"}
                    {selectedLanguage === "RUS" && "производство"}
                  </span>
                  <span
                    onClick={handleAccordion}
                    className="flex justify-end items-center"
                  >
                    <img
                      className={`${accordion === true ? "rotate-180" : ""}`}
                      src="/assets/icons/Hicon.png"
                      alt="accordion arrow"
                    />
                  </span>
                </span>
                {accordion === true ? (
                  <span className="flex flex-col justify-center item-start space-y-4">
                    <span
                      onClick={() => handleLinkClick(3)}
                      className={`${
                        isClicked === 3 ? "text-black font-bold" : ""
                      }`}
                    >
                      <Link
                        className="fix-accordion-text"
                        href="/products/DrainageAndSewage/pipes/corrugated"
                      >
                        {selectedLanguage === "GEO" &&
                          "სანიაღვრე და საკანალიზაციო გოფრირებული მილები"}
                        {selectedLanguage === "ENG" &&
                          "Drainage and sewage corrugated pipes"}
                        {selectedLanguage === "RUS" &&
                          "Дренажные и канализационные гофрированные трубы"}
                      </Link>
                    </span>
                    <span
                      onClick={() => handleLinkClick(4)}
                      className={`${
                        isClicked === 4 ? "text-black font-bold" : ""
                      }`}
                    >
                      <Link
                        className="fix-accordion-text"
                        href="/products/DrainageAndSewage/pipes/corrugated/spiral"
                      >
                        {selectedLanguage === "GEO" &&
                          "სანიაღვრე და საკანალიზაციო სპირალური გოფრირებული მილები"}
                        {selectedLanguage === "ENG" &&
                          "Drainage and sewage spiral corrugated pipes"}
                        {selectedLanguage === "RUS" &&
                          "Дренажные и канализационные спирально-гофрированные трубы"}
                      </Link>
                    </span>
                    <span
                      onClick={() => handleLinkClick(5)}
                      className={`${
                        isClicked === 5 ? "text-black font-bold" : ""
                      }`}
                    >
                      <Link
                        className="fix-accordion-text"
                        href="/products/polyethylene/waterAndGas"
                      >
                        {selectedLanguage === "GEO" &&
                          "პოლიეთილენის სასმელი წყლის და გაზის მილები"}
                        {selectedLanguage === "ENG" &&
                          "Polyethylene drinking water and gas pipes"}
                        {selectedLanguage === "RUS" &&
                          "Полиэтиленовые трубы для питьевой воды и газа"}
                      </Link>
                    </span>
                    <span
                      onClick={() => handleLinkClick(6)}
                      className={`${
                        isClicked === 6 ? "text-black font-bold" : ""
                      }`}
                    >
                      <Link
                        className="fix-accordion-text"
                        href="/products/Polypropylene/sewage/pipes"
                      >
                        {selectedLanguage === "GEO" &&
                          "პოლიპროპილენის საკანალიზაციო (PPR) მილები"}
                        {selectedLanguage === "ENG" &&
                          "Polypropylene sewage (PPR) pipes"}
                        {selectedLanguage === "RUS" &&
                          "Полипропиленовые (ППР) канализационные трубы"}
                      </Link>
                    </span>
                    <span
                      onClick={() => handleLinkClick(7)}
                      className={`${
                        isClicked === 7 ? "text-black font-bold" : ""
                      }`}
                    >
                      <Link
                        className="fix-accordion-text"
                        href="/products/Polypropylene/hotAndCold"
                      >
                        {selectedLanguage === "GEO" &&
                          "პოლიპროპილენის ცივი და ცხელი წყლის (PPR) მილები"}
                        {selectedLanguage === "ENG" &&
                          "Polypropylene cold and hot water (PPR) pipes"}
                        {selectedLanguage === "RUS" &&
                          "Полипропиленовые (ППР) трубы Для холодной и горячей воды"}
                      </Link>
                    </span>
                    <span
                      onClick={() => handleLinkClick(8)}
                      className={`${
                        isClicked === 8 ? "text-black font-bold" : ""
                      }`}
                    >
                      <Link
                        className="fix-accordion-text"
                        href="/products/Cable/corrugated-pipes"
                      >
                        {selectedLanguage === "GEO" &&
                          "საკაბელო გოფრირებული მილები"}
                        {selectedLanguage === "ENG" && "Cable corrugated pipes"}
                        {selectedLanguage === "RUS" &&
                          "Кабельные гофрированные трубы"}
                      </Link>
                    </span>
                    <span
                      onClick={() => handleLinkClick(9)}
                      className={`${
                        isClicked === 9 ? "text-black font-bold" : ""
                      }`}
                    >
                      <Link
                        className="fix-accordion-text"
                        href="/products/fittings"
                      >
                        {selectedLanguage === "GEO" && "ფიტინგები"}
                        {selectedLanguage === "ENG" && "Fittings"}
                        {selectedLanguage === "RUS" && "Фитинги"}
                      </Link>
                    </span>
                  </span>
                ) : null}
              </li>
              <li className="px-6 border-b-[0.5px] border-solid border-[#ABABAB] py-4 w-[90%]">
                <Link
                  onClick={() => handleLinkClick(10)}
                  className={`${
                    isClicked === 10 ? "text-black font-bold" : ""
                  }`}
                  href="/certificates"
                >
                  {selectedLanguage === "GEO" && "სერთიფიკატები"}
                  {selectedLanguage === "ENG" && "certificates"}
                  {selectedLanguage === "RUS" && "сертификаты"}
                </Link>
              </li>
              <li className="px-6 border-b-[0.5px] border-solid border-[#ABABAB] py-4 w-[90%]">
                <Link
                  onClick={() => handleLinkClick(11)}
                  className={`${
                    isClicked === 11 ? "text-black font-bold" : ""
                  }`}
                  href="/blogs"
                >
                      {selectedLanguage === "GEO" && "ბლოგი"}
                      {selectedLanguage === "ENG" && "Blogs"}
                      {selectedLanguage === "RUS" && "Блоги"}
                </Link>
              </li>
              <li className="px-6 border-b-[0.5px] border-solid border-[#ABABAB] py-4 w-[90%]">
                <Link
                  onClick={() => handleLinkClick(12)}
                  className={`${
                    isClicked === 12 ? "text-black font-bold" : ""
                  }`}
                  href="/contact"
                >
                  {selectedLanguage === "GEO" && "კონტაქტი"}
                  {selectedLanguage === "ENG" && "contact"}
                  {selectedLanguage === "RUS" && "Контакт"}
                </Link>
              </li>
            </ul>
            <ul className="flex justify-center items-center space-x-6">
              {items.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleItemClick(item)}
                  className={`flex justify-center items-center space-x-4 ${
                    selectedLanguage === item.name
                      ? "border-[1px] border-[#1A3DA7] border-solid rounded px-2 py-2"
                      : ""
                  }`}
                >
                  <img src={item.imageUrl} alt={item.name} />
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
            <ul className="flex justify-end items-center mt-5">
              <li className="fixed bottom-0 right-0-0" onClick={closeMenu}>
                <img
                  src="/assets/icons/close-hamburger.png"
                  alt="close hamburger menu"
                />
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default Nav;
