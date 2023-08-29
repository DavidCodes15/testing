"use client";
import { useState } from "react";

const page = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("GEO");
  async function handleSubmit(e){
    e.preventDefault();
    const form = e.currentTarget;
    console.log(form.elements.general.value);
    console.log(form.elements.generalEng.value);
    console.log(form.elements.generalRus.value);
    console.log(form.elements.first.value);
    console.log(form.elements.firstEng.value);
    console.log(form.elements.firstRus.value);
    console.log(form.elements.second.value);
    console.log(form.elements.secondEng.value);
    console.log(form.elements.secondRus.value);
    console.log(form.elements.third.value);
    console.log(form.elements.thirdEng.value);
    console.log(form.elements.thirdRus.value);
  }
  return (
    <>
      <div className="flex justify-between mt-[100px]">
        <div className="flex space-x-4">
          <button onClick={() => setSelectedLanguage("GEO")}>GEO</button>
          <button onClick={() => setSelectedLanguage("ENG")}>ENG</button>
          <button onClick={() => setSelectedLanguage("RUS")}>RUS</button>
        </div>
      </div>
      <section>
        <form onSubmit={handleSubmit} className="container mx-auto flex flex-col justify-center items-center space-y-8 mt-24 lg:mt-0">
          <div className="flex flex-col justify-center items-center space-y-4">
            <h1 className="font-bold text-2xl">
              {selectedLanguage === "GEO" && "ჩვენს შესახებ"}
              {selectedLanguage === "ENG" && "About Us"}
              {selectedLanguage === "RUS" && "о нас"}
            </h1>
            <p className="w-[760px] text-center">
              <span
                className={`${
                  selectedLanguage === "GEO" ? "visible" : "hidden"
                } w-[100%] text-black`}
              >
                <textarea
                  id="general"
                  name="general"
                  className="w-[100%] bg-transparent"
                  rows={5}
                  placeholder="2015 წელს რამოდენიმე მილიონიანი ინვესტიციის განხორციელების შემდეგ საქართველოში პირველად დაიწყო გოფრირებული მილების წარმოება. აღნიშნული ტიპის მილები გამოიყენება როგორც საკანალიზაციო ასევე საირიგაციო სისტემების მოსაწყობად.
                    "
                />
              </span>
              <span
                className={`${
                  selectedLanguage === "ENG" ? "visible" : "hidden"
                } w-[100%]`}
              >
                <textarea
                id="generalEng"
                name="generalEng"
                  className="w-[100%] bg-transparent"
                  rows={5}
                  placeholder="ENG წელს რამოდენიმე მილიონიანი ინვესტიციის განხორციელების შემდეგ საქართველოში პირველად დაიწყო გოფრირებული მილების წარმოება. აღნიშნული ტიპის მილები გამოიყენება როგორც საკანალიზაციო ასევე საირიგაციო სისტემების მოსაწყობად.
                    "
                />
              </span>
              <span
                className={`${
                  selectedLanguage === "RUS" ? "visible" : "hidden"
                } w-[100%]`}
              >
                <textarea
                id="generalRus"
                name="generalRus"
                  className="w-[100%] bg-transparent"
                  rows={5}
                  placeholder="RUS წელს რამოდენიმე მილიონიანი ინვესტიციის განხორციელების შემდეგ საქართველოში პირველად დაიწყო გოფრირებული მილების წარმოება. აღნიშნული ტიპის მილები გამოიყენება როგორც საკანალიზაციო ასევე საირიგაციო სისტემების მოსაწყობად.
                    "
                />
              </span>
            </p>
          </div>
          <div className="flex flex-col justify-center space-y-12">
            <div className="flex justify-center items-center space-x-0 space-y-4 fix-first-about flex-col lg:flex-row lg:space-x-6 lg:space-y-0">
              <img src="/assets/icons/about1.png" alt="first about us" />
              <p className="w-[717px] bg-[#ADD1FC] rounded-md px-8 py-12">
                <textarea
                id="first"
                name="first"
                className={`${selectedLanguage === "GEO" ? "visible" : "hidden"} w-full bg-transparent`}
                rows={5}
                placeholder="ჩვენს მიერ დამონტაჟდა მაღალხარისხიანი დანადგარები, რომლებიც უშვებს 100მმ - 1600მმ დიამეტრის ჩათვლით SN4, SN8 და SN12 გოფრირებულ მილებს."
                />
                <textarea
                id="firstEng"
                name="firstEng" 
                className={`${selectedLanguage === "ENG" ? "visible" : "hidden"} w-full bg-transparent`}
                rows={5}
                placeholder="ENG მიერ დამონტაჟდა მაღალხარისხიანი დანადგარები, რომლებიც უშვებს 100მმ - 1600მმ დიამეტრის ჩათვლით SN4, SN8 და SN12 გოფრირებულ მილებს."
                />
                <textarea 
                id="firstRus"
                name="firstRus"
                className={`${selectedLanguage === "RUS" ? "visible" : "hidden"} w-full bg-transparent`}
                rows={5}
                placeholder="RUS მიერ დამონტაჟდა მაღალხარისხიანი დანადგარები, რომლებიც უშვებს 100მმ - 1600მმ დიამეტრის ჩათვლით SN4, SN8 და SN12 გოფრირებულ მილებს."
                />
              </p>
            </div>

            <div className="flex justify-center items-center space-x-6 fix-second-about flex-col lg:flex-row lg:space-x-6 lg:space-y-0 lg:justify-center lg:items-center">
              <img src="/assets/icons/about3.png" alt="second about us" />
              <p className="w-[717px] bg-[#ADD1FC] rounded-md px-8 py-12">
                <textarea
                id="second"
                name="second"
                className={`${selectedLanguage === "GEO" ? "visible" : "hidden"} w-full bg-transparent`}
                rows={5}
                placeholder="2017 წელს დამატებითი ინვესტიციის განხორციელებული შემდეგ ჩვენმა კომპანიამ, ასევე მაღალხარისხიანი დანადგარების მონტაჟის შემდეგ, დაიწყო სასმელი და გაზიფიგაციისთვის საჭირო პოლიეთილენის მილების წარმოება. მილების მოიცავს 20მმ - 500მმ ჩათვლით და PN6-დან PN25-ჩათვლით ყველა ატმოსფეროს."
                />
                 <textarea
                 id="secondEng"
                 name="secondEng"
                className={`${selectedLanguage === "ENG" ? "visible" : "hidden"} w-full bg-transparent`}
                rows={5}
                placeholder="ENG წელს დამატებითი ინვესტიციის განხორციელებული შემდეგ ჩვენმა კომპანიამ, ასევე მაღალხარისხიანი დანადგარების მონტაჟის შემდეგ, დაიწყო სასმელი და გაზიფიგაციისთვის საჭირო პოლიეთილენის მილების წარმოება. მილების მოიცავს 20მმ - 500მმ ჩათვლით და PN6-დან PN25-ჩათვლით ყველა ატმოსფეროს."
                />
                 <textarea
                 id="secondRus"
                 name="secondRus"
                className={`${selectedLanguage === "RUS" ? "visible" : "hidden"} w-full bg-transparent`}
                rows={5}
                placeholder="RUS წელს დამატებითი ინვესტიციის განხორციელებული შემდეგ ჩვენმა კომპანიამ, ასევე მაღალხარისხიანი დანადგარების მონტაჟის შემდეგ, დაიწყო სასმელი და გაზიფიგაციისთვის საჭირო პოლიეთილენის მილების წარმოება. მილების მოიცავს 20მმ - 500მმ ჩათვლით და PN6-დან PN25-ჩათვლით ყველა ატმოსფეროს."
                />
              </p>
            </div>

            <div className="flex justify-center items-center space-x-6 flex-col fix-third-about lg:flex-row lg:space-x-6 lg:space-y-0">
              <img src="/assets/icons/about3.png" alt="third about us" />
              <p className="w-[717px] bg-[#ADD1FC] rounded-md px-8 py-12">
                <textarea 
                id="third"
                name="third"
                className={`${selectedLanguage === "GEO" ? "visible" : "hidden"} w-full bg-transparent`}
                rows={5}
                placeholder="წარმოებული პროდუქციის ხარისხსის მაღალი სტანდარტის უზრუნველსაყოფად, ტექნოლოგიურ პროცესს მთლიანად ხელმძღვანელობს თურქეთიდან მოწვეული მაღალკვალიფიციური სპეციალისტები, რომლებსაც ამ სფეროში აქვთ 30 წლიანი გამოცდილება."
                />
                <textarea 
                id="thirdEng"
                name="thirdEng"
                className={`${selectedLanguage === "ENG" ? "visible" : "hidden"} w-full bg-transparent`}
                rows={5}
                placeholder="ENGENG პროდუქციის ხარისხსის მაღალი სტანდარტის უზრუნველსაყოფად, ტექნოლოგიურ პროცესს მთლიანად ხელმძღვანელობს თურქეთიდან მოწვეული მაღალკვალიფიციური სპეციალისტები, რომლებსაც ამ სფეროში აქვთ 30 წლიანი გამოცდილება."
                />
                <textarea 
                id="thirdRus"
                name="thirdRus"
                className={`${selectedLanguage === "RUS" ? "visible" : "hidden"} w-full bg-transparent`}
                rows={5}
                placeholder="RUSRUS პროდუქციის ხარისხსის მაღალი სტანდარტის უზრუნველსაყოფად, ტექნოლოგიურ პროცესს მთლიანად ხელმძღვანელობს თურქეთიდან მოწვეული მაღალკვალიფიციური სპეციალისტები, რომლებსაც ამ სფეროში აქვთ 30 წლიანი გამოცდილება."
                />
              </p>
            </div>
          </div>
          <button type="submit" className="border-black border-solid border-[1px] rounded px-4 py-2 text-white bg-black">დაამატე</button>
        </form>
      </section>
    </>
  );
};

export default page;
