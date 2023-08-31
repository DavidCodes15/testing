"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const aboutPage = () => {
  const { data: session } = useSession();
  const [fetched, setFetched] = useState(false);
  const [texts, setTexts] = useState([]);
  const [adding, setAdding] = useState(false);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const fetchTexts = async () => {
      try {
        const res = await fetch("/api/about");
        const data = await res.json();
        setTexts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setFetched(true);
      }
    };
    fetchTexts();
  }, []);
  async function handleSubmit(e) {
    e.preventDefault();
    setAdding(true);
    const form = e.currentTarget;
    const generalText = form.elements.general.value;
    const firstText = form.elements.first.value;
    const secondText = form.elements.second.value;
    const thirdText = form.elements.third.value;
    const generalEngText = form.elements.generalEng.value;
    const firstEngText = form.elements.firstEng.value;
    const secondEngText = form.elements.secondEng.value;
    const thirdEngText = form.elements.thirdEng.value;
    const generalRusText = form.elements.generalRus.value;
    const firstRusText = form.elements.firstRus.value;
    const secondRusText = form.elements.secondRus.value;
    const thirdRusText = form.elements.thirdRus.value;

    sendToBackEnd(
      generalText,
      firstText,
      secondText,
      thirdText,
      generalEngText,
      firstEngText,
      secondEngText,
      thirdEngText,
      generalRusText,
      firstRusText,
      secondRusText,
      thirdRusText
    );
  }
  async function sendToBackEnd(
    generalText,
    firstText,
    secondText,
    thirdText,
    generalEngText,
    firstEngText,
    secondEngText,
    thirdEngText,
    generalRusText,
    firstRusText,
    secondRusText,
    thirdRusText
  ) {
    try {
      await fetch("/api/about/new", {
        method: "POST",
        body: JSON.stringify({
          generalText,
          firstText,
          secondText,
          thirdText,
          generalEngText,
          firstEngText,
          secondEngText,
          thirdEngText,
          generalRusText,
          firstRusText,
          secondRusText,
          thirdRusText,
        }),
      });
    } catch (error) {
      console.log(error);
    } finally {
      console.log("finally added the text");
      window.location.reload();
    }
  }
  const handleDelete = async (id) => {
    try {
      await fetch(`/api/about/delete/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.log(error);
    } finally {
      console.log("finally deleted the text");
      window.location.reload();
    }
  };
  return (
    <>
      {session?.user ? (
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
          <button type="submit" className="border-black border-solid border-[1px] rounded px-4 py-2 text-white bg-black">
            {adding ? "პროცესშია..." : "დაამატე"}
          </button>
        </form>
      </section>
          {fetched === true ? (
            <>
              <section className="container px-5 mt-[200px]">
                <div className="flex justify-start items-center px-4">
                  {texts.map((text, index) => (
                    <div
                      key={index}
                      className="relative flex flex-col justify-center items-start py-6 px-4 space-y-6"
                    >
                      <div className="flex flex-col justify-center items-start space-y-4">
                        <span>ზოგადი</span>
                        <p>{text.generalText}</p>
                      </div>
                      <div className="flex flex-col justify-center items-start space-y-4">
                        <span>პირველი ტექსტი</span>
                        <p>{text.firstText}</p>
                      </div>
                      <div className="flex flex-col justify-center items-start space-y-4">
                        <span>მეორე ტექსტი</span>
                        <p>{text.secondText}</p>
                      </div>
                      <div className="flex flex-col justify-center items-start space-y-4">
                        <span>მესამე ტექსტი</span>
                        <p>{text.thirdText}</p>
                      </div>
                      <button
                        onClick={() => handleDelete(text._id)}
                        className="bg-black border-black border-solid border-[1px] rounded px-4 py-2 text-red-600 absolute top-0 right-0"
                      >
                        {deleting === true ? "იშლება..." : "წაშალე"}
                      </button>
                    </div>
                  ))}
                </div>
              </section>
            </>
          ) : null}
        </>
      ) : null}
    </>
  );
};

export default aboutPage;
