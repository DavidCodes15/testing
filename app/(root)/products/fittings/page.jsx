"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/utils/languageContext";
import "@/app/globals.css";
const fittingsPage = () => {
  const { selectedLanguage } = useLanguage();
  const [fittings, setFittings] = useState([]);
  const [id, setId] = useState("გოფრირებული მილებისთვის");
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 20;
  const [totalCount, setTotalCount] = useState(0);
  const [activeButton, setActiveButton] = useState("გოფრირებული მილებისთვის"); 
  const totalPages = Math.ceil(totalCount / perPage);
  const Ids = [
    "გოფრირებული მილებისთვის",
    "პოლიეთილენის მილებისთვის",
    "პოლიპროპილენის საკანალიზაციო მილებისთვის",
    "პოლიპროპილენის ცივი და ცხელი წყლის მილებისთვის",
  ];
  const translatedCategories = {
    GEO: {
      "გოფრირებული მილებისთვის": "გოფრირებული მილებისთვის",
    "პოლიეთილენის მილებისთვის" : "პოლიეთილენის მილებისთვის",
    "პოლიპროპილენის საკანალიზაციო მილებისთვის" : "პოლიპროპილენის საკანალიზაციო მილებისთვის",
    "პოლიპროპილენის ცივი და ცხელი წყლის მილებისთვის": "პოლიპროპილენის ცივი და ცხელი წყლის მილებისთვის",
      // ... other translations ...
    },
    ENG: {
      "გოფრირებული მილებისთვის" : "For corrugated pipes",
      "პოლიეთილენის მილებისთვის" : "For polyethylene pipes",
      "პოლიპროპილენის საკანალიზაციო მილებისთვის" : "For polypropylene sewage pipes",
      "პოლიპროპილენის ცივი და ცხელი წყლის მილებისთვის" : "For polypropylene cold and hot water pipes",
      // ... other translations ...
    },
    RUS: {
      "გოფრირებული მილებისთვის" : "Для гофрированных труб",
      "პოლიეთილენის მილებისთვის" : "для полиэтиленовых труб",
      "პოლიპროპილენის საკანალიზაციო მილებისთვის" : "Для полипропиленовых канализационных труб",
      "პოლიპროპილენის ცივი და ცხელი წყლის მილებისთვის" : "Для полипропиленовых труб холодного и горячего водоснабжения",
      // ... other translations ...
    },
  };
  useEffect(() => {
    fetchFittings(id, currentPage);
    fetchPagination(id);
  }, [id, currentPage]);
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
  const [activeCategory, setActiveCategory] = useState(null);
  const fetchFittings = async (id, page) => {
    try {
      const res = await fetch(`/api/fittings/category/${id}`, {
        method: "POST",
        body: JSON.stringify({
          page,
        }),
      });
      const data = await res.json();
      console.log(data);
      setFittings(data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchPagination = async (id) => {
    try {
      const res = await fetch(`/api/fittings/pagination/${id}`);
      const data = await res.json();
      setTotalCount(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleId = async (id) => {
    // try{
    //     setId(id);
    // } catch (error){
    //     console.log(error);
    // }
    if (activeCategory === id) {
      setId("გოფრირებული მილებისთვის");
      setActiveCategory(null);
      setActiveButton("გოფრირებული მილებისთვის");
    } else {
      setId(id);
      setActiveCategory(id);
      setActiveButton(id);
    }
  };
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
          <div className="flex justify-center items-center space-x-2">
            <span>
              <Link href="/">
                {selectedLanguage === "GEO" && "პროდუქცია"}
                {selectedLanguage === "ENG" && "products"}
                {selectedLanguage === "RUS" && "производство"}
              </Link>
            </span>
            <span>
              <img src="/assets/icons/Vector.png" />
            </span>
          </div>
          <div className="text-[#1A3DA7]">
            <Link href="/products/fittings">
              {selectedLanguage === "GEO" && "ფიტინგები"}
              {selectedLanguage === "ENG" && "fittings"}
              {selectedLanguage === "RUS" && "арматура"}
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-[#ECF5FF] px-4 py-4 mt-[100px] lg:bg-transparent lg:mt-12">
        <div className="flex justify-center items-center">
        <h1 className="font-bold text-xl lg:text-3xl">ფიტინგები</h1>
        </div>
      </section>
      <section className="container mx-auto mt-12">
        <div className="flex flex-col space-y-6 justfy-center items-center">
          <div className="hidden lg:flex justify-center items-center space-x-6">
            {Ids.map((id, index) => (
              <button
                onClick={() => handleId(id)}
                key={index}
                className={`${
                  activeButton === id ? "bg-[#1A3DA7] text-white" : "bg-transparent"
                } px-4 py-2 rounded-2xl border-[#1A3DA7] border-[1px] border-solid text-[13px]`}
              >
                {translatedCategories[selectedLanguage][id]}
              </button>
            ))}
          </div>
          <div className="flex flex-col justify-start items-start mt-12 px-8 space-y-4 lg:hidden">
        {Ids.map((id, index) => (
          <div key={index} className="flex justify-start items-start space-x-4">
            <input
              type="checkbox"
              className="w-[20px] h-[20px]"
              checked={activeButton === id}
              onChange={() => handleId(id)}
            />
            <label className="fix-fitting-text">
              {translatedCategories[selectedLanguage][id]}
            </label>
          </div>
        ))}
      </div>
          <div className="fix-fitting-grid">
            {fittings.map((fitting, index) => (
              <div
                key={index}
                className="flex flex-col space-y-4 justify-center items-center border-[#ADD1FC] border-solid border-[1px] rounded-xl px-4 py-4"
              >
                <img
                  className="w-[258px] h-[176px] rounded-xl"
                  src={fitting.imageUrl}
                  alt={fitting.imageAlt}
                />
                {selectedLanguage === "GEO" && (
      <span>
        {fitting.fittingName.split(' ').map((word, i) => (
          <span key={i}>
          {i > 0 ? ' ' : ''}
          {word.match(/\d+/) ? (
            <span>
              {word.match(/\d+/)}
              <img
                className="w-[20px] h-[20px] inline align-top"
                src="/assets/icons/degree.svg"
                alt="Degree Circle"
              />
              {word.replace(/\d+/, '')}
            </span>
          ) : (
            word
          )}
        </span>
        ))}
      </span>
    )}
    {selectedLanguage === "ENG" && (
      <span>
        {fitting.fittingNameEng.split(' ').map((word, i) => (
          <span key={i}>
          {i > 0 ? ' ' : ''}
          {word.match(/\d+/) ? (
            <span>
              {word.match(/\d+/)}
              <img
                className="w-[20px] h-[20px] inline align-top"
                src="/assets/icons/degree.svg"
                alt="Degree Circle"
              />
              {word.replace(/\d+/, '')}
            </span>
          ) : (
            word
          )}
        </span>
        ))}
      </span>
    )}
    {selectedLanguage === "RUS" && (
      <span>
        {fitting.fittingNameRus.split(' ').map((word, i) => (
           <span key={i}>
           {i > 0 ? ' ' : ''}
           {word.match(/\d+/) ? (
             <span>
               {word.match(/\d+/)}
               <img
                 className="w-[20px] h-[20px] inline align-top"
                 src="/assets/icons/degree.svg"
                 alt="Degree Circle"
               />
               {word.replace(/\d+/, '')}
             </span>
           ) : (
             word
           )}
         </span>
          // <span key={i}>
          //   {i > 0 ? ' ' : ''}
          //   {word.match(/\d+/) ? (
          //     <span>
          //       {word.replace(/\d+/, '')}
          //       <img
          //         className="w-[10px] h-[10px] inline"
          //         src="assets/icons/degree.svg"
          //         alt="Degree Circle"
          //       />
          //       {word.match(/\d+/)}
          //     </span>
          //   ) : (
          //     word
          //   )}
          // </span>
        ))}
      </span>
    )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container mx-auto mt-24">
      <div className="flex justify-center items-center space-x-6">
            <button
              disabled={currentPage === 1}
              onClick={handlePrevPage}
              className={`px-4 py-2 rounded ${currentPage === 1 ? "bg-[#C6CACC] text-white" : "bg-[#1A3DA7] text-white"}`}
            >
              წინა
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
                      ? "text-black" // Only set the text color for "..."
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
              className={`px-4 py-2 rounded ${currentPage === Math.ceil(totalCount / perPage) ? "bg-[#C6CACC] text-white" : "bg-[#1A3DA7] text-white"}`}
            >
              შემდეგ
            </button>
          </div>
      </section>
    </>
  );
};

export default fittingsPage;
