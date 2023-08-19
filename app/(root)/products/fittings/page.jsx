"use client";
import { useEffect, useState } from "react";

const fittingsPage = () => {
  const [fittings, setFittings] = useState([]);
  const [id, setId] = useState("main");
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 1;
  const [totalCount, setTotalCount] = useState(0);
  const totalPages = Math.ceil(totalCount / perPage);
  const Ids = [
    "გოფრირებული მილებისთვის",
    "პოლიეთილენის მილებისთვის",
    "პოლიპროპილენის მილებისთვის",
    "პოლიპროპილენის ცივი და ცხელი წყლის მილებისთვის"
  ]
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
    try{
        const res = await fetch(`/api/fittings/category/${id}`, {
            method : "POST",
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
  }
  const fetchPagination = async (id) => {
    try{
        const res = await fetch(`/api/fittings/pagination/${id}`);
        const data = await res.json();
        setTotalCount(data);
    } catch (error){
        console.log(error);
    }
  }
  const handleId = async (id) => {
    // try{
    //     setId(id);
    // } catch (error){
    //     console.log(error);
    // }
    if (activeCategory === id) {
        setId("main");
        setActiveCategory(null);
      } else {
        setId(id);
        setActiveCategory(id);
      }
  }
  return (
   <>
   <section className="container mx-auto mt-10">
        <div className="flex flex-col space-y-6 justfy-center items-center">
            <div className="flex justify-center items-center space-x-6">
                {Ids.map((id, index) => (
                    <button onClick={() => handleId(id)} key={index} className="px-4 py-2 rounded border-[#1A3DA7] border-[1px] border-solid">
                        {id}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-4 gap-9">
                {fittings.map((fitting, index) => (
                    <div key={index} className="flex flex-col space-y-4 justify-center items-center border-black border-solid border-[1px]">
                        <img className="w-[275px] h-[210px]" src={fitting.imageUrl}   alt={fitting.imageAlt}/>
                        <span>{fitting.fittingName}</span>
                    </div>
                ))}
            </div>
            <div className="flex justify-center items-center space-x-6">
          <button
            disabled={currentPage === 1}
            onClick={handlePrevPage}
            className="bg-blue-500 text-white px-4 py-2 rounded-[1px]"
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
                  ? "bg-blue-500 text-white"
                  : item === "..."
                  ? "text-gray-600" // Only set the text color for "..."
                  : "bg-gray-200 text-gray-600"
              } px-4 py-2 rounded-[1px]`}
              style={item === "..." ? { backgroundColor: "transparent", padding: 0 } : {}}
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
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-600"
              } px-4 py-2 rounded-[1px]`}
            >
              {pageNumber}
            </button>
          ))}
          </div>
          <button
            disabled={currentPage === Math.ceil(totalCount / perPage)}
            onClick={handleNextPage}
            className="bg-blue-500 text-white px-4 py-2 rounded-[1px]"
          >
            შემდეგ
          </button>
        </div>
        </div>
   </section>
   </>
  )
}

export default fittingsPage
