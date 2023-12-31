"use client";
import { useState } from "react";
import Carousel from "@/components/user/Carousel";
import Link from "next/link";
import "@/app/globals.css";
import { useLanguage } from "@/utils/languageContext";
const page = () => {
  const { selectedLanguage } = useLanguage();
  const pipeFirst = "/assets/icons/sewage.jpg";
  const [selectedButton, setSelectedButton] = useState(1);
  const [product, setImageSource] = useState(pipeFirst);
  const [tableData, setTableData] = useState([
    { column1: 50, column2: 1.8, column3: 250 },
    { column1: 50, column2: 1.8, column3: 500 },
    { column1: 50, column2: 1.8, column3: 1000 },
    { column1: 50, column2: 1.8, column3: 2000 },
    { column1: 50, column2: 1.8, column3: 3000 },
    { column1: 50, column2: 2.2, column3: 1000 },
    { column1: 50, column2: 2.2, column3: 2000 },
    { column1: 75, column2: 2.2, column3: 1000 },
    { column1: 75, column2: 2.2, column3: 2000 },
    { column1: 75, column2: 2.2, column3: 3000 },
    { column1: 110, column2: 2.2, column3: 250 },
    { column1: 110, column2: 2.2, column3: 500 },
    { column1: 110, column2: 2.2, column3: 1000 },
    { column1: 110, column2: 2.2, column3: 2000 },
    { column1: 110, column2: 2.2, column3: 3000 },
    { column1: 110, column2: 2.7, column3: 100 },
    { column1: 110, column2: 2.7, column3: 250 },
    { column1: 110, column2: 2.7, column3: 500 },
    { column1: 110, column2: 2.7, column3: 1000 },
    { column1: 110, column2: 2.7, column3: 2000 },
    { column1: 110, column2: 2.7, column3: 3000 },
    { column1: 125, column2: 2.2, column3: 1000 },
    { column1: 125, column2: 2.2, column3: 2000 },
    { column1: 125, column2: 2.2, column3: 3000 },
    { column1: 160, column2: 3, column3: 3000 },
  ]);
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
            <Link href="/products/Polypropylene/sewage/pipes">
              {selectedLanguage === "GEO" &&
                "პოლიპროპილენის საკანალიზაციო (PPR) მილები"}
              {selectedLanguage === "ENG" && "Polypropylene sewage (PPR) pipes"}
              {selectedLanguage === "RUS" &&
                "Полипропиленовые (ППР) канализационные трубы"}
            </Link>
          </div>
        </div>
      </section>
      <section className="container mx-auto mt-[100px] lg:mt-12">
        <div className="flex flex-col lg:flex-row justify-center items-center space-x-0 px-4 lg:items-start lg:space-x-32">
          <div className="flex flex-col justify-center items-center space-y-4">
            <div>
              <img
                className="fix-sizing"
                src={product}
                alt="pipe first placeholder"
              />
            </div>

            <div className="hidden fix-sizing lg:grid grid-cols-2 gap-5">
              <img
                className="rounded-xl"
                src="/assets/icons/PPR1.png"
                alt="pipe first placeholder"
              />
              <img
                className="rounded-xl"
                src="/assets/icons/PPR2.png"
                alt="pipe second placeholder"
              />
              <img
                className="rounded-xl"
                src="/assets/icons/PPR3.png"
                alt="pipe third placeholder"
              />
              <img
                className="rounded-xl"
                src="/assets/icons/PPR4.png"
                alt="pipe fourth placeholder"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-4 justify-center items-center pr-2 lg:items-start lg:pr-0">
            <div className="hidden lg:flex max-w-[616px] flex-col justify-center items-start space-y-6">
              <h1 className="font-bold text-2xl">
                {selectedLanguage === "GEO" &&
                  "პოლიპროპილენის საკანალიზაციო (PPR) მილები"}
                {selectedLanguage === "ENG" &&
                  "Polypropylene sewage (PPR) pipes"}
                {selectedLanguage === "RUS" &&
                  "Полипропиленовые (ППР) канализационные трубы"}
              </h1>
              <p>
                {selectedLanguage === "GEO" &&
                  `ჩვენს მიერ წარმოებული „PPR“ საკანალიზაციო მილები მდგრადია 60 ºC-მდე
ტემპერატურის მიმართ და განკუთვნილია გრძელვადიანი გამოყენებისთვის მისი
უმაღლესი ხარისხიდან გამომდინარე. დიამეტრის დიაპაზონი არის 50 მმ-დან 160 მმ-მდე
და სიგრძე 100 მმ-დან 3000 მმ-მდე.`}
                {selectedLanguage === "ENG" &&
                  `Our &quot;PPR&quot; sewage pipes are resistant to temperatures up to 60 ºC and are designed for long-term use
due to its superior quality. The diameter range is from 50 mm to 160 mm and the length from 100 mm
to 3000 mm.`}
                {selectedLanguage === "RUS" &&
                  `Наши канализационные трубы «ППР» устойчивы к температуре до 60 ºC и рассчитаны на
длительную эксплуатацию благодаря своему превосходному качеству. Диапазон диаметров от 50
мм до 160 мм и длины от 100 мм до 3000 мм.`}
              </p>
            </div>
            <div className="flex flex-col space-y-4 justify-center items-center lg:items-start">
              <table className="table-fixed">
                <thead>
                  <tr>
                    <th className="w-1/6 px-4 py-2">ID &#40;mm&#41;</th>
                    <th className="w-1/2 px-10 py-2">S &#40;mm&#41;</th>
                    <th className="w-1/4 px-4 py-2">L &#40;m&#41;</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((rowData, index) => (
                    <tr
                      key={index}
                      style={index % 2 === 0 ? { background: "#c6daf1" } : {}}
                    >
                      <td className="px-10 py-2 text-center">
                        {rowData.column1}
                      </td>
                      <td className="px-8 py-2 text-center">
                        {rowData.column2}
                      </td>
                      <td className="px-8 py-2 text-center">
                        {rowData.column3}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Carousel />
      </section>
    </>
  );
};

export default page;
