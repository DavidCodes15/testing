"use client";
import { useState } from "react";
import Carousel from "@/components/user/Carousel";
import Link from "next/link";
import "@/app/globals.css";
import { useLanguage } from "@/utils/languageContext";

const page = () => {
  const { selectedLanguage } = useLanguage();
  const pipeFirst = "/assets/icons/placeholder8.png";
  const [selectedOption, setSelectedOption] = useState("SDR41-PN4");
  const [product, setImageSource] = useState(pipeFirst);
  const [toggled, setToggled] = useState(false);
  const [tableData, setTableData] = useState([
    { column1: 315, column2: 300, column3: 7.7 },
    { column1: 355, column2: 338, column3: 8.7 },
    { column1: 400, column2: 380, column3: 9.8 },
    { column1: 450, column2: 428, column3: 11 },
    { column1: 500, column2: 475, column3: 12.3 },
    { column1: 560, column2: 533, column3: 13.7 },
    { column1: 630, column2: 599, column3: 15.4 },
  ]);
  const [optionsVisible, setOptionsVisible] = useState(false);

const toggleOptions = () => {
  setOptionsVisible(!optionsVisible);
  setToggled(true);
};


  const handleOptionChange = (selectedValue) => {
    setSelectedOption(selectedValue);
    setOptionsVisible(false);
    if (selectedValue === "SDR41-PN4") {
      setTableData([
        { column1: 315, column2: 300, column3: 7.7 },
        { column1: 355, column2: 338, column3: 8.7 },
        { column1: 400, column2: 380, column3: 9.8 },
        { column1: 450, column2: 428, column3: 11 },
        { column1: 500, column2: 475, column3: 12.3 },
        { column1: 560, column2: 533, column3: 13.7 },
        { column1: 630, column2: 599, column3: 15.4 },
      ]);
    } else if (selectedValue === "SDR33-PN5") {
      setTableData([
        { column1: 315, column2: 295.6, column3: 9.7 },
        { column1: 355, column2: 333.2, column3: 10.9 },
        { column1: 400, column2: 375.4, column3: 12.3 },
        { column1: 450, column2: 422.4, column3: 13.8 },
        { column1: 500, column2: 469.4, column3: 15.3 },
        { column1: 560, column2: 525.6, column3: 17.2 },
        { column1: 630, column2: 591.4, column3: 19.3 },
      ]);
    } else if (selectedValue === "SDR27-PN6") {
      setTableData([
        { column1: 50, column2: 46, column3: 2 },
        { column1: 63, column2: 58, column3: 2.5 },
        { column1: 75, column2: 69.2, column3: 2.9 },
        { column1: 90, column2: 83, column3: 3.5 },
        { column1: 110, column2: 101.6, column3: 4.2 },
        { column1: 125, column2: 115.4, column3: 4.8 },
        { column1: 140, column2: 129.2, column3: 5.4 },
        { column1: 160, column2: 147.6, column3: 6.2 },
        { column1: 180, column2: 166.2, column3: 6.9 },
        { column1: 200, column2: 184.6, column3: 7.7 },
        { column1: 225, column2: 207.8, column3: 8.6 },
        { column1: 250, column2: 230.8, column3: 9.6 },
        { column1: 280, column2: 258.6, column3: 10.7 },
        { column1: 315, column2: 290.8, column3: 12.1 },
        { column1: 355, column2: 327.8, column3: 13.6 },
        { column1: 400, column2: 369.4, column3: 15.3 },
        { column1: 450, column2: 415.6, column3: 17.2 },
        { column1: 500, column2: 461.8, column3: 19.1 },
        { column1: 560, column2: 517.2, column3: 21.4 },
        { column1: 630, column2: 581.8, column3: 24.1 },
      ]);
    } else if (selectedValue === "SDR21-PN8") {
      setTableData([
        { column1: 40, column2: 36, column3: 2 },
        { column1: 50, column2: 45.2, column3: 2.4 },
        { column1: 63, column2: 57, column3: 3 },
        { column1: 75, column2: 67.8, column3: 3.6 },
        { column1: 90, column2: 81.4, column3: 4.3 },
        { column1: 110, column2: 99.4, column3: 5.3 },
        { column1: 125, column2: 113, column3: 6 },
        { column1: 140, column2: 126.6, column3: 6.7 },
        { column1: 160, column2: 144.6, column3: 7.7 },
        { column1: 180, column2: 162.8, column3: 8.6 },
        { column1: 200, column2: 180.8, column3: 9.6 },
        { column1: 225, column2: 203.4, column3: 10.8 },
        { column1: 250, column2: 226.2, column3: 11.9 },
        { column1: 280, column2: 253.2, column3: 13.4 },
        { column1: 315, column2: 285, column3: 15 },
        { column1: 355, column2: 321.2, column3: 16.9 },
        { column1: 400, column2: 361.8, column3: 19.1 },
        { column1: 450, column2: 407, column3: 21.5 },
        { column1: 500, column2: 452.2, column3: 23.9 },
        { column1: 560, column2: 506.6, column3: 26.7 },
        { column1: 630, column2: 570, column3: 30 },
      ]);
    } else if (selectedValue === "SDR17.6-PN9.5") {
      setTableData([
        { column1: 32, column2: 28.2, column3: 1.9 },
        { column1: 40, column2: 35.4, column3: 2.3 },
        { column1: 50, column2: 44.2, column3: 2.9 },
        { column1: 63, column2: 55.8, column3: 3.6 },
        { column1: 75, column2: 66.4, column3: 4.3 },
        { column1: 90, column2: 79.8, column3: 5.1 },
        { column1: 110, column2: 97.4, column3: 6.3 },
        { column1: 125, column2: 110.8, column3: 7.1 },
        { column1: 140, column2: 124, column3: 8 },
        { column1: 160, column2: 141.8, column3: 9.1 },
        { column1: 180, column2: 159.6, column3: 10.2 },
        { column1: 200, column2: 177.2, column3: 11.4 },
        { column1: 225, column2: 199.4, column3: 12.8 },
        { column1: 250, column2: 221.6, column3: 14.2 },
        { column1: 280, column2: 248.2, column3: 15.9 },
        { column1: 315, column2: 279.2, column3: 17.9 },
        { column1: 355, column2: 314.8, column3: 20.1 },
        { column1: 400, column2: 354.6, column3: 22.7 },
        { column1: 450, column2: 399, column3: 25.5 },
        { column1: 500, column2: 443.4, column3: 28.3 },
      ]);
    } else if (selectedValue === "SDR17-PN10") {
      setTableData([
        { column1: 32, column2: 28, column3: 2 },
        { column1: 40, column2: 35.2, column3: 2.4 },
        { column1: 50, column2: 44, column3: 3 },
        { column1: 63, column2: 55.4, column3: 3.8 },
        { column1: 75, column2: 66, column3: 4.5 },
        { column1: 90, column2: 79.2, column3: 5.4 },
        { column1: 110, column2: 96.8, column3: 6.6 },
        { column1: 125, column2: 110.2, column3: 7.4 },
        { column1: 140, column2: 123.4, column3: 8.3 },
        { column1: 160, column2: 141, column3: 9.5 },
        { column1: 180, column2: 158.6, column3: 10.7 },
        { column1: 200, column2: 176.2, column3: 11.9 },
        { column1: 225, column2: 198.2, column3: 13.4 },
        { column1: 250, column2: 220.4, column3: 14.8 },
        { column1: 280, column2: 246.8, column3: 16.6 },
        { column1: 315, column2: 277.6, column3: 18.7 },
        { column1: 355, column2: 312.8, column3: 21.1 },
        { column1: 400, column2: 352.6, column3: 23.7 },
        { column1: 450, column2: 396.6, column3: 26.7 },
        { column1: 500, column2: 440.6, column3: 29.7 },
        { column1: 560, column2: 493.6, column3: 33.2 },
        { column1: 630, column2: 555.2, column3: 37.4 },
      ]);
    } else if (selectedValue === "SDR13.6-PN12.5"){
      setTableData([
        { column1: 25, column2: 21, column3: 2 },
        { column1: 32, column2: 27.2, column3: 2.4 },
        { column1: 40, column2: 34, column3: 3 },
        { column1: 50, column2: 42.6, column3: 3.7 },
        { column1: 63, column2: 53.6, column3: 4.7 },
        { column1: 75, column2: 63.8, column3: 5.6 },
        { column1: 90, column2: 76.6, column3: 6.7 },
        { column1: 110, column2: 93.8, column3: 8.1 },
        { column1: 125, column2: 106.6, column3: 9.2 },
        { column1: 140, column2: 119.4, column3: 10.3 },
        { column1: 160, column2: 136.4, column3: 11.8 },
        { column1: 180, column2: 153.4, column3: 13.3 },
        { column1: 200, column2: 170.6, column3: 14.7 },
        { column1: 225, column2: 191.8, column3: 16.6 },
        { column1: 250, column2: 213.2, column3: 18.4 },
        { column1: 280, column2: 238.8, column3: 20.6 },
        { column1: 315, column2: 268.6, column3: 23.2 },
        { column1: 355, column2: 302.8, column3: 26.1 },
        { column1: 400, column2: 341.2, column3: 29.4 },
        { column1: 450, column2: 483.8, column3: 33.1 },
        { column1: 500, column2: 426.4, column3: 36.8 },
        { column1: 560, column2: 477.6, column3: 41.2 },
        { column1: 630, column2: 537.4, column3: 46.3 },
      ]);
    } else if(selectedValue === "SDR11-PN16"){
      setTableData([
        { column1: 20, column2: 16, column3: 2 },
        { column1: 25, column2: 20.4, column3: 2.3 },
        { column1: 32, column2: 26, column3: 3 },
        { column1: 40, column2: 32.6, column3: 3.7 },
        { column1: 50, column2: 40.8, column3: 4.6 },
        { column1: 63, column2: 51.4, column3: 5.8 },
        { column1: 75, column2: 61.4, column3: 6.8 },
        { column1: 90, column2: 73.6, column3: 8.2 },
        { column1: 110, column2: 90, column3: 10 },
        { column1: 125, column2: 102.2, column3: 11.4 },
        { column1: 140, column2: 114.6, column3: 12.7 },
        { column1: 160, column2: 130.8, column3: 14.6 },
        { column1: 180, column2: 147.2, column3: 16.4 },
        { column1: 200, column2: 163.6, column3: 18.2 },
        { column1: 225, column2: 184, column3: 20.5 },
        { column1: 250, column2: 204.6, column3: 22.7 },
        { column1: 280, column2: 229.2, column3: 25.4 },
        { column1: 315, column2: 257.8, column3: 28.6 },
        { column1: 355, column2: 290.6, column3: 32.2 },
        { column1: 400, column2: 327.4, column3: 36.3 },
        { column1: 450, column2: 368.2, column3: 40.9 },
        { column1: 500, column2: 409.2, column3: 45.4 },
        { column1: 560, column2: 458.4, column3: 50.8 },
        { column1: 630, column2: 515.6, column3: 57.2 },
      ]);
    } else if (selectedValue === "SDR9-PN20"){
      setTableData([
        { column1: 20, column2: 15.4, column3: 2.3 },
        { column1: 25, column2: 19, column3: 3 },
        { column1: 32, column2: 24.8, column3: 3.6 },
        { column1: 40, column2: 31, column3: 4.5 },
        { column1: 50, column2: 38.8, column3: 5.6 },
        { column1: 63, column2: 48.8, column3: 7.1 },
        { column1: 75, column2: 58.2, column3: 8.4 },
        { column1: 90, column2: 69.8, column3: 10.1 },
        { column1: 110, column2: 85.4, column3: 12.3 },
        { column1: 125, column2: 97, column3: 14 },
        { column1: 140, column2: 108.6, column3: 15.7 },
        { column1: 160, column2: 124.2, column3: 17.9 },
        { column1: 180, column2: 139.8, column3: 20.1 },
        { column1: 200, column2: 155.2, column3: 22.4 },
        { column1: 225, column2: 174.6, column3: 25.2 },
        { column1: 250, column2: 194.2, column3: 27.9 },
        { column1: 280, column2: 217.4, column3: 31.3 },
        { column1: 315, column2: 244.6, column3: 35.2 },
        { column1: 355, column2: 275.6, column3: 39.7 },
        { column1: 400, column2: 310.6, column3: 44.7 },
        { column1: 450, column2: 349.4, column3: 50.3 },
        { column1: 500, column2: 388.4, column3: 55.8 },
        { column1: 560, column2: 435, column3: 62.5 },
        { column1: 630, column2: 489.4, column3: 70.3 },
      ]);
    } else if (selectedValue === "SDR7.4-PN25"){
      setTableData([
        { column1: 20, column2: 14, column3: 3 },
        { column1: 25, column2: 18, column3: 3.5 },
        { column1: 32, column2: 23.2, column3: 4.4 },
        { column1: 40, column2: 29, column3: 5.5 },
        { column1: 50, column2: 36.2, column3: 6.9 },
        { column1: 63, column2: 45.8, column3: 8.6 },
        { column1: 75, column2: 54.4, column3: 10.3 },
        { column1: 90, column2: 65.4, column3: 12.3 },
        { column1: 110, column2: 79.8, column3: 15.1 },
        { column1: 125, column2: 90.8, column3: 17.1 },
        { column1: 140, column2: 101.6, column3: 19.2 },
        { column1: 160, column2: 116.2, column3: 21.9 },
        { column1: 180, column2: 130.8, column3: 24.6 },
        { column1: 200, column2: 145.2, column3: 27.4 },
        { column1: 225, column2: 163.4, column3: 30.8 },
        { column1: 250, column2: 181.6, column3: 34.2 },
        { column1: 280, column2: 203.4, column3: 38.3 },
        { column1: 315, column2: 228.8, column3: 43.1 },
        { column1: 355, column2: 258, column3: 48.5 },
        { column1: 400, column2: 290.6, column3: 54.7 },
        { column1: 450, column2: 327, column3: 61.5 },
        { column1: 500, column2: 363.4, column3: 68.3 },
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
            <Link href="/products/Polypropylene/sewage/pipes">
              {selectedLanguage === "GEO" &&
                "პოლიპროპილენის საკანალიზაციო (PPR) მილები"}
              {selectedLanguage === "ENG" && "Polypropylene sewage (PPR) pipes"}
              {selectedLanguage === "RUS" &&
                "Полипропиленовая канализация (PPR) трубы"}
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
                პოლიეთილენის სასმელი წყლის და გაზის მილები
              </h1>
              <p>
                2017 წელს დამატებითი ინვესტიციის განხორციელებული შემდეგ ჩვენმა
                კომპანიამ, ასევე მაღალხარისხიანი დანადგარების მონტაჟის შემდეგ,
                დაიწყო სასმელი და გაზიფიგაციისთვის საჭირო პოლიეთილენის მილების
                წარმოება. მილების მოიცავს 20მმ - 500მმ ჩათვლით და PN6-დან
                PN25-ჩათვლით ყველა ატმოსფეროს.
              </p>
            </div>
            <div className="custom-select">
              <div className="selected-option" onClick={toggleOptions}>
                <span>
                {selectedOption}
                </span>
                <span className="dropdown-icon">
                  <img src="/assets/icons/arrow-up.svg" className={`${optionsVisible === true ? "rotate-0" : "rotate-180"}`} />
                </span>
              </div>
              {optionsVisible && (
                <div className="options-container">
                  <div
                    className="option"
                    onClick={() => handleOptionChange("SDR41-PN4")}
                  >
                    SDR41-PN4
                  </div>
                  <div
                    className="option"
                    onClick={() => handleOptionChange("SDR33-PN5")}
                  >
                    SDR33-PN5
                  </div>
                  <div
                    className="option"
                    onClick={() => handleOptionChange("SDR27-PN6")}
                  >
                    SDR27-PN6
                  </div>
                  <div
                    className="option"
                    onClick={() => handleOptionChange("SDR21-PN8")}
                  >
                    SDR21-PN8
                  </div>
                  <div
                    className="option"
                    onClick={() => handleOptionChange("SDR17.6-PN9.5")}
                  >
                    SDR17.6-PN9.5
                  </div>
                  <div
                    className="option"
                    onClick={() => handleOptionChange("SDR17-PN10")}
                  >
                    SDR17-PN10
                  </div>
                  <div
                    className="option"
                    onClick={() => handleOptionChange("SDR13.6-PN12.5")}
                  >
                    SDR13.6-PN12.5
                  </div>
                  <div
                    className="option"
                    onClick={() => handleOptionChange("SDR11-PN16")}
                  >
                    SDR11-PN16
                  </div>
                  <div
                    className="option"
                    onClick={() => handleOptionChange("SDR9-PN20")}
                  >
                    SDR9-PN20
                  </div>
                  <div
                    className="option"
                    onClick={() => handleOptionChange("SDR7.4-PN25")}
                  >
                    SDR7.4-PN25
                  </div>
                  {/* ... repeat for other options */}
                </div>
              )}
            </div>

            <div className="flex flex-col space-y-4 justify-center items-center lg:items-start">
             
              <table className="table-fixed">
                <thead>
                  <tr>
                    <th className="w-1/4 px-8 lg:px-12 py-2">
                      ID &#40;mm&#41;
                    </th>
                    <th className="w-1/4 px-8 lg:px-12 py-2">S &#40;mm&#41;</th>
                    <th className="w-1/2 px-10 lg:px-16 py-2">
                      L &#40;mm&#41;
                    </th>
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
