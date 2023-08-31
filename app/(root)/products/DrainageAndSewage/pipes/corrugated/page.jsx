"use client";
import { useState } from "react";
import Carousel from "@/components/user/Carousel";
import Button from "@/components/user/Button";
import Link from "next/link";
import "@/app/globals.css";
import { useLanguage } from "@/utils/languageContext";

const page = () => {
  const { selectedLanguage } = useLanguage();
  const pipeFirst = "/assets/icons/SN4.jpg";
  const pipeSecond = "/assets/icons/SN8-SN12-SN16.jpg";
  const [selectedButton, setSelectedButton] = useState(1);
  const [product, setImageSource] = useState(pipeFirst);
  const [tableData, setTableData] = useState([
    { column1: 100, column2: 118, column3: 6 },
    { column1: 125, column2: 139, column3: 6 },
    { column1: 150, column2: 174, column3: 6 },
    { column1: 200, column2: 233, column3: 6 },
    { column1: 250, column2: 291, column3: 6 },
    { column1: 300, column2: 353, column3: 6 },
    { column1: 400, column2: 468, column3: 6 },
    { column1: 500, column2: 580, column3: 6 },
    { column1: 600, column2: 700, column3: 6 },
    { column1: 800, column2: 904, column3: 6 },
    { column1: 1000, column2: 1140, column3: 6 },
  ]);
  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
    if (buttonId === 1) {
      setTableData([
        { column1: 100, column2: 118, column3: 6 },
        { column1: 125, column2: 139, column3: 6 },
        { column1: 150, column2: 174, column3: 6 },
        { column1: 200, column2: 233, column3: 6 },
        { column1: 250, column2: 291, column3: 6 },
        { column1: 300, column2: 353, column3: 6 },
        { column1: 400, column2: 468, column3: 6 },
        { column1: 500, column2: 580, column3: 6 },
        { column1: 600, column2: 700, column3: 6 },
        { column1: 800, column2: 904, column3: 6 },
        { column1: 1000, column2: 1140, column3: 6 },
      ]);
      setImageSource(pipeFirst);
    } else if (buttonId === 2) {
      setTableData([
        { column1: 100, column2: 118, column3: 6 },
        { column1: 125, column2: 139, column3: 6 },
        { column1: 150, column2: 174, column3: 6 },
        { column1: 200, column2: 233, column3: 6 },
        { column1: 250, column2: 291, column3: 6 },
        { column1: 300, column2: 353, column3: 6 },
        { column1: 400, column2: 468, column3: 6 },
        { column1: 500, column2: 580, column3: 6 },
        { column1: 600, column2: 700, column3: 6 },
        { column1: 800, column2: 904, column3: 6 },
        { column1: 1000, column2: 1140, column3: 6 },
      ]);
      setImageSource(pipeSecond);
    } else if (buttonId === 3) {
      setTableData([
        { column1: 100, column2: 118, column3: 6 },
        { column1: 125, column2: 139, column3: 6 },
        { column1: 150, column2: 174, column3: 6 },
        { column1: 200, column2: 233, column3: 6 },
        { column1: 250, column2: 291, column3: 6 },
        { column1: 300, column2: 353, column3: 6 },
        { column1: 400, column2: 468, column3: 6 },
        { column1: 500, column2: 580, column3: 6 },
        { column1: 600, column2: 700, column3: 6 },
        { column1: 800, column2: 904, column3: 6 },
        { column1: 1000, column2: 1140, column3: 6 },
      ]);
      setImageSource(pipeSecond);
    } else if (buttonId === 4) {
      setTableData([
        { column1: 100, column2: 118, column3: 6 },
        { column1: 125, column2: 139, column3: 6 },
        { column1: 150, column2: 174, column3: 6 },
        { column1: 200, column2: 233, column3: 6 },
        { column1: 250, column2: 291, column3: 6 },
        { column1: 300, column2: 353, column3: 6 },
        { column1: 400, column2: 468, column3: 6 },
        { column1: 500, column2: 580, column3: 6 },
        { column1: 600, column2: 700, column3: 6 },
        { column1: 800, column2: 904, column3: 6 },
        { column1: 1000, column2: 1140, column3: 6 },
      ]);
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
            <Link href="/products/DrainageAndSewage/pipes/corrugated">
              {selectedLanguage === "GEO" &&
                "სანიაღვრე და საკანალიზაციო გოფრირებული მილები"}
              {selectedLanguage === "ENG" &&
                "Drainage and sewage corrugated pipes"}
              {selectedLanguage === "RUS" &&
                "Дренажные и канализационные гофрированные трубы"}
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
                სანიაღვრე და საკანალიზაციო გოფრირებული მილები
              </h1>
              <p>
                {selectedLanguage === "GEO" &&
                  ` „ქართული მილი“ აწარმოებს გოფრირებულ მილებს საკანალიზაციო და სანიაღვრე სისტემებისთვის, დიამეტრით 100 მმ-დან 1600 მმ-მდე, სხვადასხვა სიმტკიცის კლასებში: SN4, SN8, SN12 და SN16. ჩვენი გოფრირებული მილები სრულად შეესაბამება EN 13476-3:2018 სტანდარტებს.
                 `}
                {selectedLanguage === "ENG" &&
                  `
                 Georgian Pipe produces corrugated pipes for sewage and drainage systems, ranging in diameter from
100mm to 1600mm. These pipes are categorized into various strength classes: SN4, SN8, SN12, and
SN16. Our Corrugated pipes fully comply with the requirements of EN 13476-3:2018.
                 `}
                 {selectedLanguage === "RUS" && `
                 «Джорджиан Пайп» производит гофрированные трубы для канализационных и дренажных
                 систем диаметром от 100 мм до 1600 мм. Эти трубы подразделяются на различные классы
                 прочности: SN4, SN8, SN12 и SN16. Наши гофрированные трубы полностью соответствуют
                 требованиям EN 13476-3:2018.
                 `}
              </p>
            </div>

            <div className="flex justify-center items-center space-x-4">
              <Button
                id={1}
                label="SN4"
                selected={selectedButton === 1}
                onClick={handleButtonClick}
                className={`custom-button ${
                  selectedButton === 1 ? "selected" : ""
                }`}
              />
              <Button
                id={2}
                label="SN8"
                selected={selectedButton === 2}
                onClick={handleButtonClick}
                className={`custom-button ${
                  selectedButton === 2 ? "selected" : ""
                }`}
              />
              <Button
                id={3}
                label="SN12"
                selected={selectedButton === 3}
                onClick={handleButtonClick}
                className={`custom-button ${
                  selectedButton === 3 ? "selected" : ""
                }`}
              />
              <Button
                id={4}
                label="SN16"
                selected={selectedButton === 4}
                onClick={handleButtonClick}
                className={`custom-button ${
                  selectedButton === 4 ? "selected" : ""
                }`}
              />
            </div>
            <div className="flex flex-col space-y-4 justify-center items-center lg:items-start">
              <table className="table-fixed">
                <thead>
                  <tr>
                    <th className="w-1/6 px-3  py-2">ID &#40;mm&#41;</th>
                    <th className="w-1/2 px-10 py-2">OD &#40;mm&#41;</th>
                    <th className="w-1/4 px-4 py-2">L &#40;m&#41;</th>
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
