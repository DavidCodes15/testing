"use client";
import { useState } from "react";
import Carousel from "@/components/user/Carousel";
import Button from "@/components/user/Button";
import Link from "next/link";
import "@/app/globals.css";
import { useLanguage } from "@/utils/languageContext";

const page = () => {
  const { selectedLanguage } = useLanguage();
  const pipeSecond = "/assets/icons/GPD.png";
  const pipeFirst = "/assets/icons/GPFL.png";
  const [selectedButton, setSelectedButton] = useState(1);
  const [product, setImageSource] = useState(pipeFirst);
  const [tableData, setTableData] = useState([
    { column1: 40, column2: 32, column3: "6-12" },
    { column1: 50, column2: 40, column3: "6-12" },
    { column1: 63, column2: 52, column3: "6-12" },
    { column1: 75, column2: 61, column3: "6-12" },
    { column1: 90, column2: 75, column3: "6-12" },
    { column1: 110, column2: 94, column3: "6-12" },
  ]);
  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
    if (buttonId === 1) {
      setTableData([
        { column1: 40, column2: 32, column3: "6-12" },
        { column1: 50, column2: 40, column3: "6-12" },
        { column1: 63, column2: 52, column3: "6-12" },
        { column1: 75, column2: 61, column3: "6-12" },
        { column1: 90, column2: 75, column3: "6-12" },
        { column1: 110, column2: 94, column3: "6-12" },
      ]);
      setImageSource(pipeFirst);
    } else if (buttonId === 2) {
      setTableData([
        { column1: 40, column2: 32, column3: 50 },
        { column1: 50, column2: 40, column3: 50 },
        { column1: 63, column2: 52, column3: 50 },
        { column1: 75, column2: 61, column3: 50 },
        { column1: 90, column2: 75, column3: 50 },
        { column1: 110, column2: 94, column3: 50 },
      ]);
      setImageSource(pipeSecond);
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
            <Link href="/products/Cable/corrugated-pipes">
              {selectedLanguage === "GEO" && "საკაბელო გოფრირებული მილები"}
              {selectedLanguage === "ENG" && "Cable corrugated pipes"}
              {selectedLanguage === "RUS" && "Кабельные гофрированные трубы"}
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
                {selectedLanguage === "GEO" && "საკაბელო გოფრირებული მილები"}
                {selectedLanguage === "ENG" && "Cable corrugated pipes"}
                {selectedLanguage === "RUS" && "Кабельные гофрированные трубы"}
              </h1>
              <p>
                {selectedLanguage === "GEO" &&
                  `საკაბელო გოფრირებული მილები
2017 წელს “ქართულმა მილმა“ წამოიწყო საკაბელო გოფრირებული მილების წარმოება, დიამეტრით 40 მმ-დან 110 მმ-მდე. ჩვენი საკაბელი გოფრირებული მილები სრულად აკმაყოფილებს EN 61386-1:2008 და EN 61386-24:2010 მოთხოვნებს.`}
                {selectedLanguage === "ENG" &&
                  `In 2017 “Georgian Pipe’ initiated the production of cable corrugated pipes, ranging in diameter from 40 mm to 110 mm. Our pipes for cable laying applications, meet the requirements of EN 61386-1:2008 and EN 61386-24:2010.`}
                {selectedLanguage === "RUS" &&
                  `В 2017 году компания «Джорджиан Пайп» начала производство гофрированных труб для прокладки кабелея с диаметром от 40 мм до 110 мм. Наши трубы для прокладки кабеля соответствуют требованиям EN 61386-1:2008 и EN 61386-24:2010.`}
              </p>
            </div>

            <div className="flex justify-center items-center space-x-4">
              <Button
                id={1}
                label="GPFL"
                selected={selectedButton === 1}
                onClick={handleButtonClick}
                className={`custom-button ${
                  selectedButton === 1 ? "selected" : ""
                }`}
              />
              <Button
                id={2}
                label="GPD"
                selected={selectedButton === 2}
                onClick={handleButtonClick}
                className={`custom-button ${
                  selectedButton === 2 ? "selected" : ""
                }`}
              />
            </div>
            <div className="flex flex-col space-y-4 justify-center items-center lg:items-start">
              <table className="table-fixed">
                <thead>
                  <tr>
                    <th className="w-1/4 px-8 lg:px-16 py-2">O/D</th>
                    <th className="w-1/4 px-8 lg:px-16 py-2">I/D</th>
                    <th className="w-1/2 px-10 lg:px-16 py-2">Length</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((rowData, index) => (
                    <tr
                      key={index}
                      style={index % 2 === 0 ? { background: "#c6daf1" } : {}}
                    >
                      <td className="px-8 py-2 text-center">
                        {rowData.column1}
                      </td>
                      <td className="px-8 py-2 text-center">
                        {rowData.column2}
                      </td>
                      <td className="px-10 py-2 text-center">
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
