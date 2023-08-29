"use client";
import { useState } from "react";
import Carousel from "@/components/user/Carousel";
import Button from "@/components/user/Button";
import Link from "next/link";
import "@/app/globals.css";
import { useLanguage } from "@/utils/languageContext";
const page = () => {
  const { selectedLanguage } = useLanguage();
  const pipeFirst = "/assets/icons/placeholder4.png";
  const pipeSecond = "/assets/icons/placeholder3.png";
  const [selectedButton, setSelectedButton] = useState(1);
  const [product, setImageSource] = useState(pipeFirst);
  const [tableData, setTableData] = useState([
    { column1: 600, column2: "6-12" },
    { column1: 700, column2: "6-12" },
    { column1: 800, column2: "6-12" },
    { column1: 1000, column2: "6-12" },
    { column1: 1200, column2: "6-12" },
    { column1: 1400, column2: "6-12" },
    { column1: 1600, column2: "6-12" },
  ]);
  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
    if (buttonId === 1) {
      setTableData([
        { column1: 600, column2: "6-12" },
        { column1: 700, column2: "6-12" },
        { column1: 800, column2: "6-12" },
        { column1: 1000, column2: "6-12" },
        { column1: 1200, column2: "6-12" },
        { column1: 1400, column2: "6-12" },
        { column1: 1600, column2: "6-12" },
      ]);
      setImageSource(pipeFirst);
    } else if (buttonId === 2) {
      setTableData([
        { column1: 600, column2: "6-12" },
        { column1: 700, column2: "6-12" },
        { column1: 800, column2: "6-12" },
        { column1: 100, column2: "6-12" },
        { column1: 1200, column2: "6-12" },
        { column1: 1400, column2: "6-12" },
        { column1: 1600, column2: "6-12" },
      ]);
      setImageSource(pipeSecond);
    } else if (buttonId === 3) {
      setTableData([
        { column1: 600, column2: "6-12" },
        { column1: 700, column2: "6-12" },
        { column1: 800, column2: "6-12" },
        { column1: 900, column2: "6-12" },
        { column1: 1000, column2: "6-12" },
        { column1: 1200, column2: "6-12" },
        { column1: 1400, column2: "6-12" },
        { column1: 1500, column2: "6-12" },
        { column1: 1600, column2: "6-12" },
      ]);
      setImageSource(pipeFirst);
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
            <Link href="/products/DrainageAndSewage/pipes/corrugated/spiral">
              {selectedLanguage === "GEO" &&
                "სანიაღვრე და საკანალიზაციო სპირალური გოფრირებული მილები"}
              {selectedLanguage === "ENG" &&
                "Drainage and sewage spiral corrugated pipes"}
              {selectedLanguage === "RUS" &&
                "Дренажные и канализационные спирально-гофрированные трубы"}
            </Link>
          </div>
        </div>
      </section>
      <section className="container mx-auto mt-[100px] lg:mt-12">
        <div className="flex flex-col lg:flex-row justify-center items-center space-x-0 px-4 lg:items-start lg:space-x-8">
          <div className="flex flex-col justify-center items-center space-y-4">
            <div>
              <img
                className="fix-sizing"
                src={product}
                alt="pipe first placeholder"
              />
            </div>

            <div className="hidden fix-sizing lg:grid grid-cols-2 gap-5">
              <img src="/assets/icons/PPR1.png" alt="pipe first placeholder" />
              <img src="/assets/icons/PPR2.png" alt="pipe second placeholder" />
              <img src="/assets/icons/PPR3.png" alt="pipe third placeholder" />
              <img src="/assets/icons/PPR4.png" alt="pipe fourth placeholder" />
            </div>
          </div>
          <div className="flex flex-col space-y-4 justify-center items-center pr-2 lg:items-start lg:pr-0">
            <div className="hidden lg:flex max-w-[616px] flex-col justify-center items-start space-y-6">
              <h1 className="font-bold text-2xl">
              სანიაღვრე და საკანალიზაციო სპირალური გოფრირებული მილები
              </h1>
              <p>
                2017 წელს დამატებითი ინვესტიციის განხორციელებული შემდეგ ჩვენმა
                კომპანიამ, ასევე მაღალხარისხიანი დანადგარების მონტაჟის შემდეგ,
                დაიწყო სასმელი და გაზიფიგაციისთვის საჭირო პოლიეთილენის მილების
                წარმოება. მილების მოიცავს 20მმ - 500მმ ჩათვლით და PN6-დან
                PN25-ჩათვლით ყველა ატმოსფეროს.
              </p>
            </div>

            <div className="flex justify-center items-center space-x-4">
              <Button
                id={1}
                label="SN2"
                selected={selectedButton === 1}
                onClick={handleButtonClick}
                className={`custom-button ${
                  selectedButton === 1 ? "selected" : ""
                }`}
              />
              <Button
                id={2}
                label="SN4"
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
            </div>
            <div className="flex flex-col space-y-4 justify-center items-center lg:items-start">
                <table className="table-fixed">
                  <thead>
                    <tr>
                      <th className="w-1/2 px-10 lg:px-16 py-2">ID &#40;mm&#41;</th>
                      <th className="w-1/2 px-10 lg:px-16 py-2">Length</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((rowData, index) => (
                         <tr key={index} style={index % 2 === 0 ? { background: "#c6daf1" } : {}}>
                         <td className="px-10 py-2 text-center">{rowData.column1}</td>
                         <td className="px-10 py-2 text-center">{rowData.column2}</td>
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
