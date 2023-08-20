"use client";
import { useState } from "react";
import Button from "@/components/user/Button";
import Link from "next/link";
import "@/app/globals.css";
import Carousel from "@/components/user/Carousel";
import { useLanguage } from "@/utils/languageContext";
const page = () => {
  const {selectedLanguage} = useLanguage();
  const pipeFirst = "/assets/icons/placeholder1.png";
  const pipeSecond = "/assets/icons/placeholder2.png";
  const [selectedButton, setSelectedButton] = useState(1);
  const [product, setImageSource] = useState(pipeFirst);
  const [tableData, setTableData] = useState([
    { column1: 1, column2: 2, column3: 3, column4: 5 },
    { column1: 1, column2: 2, column3: 3, column4: 5 },
    { column1: 1, column2: 2, column3: 3, column4: 5 },
    { column1: 1, column2: 2, column3: 3, column4: 5 },
    { column1: 1, column2: 2, column3: 3, column4: 5 },
    { column1: 1, column2: 2, column3: 3, column4: 5 },
    { column1: 1, column2: 2, column3: 3, column4: 5 },
    { column1: 1, column2: 2, column3: 3, column4: 5 },
    { column1: 1, column2: 2, column3: 3, column4: 5 },
    { column1: 1, column2: 2, column3: 3, column4: 5 },
    // Add more data rows as needed
  ]);
  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
    // Update table data based on the button clicked
    if (buttonId === 1) {
      setTableData([
        { column1: 1, column2: 2, column3: 3, column4: 5 },
        { column1: 1, column2: 2, column3: 3, column4: 5 },
        { column1: 1, column2: 2, column3: 3, column4: 5 },
        { column1: 1, column2: 2, column3: 3, column4: 5 },
        { column1: 1, column2: 2, column3: 3, column4: 5 },
        { column1: 1, column2: 2, column3: 3, column4: 5 },
        { column1: 1, column2: 2, column3: 3, column4: 5 },
        { column1: 1, column2: 2, column3: 3, column4: 5 },
        { column1: 1, column2: 2, column3: 3, column4: 5 },
        { column1: 1, column2: 2, column3: 3, column4: 5 },
        // Add more data rows as needed
      ]);
      setImageSource(pipeFirst);
    } else if (buttonId === 2) {
      setTableData([
        { column1: 1, column2: 2, column3: 3, column4: 6 },
        { column1: 1, column2: 2, column3: 3, column4: 6 },
        { column1: 1, column2: 2, column3: 3, column4: 6 },
        { column1: 1, column2: 2, column3: 3, column4: 6 },
        { column1: 1, column2: 2, column3: 3, column4: 6 },
        { column1: 1, column2: 2, column3: 3, column4: 6 },
        { column1: 1, column2: 2, column3: 3, column4: 6 },
        { column1: 1, column2: 2, column3: 3, column4: 6 },
        { column1: 1, column2: 2, column3: 3, column4: 6 },
        { column1: 1, column2: 2, column3: 3, column4: 6 },
        // Add more data rows as needed
      ]);
      setImageSource(pipeSecond);
    } else if (buttonId === 3) {
      setTableData([
        { column1: 1, column2: 2, column3: 3, column4: 7 },
        { column1: 1, column2: 2, column3: 3, column4: 7 },
        { column1: 1, column2: 2, column3: 3, column4: 7 },
        { column1: 1, column2: 2, column3: 3, column4: 7 },
        { column1: 1, column2: 2, column3: 3, column4: 7 },
        { column1: 1, column2: 2, column3: 3, column4: 7 },
        { column1: 1, column2: 2, column3: 3, column4: 7 },
        { column1: 1, column2: 2, column3: 3, column4: 7 },
        { column1: 1, column2: 2, column3: 3, column4: 7 },
        { column1: 1, column2: 2, column3: 3, column4: 7 },
        // Add more data rows as needed
      ]);
      setImageSource(pipeFirst);
    } else if (buttonId === 4) {
      setTableData([
        { column1: 1, column2: 2, column3: 3, column4: 8 },
        { column1: 1, column2: 2, column3: 3, column4: 8 },
        { column1: 1, column2: 2, column3: 3, column4: 8 },
        { column1: 1, column2: 2, column3: 3, column4: 8 },
        { column1: 1, column2: 2, column3: 3, column4: 8 },
        { column1: 1, column2: 2, column3: 3, column4: 8 },
        { column1: 1, column2: 2, column3: 3, column4: 8 },
        { column1: 1, column2: 2, column3: 3, column4: 8 },
        { column1: 1, column2: 2, column3: 3, column4: 8 },
        { column1: 1, column2: 2, column3: 3, column4: 8 },
        // Add more data rows as needed
      ]);
      setImageSource(pipeSecond);
    } else if (buttonId === 5) {
      setTableData([
        { column1: 1, column2: 2, column3: 3, column4: 9 },
        { column1: 1, column2: 2, column3: 3, column4: 9 },
        { column1: 1, column2: 2, column3: 3, column4: 9 },
        { column1: 1, column2: 2, column3: 3, column4: 9 },
        { column1: 1, column2: 2, column3: 3, column4: 9 },
        { column1: 1, column2: 2, column3: 3, column4: 9 },
        { column1: 1, column2: 2, column3: 3, column4: 9 },
        { column1: 1, column2: 2, column3: 3, column4: 9 },
        { column1: 1, column2: 2, column3: 3, column4: 9 },
        { column1: 1, column2: 2, column3: 3, column4: 9 },
        // Add more data rows as needed
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
            <Link href="/products/Polypropylene/hotAndCold">
              {selectedLanguage === "GEO" &&
                "პოლიპროპილენის ცივი და წხელი წყლის (PPR) მილები"}
              {selectedLanguage === "ENG" &&
                "Polypropylene cold and hot water (PPR) pipes"}
              {selectedLanguage === "RUS" &&
                "Полипропиленовая холодная и горячая вода (PPR) трубы"}
            </Link>
          </div>
        </div>
      </section>
      <section className="container mx-auto mt-[100px] lg:mt-12">
          <div id="main" className="flex flex-col lg:flex-row justify-center items-center space-x-0 px-4 lg:items-start lg:space-x-8">
            <div className="flex flex-col justify-center items-center space-y-4">
              <div>
                <img className="fix-sizing" src={product} alt="pipe first placeholder" />
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
                  პოლიპროპილენის &#40;PPR&#41; ცივი და ცხელი წყლის მილები
                </h1>
                <p>
                  2017 წელს დამატებითი ინვესტიციის განხორციელებული შემდეგ ჩვენმა
                  კომპანიამ, ასევე მაღალხარისხიანი დანადგარების მონტაჟის შემდეგ,
                  დაიწყო სასმელი და გაზიფიგაციისთვის საჭირო პოლიეთილენის მილების
                  წარმოება. მილების მოიცავს 20მმ - 500მმ ჩათვლით და PN6-დან
                  PN25-ჩათვლით ყველა ატმოსფეროს.
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
                      label="P10"
                      selected={selectedButton === 1}
                      onClick={handleButtonClick}
                      className={`custom-button ${selectedButton === 1 ? "selected" : ""}`}
                    />
                    <Button
                      id={2}
                      label="P16"
                      selected={selectedButton === 2}
                      onClick={handleButtonClick}
                      className={`custom-button ${selectedButton === 2 ? "selected" : ""}`}
                    />
                    <Button
                      
                      id={3}
                      label="P20"
                      selected={selectedButton === 3}
                      onClick={handleButtonClick}
                      className={`custom-button ${selectedButton === 3 ? "selected" : ""}`}
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
                      label="P20"
                      selected={selectedButton === 4}
                      onClick={handleButtonClick}
                      className={`custom-button ${selectedButton === 4 ? "selected" : ""}`}
                    />
                    <Button
                      id={5}
                      label="P25"
                      selected={selectedButton === 5}
                      onClick={handleButtonClick}
                      className={`custom-button ${selectedButton === 5 ? "selected" : ""}`}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-4 justify-center items-center lg:items-start">
                <div>
                  <h3>
                    პოლიპროპილენის &#40;PPR&#41; ცივი და ცხელი წყლის მილები
                  </h3>
                </div>
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
                         <tr key={index} style={index % 2 === 0 ? { background: "#c6daf1" } : {}}>
                         <td className="px-3 lg:px-6 py-2 text-center">{rowData.column1}</td>
                         <td className="px-3 lg:px-6 py-2 text-center">{rowData.column2}</td>
                         <td className="px-3 lg:px-6 py-2 text-center">{rowData.column3}</td>
                         <td className="px-3 lg:px-6 py-2 text-center">{rowData.column4}</td>
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
