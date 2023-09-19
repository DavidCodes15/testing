"use client";
import { useState } from "react";
import Button from "@/components/user/Button";
import Link from "next/link";
import "@/app/globals.css";
import Carousel from "@/components/user/Carousel";
import { useLanguage } from "@/utils/languageContext";
const page = () => {
  const { selectedLanguage } = useLanguage();
  const pipeFirst = "/assets/icons/cold.jpeg";
  const pipeSecond = "/assets/icons/hot.png";
  const [selectedButton, setSelectedButton] = useState(1);
  const [product, setImageSource] = useState(pipeFirst);
  const [tableData, setTableData] = useState([
    { column1: 20, column2: 1.9, column3: 20.3, column4: 4 },
    { column1: 25, column2: 2.3, column3: 25.3, column4: 4 },
    { column1: 32, column2: 2.9, column3: 32.3, column4: 4 },
    { column1: 40, column2: 3.7, column3: 40.4, column4: 4 },
    { column1: 50, column2: 4.6, column3: 50.5, column4: 4 },
    { column1: 63, column2: 5.8, column3: 63.6, column4: 4 },
    { column1: 75, column2: 6.8, column3: 75.7, column4: 4 },
    { column1: 90, column2: 8.2, column3: 90.9, column4: 4 },
    { column1: 110, column2: 10, column3: 111, column4: 4 },
    { column1: 125, column2: 11.4, column3: 126.2, column4: 4 },
    // Add more data rows as needed
  ]);
  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
    // Update table data based on the button clicked
    if (buttonId === 1) {
      setTableData([
        { column1: 20, column2: 1.9, column3: 20.3, column4: 4 },
        { column1: 25, column2: 2.3, column3: 25.3, column4: 4 },
        { column1: 32, column2: 2.9, column3: 32.3, column4: 4 },
        { column1: 40, column2: 3.7, column3: 40.4, column4: 4 },
        { column1: 50, column2: 4.6, column3: 50.5, column4: 4 },
        { column1: 63, column2: 5.8, column3: 63.6, column4: 4 },
        { column1: 75, column2: 6.8, column3: 75.7, column4: 4 },
        { column1: 90, column2: 8.2, column3: 90.9, column4: 4 },
        { column1: 110, column2: 10, column3: 111, column4: 4 },
        { column1: 125, column2: 11.4, column3: 126.2, column4: 4 },
        // Add more data rows as needed
      ]);
      setImageSource(pipeFirst);
    } else if (buttonId === 2) {
      setTableData([
        { column1: 20, column2: 2.8, column3: 20.3, column4: 4 },
        { column1: 25, column2: 3.5, column3: 25.3, column4: 4 },
        { column1: 32, column2: 4.4, column3: 32.3, column4: 4 },
        { column1: 40, column2: 5.5, column3: 40.4, column4: 4 },
        { column1: 50, column2: 6.9, column3: 50.5, column4: 4 },
        { column1: 63, column2: 8.6, column3: 63.6, column4: 4 },
        { column1: 75, column2: 10.3, column3: 75.7, column4: 4 },
        { column1: 90, column2: 12.3, column3: 90.9, column4: 4 },
        { column1: 110, column2: 15.1, column3: 111, column4: 4 },
        { column1: 125, column2: 17.1, column3: 126.2, column4: 4 },
        // Add more data rows as needed
      ]);
      setImageSource(pipeFirst);
    } else if (buttonId === 3) {
      setTableData([
        { column1: 20, column2: 3.4, column3: 20.3, column4: 4 },
        { column1: 25, column2: 4.2, column3: 25.3, column4: 4 },
        { column1: 32, column2: 5.4, column3: 32.3, column4: 4 },
        { column1: 40, column2: 6.7, column3: 40.4, column4: 4 },
        { column1: 50, column2: 8.3, column3: 50.5, column4: 4 },
        { column1: 63, column2: 10.5, column3: 63.6, column4: 4 },
        { column1: 75, column2: 12.5, column3: 75.7, column4: 4 },
        { column1: 90, column2: 15, column3: 90.9, column4: 4 },
        { column1: 110, column2: 18.3, column3: 111, column4: 4 },
        { column1: 125, column2: 20.8, column3: 126.2, column4: 4 },
        // Add more data rows as needed
      ]);
      setImageSource(pipeFirst);
    } else if (buttonId === 4) {
      setTableData([
        { column1: 20, column2: 2.8, column3: 20.3, column4: 4 },
        { column1: 25, column2: 3.5, column3: 25.3, column4: 4 },
        { column1: 32, column2: 4.4, column3: 32.3, column4: 4 },
        { column1: 40, column2: 5.5, column3: 40.4, column4: 4 },
        { column1: 50, column2: 6.9, column3: 50.5, column4: 4 },
        { column1: 63, column2: 8.6, column3: 63.6, column4: 4 },
        { column1: 75, column2: 10.3, column3: 75.7, column4: 4 },
        { column1: 90, column2: 12.3, column3: 90.9, column4: 4 },
        { column1: 110, column2: 15.1, column3: 111, column4: 4 },
        { column1: 125, column2: 17.1, column3: 126.2, column4: 4 },
        // Add more data rows as needed
      ]);
      setImageSource(pipeSecond);
    } else if (buttonId === 5) {
      setTableData([
        { column1: 20, column2: 3.4, column3: 20.3, column4: 4 },
        { column1: 25, column2: 4.2, column3: 25.3, column4: 4 },
        { column1: 32, column2: 5.4, column3: 32.3, column4: 4 },
        { column1: 40, column2: 6.7, column3: 40.4, column4: 4 },
        { column1: 50, column2: 8.3, column3: 50.5, column4: 4 },
        { column1: 63, column2: 10.5, column3: 63.6, column4: 4 },
        { column1: 75, column2: 12.5, column3: 75.7, column4: 4 },
        { column1: 90, column2: 15, column3: 90.9, column4: 4 },
        { column1: 110, column2: 18.3, column3: 111, column4: 4 },
        { column1: 125, column2: 20.8, column3: 126.2, column4: 4 },
        // Add more data rows as needed
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
            <Link href="/products/Polypropylene/hotAndCold">
              {selectedLanguage === "GEO" &&
                "პოლიპროპილენის ცივი და ცხელი წყლის (PPR) მილები"}
              {selectedLanguage === "ENG" &&
                "Polypropylene cold and hot water (PPR) pipes"}
              {selectedLanguage === "RUS" &&
                "Полипропиленовые (ППР) трубы Для холодной и горячей воды"}
            </Link>
          </div>
        </div>
      </section>
      <section className="container mx-auto mt-[100px] lg:mt-12">
        <div
          id="main"
          className="flex flex-col lg:flex-row justify-center items-center space-x-0 px-4 lg:items-start lg:space-x-32"
        >
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
                  "პოლიპროპილენის ცივი და ცხელი წყლის (PPR) მილები"}
                {selectedLanguage === "ENG" &&
                  "Polypropylene cold and hot water (PPR) pipes"}
                {selectedLanguage === "RUS" &&
                  "Полипропиленовые (ППР) трубы Для холодной и горячей воды"}
              </h1>
              <p>
                {selectedLanguage === "GEO" &&
                  `ჩვენი პოლიპროპილენის მილები სრულად შეესაბამება ISO 15874 სტანდარტებს და
იდეალურად გამოიყენება ცივი და ცხელი წყლით მომარაგების სისტემებში. მათი
გამოყენება შესაძლებელია ნებისმიერ შიდა გაყვანილობის წყლის სისტემაში და
განკუთვნილია გრძელვადიანი გამოყენებისთვის.`}
                {selectedLanguage === "ENG" &&
                  `Our PPRC and Composite PPR pipes fully comply with the ISO 15874 standards and is perfect solution for
indoor cold and hot water supply. They can be used in any indoor water systems and is designed for
long-term use.`}
                {selectedLanguage === "RUS" &&
                  `Наши трубы из PPRC и композитного PPR полностью соответствуют стандартам ISO 15874 и
являются идеальным решением для внутреннего холодного и горячего водоснабжения. Они могут
использоваться в любых внутренних системах водоснабжения и рассчитаны на длительное
использование.`}
              </p>
            </div>
            <div className="flex flex-col space-y-2 justify-center items-center lg:items-start">
              <div className="flex flex-col space-y-4 justify-center items-center lg:items-start">
                <div>
                  <h2 className="font-bold text-xl">ცივი წყლის</h2>
                </div>
                <div className="flex justify-center items-center lg:items-start space-x-4">
                  <Button
                    id={1}
                    label="PN10"
                    selected={selectedButton === 1}
                    onClick={handleButtonClick}
                    className={`custom-button ${
                      selectedButton === 1 ? "selected" : ""
                    }`}
                  />
                  <Button
                    id={2}
                    label="PN16"
                    selected={selectedButton === 2}
                    onClick={handleButtonClick}
                    className={`custom-button ${
                      selectedButton === 2 ? "selected" : ""
                    }`}
                  />
                  <Button
                    id={3}
                    label="PN20"
                    selected={selectedButton === 3}
                    onClick={handleButtonClick}
                    className={`custom-button ${
                      selectedButton === 3 ? "selected" : ""
                    }`}
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-4 justify-center items-center lg:items-start">
                <div>
                  <h2 className="font-bold text-xl">ცხელი წყლის</h2>
                </div>
                <div className="flex justify-center items-center lg:items-start space-x-2">
                  {/* <button className="bg-transparent cursor-pointer border-[1px] border-solid border-[#1A3DA7] rounded-xl px-4 py-2">
                      P20
                    </button>
                    <button className="bg-transparent cursor-pointer border-[1px] border-solid border-[#1A3DA7] rounded-xl px-4 py-2">
                      P25
                    </button> */}
                  <Button
                    id={4}
                    label="PN20"
                    selected={selectedButton === 4}
                    onClick={handleButtonClick}
                    className={`custom-button ${
                      selectedButton === 4 ? "selected" : ""
                    }`}
                  />
                  <Button
                    id={5}
                    label="PN25"
                    selected={selectedButton === 5}
                    onClick={handleButtonClick}
                    className={`custom-button ${
                      selectedButton === 5 ? "selected" : ""
                    }`}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-4 justify-center items-center lg:items-start">
              <table className="table-fixed">
                <thead>
                  <tr>
                    <th className="w-1/4 px-3 lg:px-6 py-2">Size</th>
                    <th className="w-1/4 px-3 lg:px-6 py-2">S</th>
                    <th className="w-1/4 px-3 lg:px-6 py-2">D</th>
                    <th className="w-1/4 px-3 lg:px-6 py-2">Length</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((rowData, index) => (
                    <tr
                      key={index}
                      style={index % 2 === 0 ? { background: "#c6daf1" } : {}}
                    >
                      <td className="px-3 lg:px-6 py-2 text-center">
                        {rowData.column1}
                      </td>
                      <td className="px-3 lg:px-6 py-2 text-center">
                        {rowData.column2}
                      </td>
                      <td className="px-3 lg:px-6 py-2 text-center">
                        {rowData.column3}
                      </td>
                      <td className="px-3 lg:px-6 py-2 text-center">
                        {rowData.column4}
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
