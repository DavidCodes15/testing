"use client";
import { useEffect, useState } from "react";
import "@/app/globals.css";
const page = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedPageImage, setSelectedPageImage] = useState(null);
  const [secondSelectedPageImage, setSecondSelectedPageImage] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState("GEO");
  const [blogPageText, setBlogPageText] = useState(
    "ეს არის სტატიის გვერდის კონკრეტული ტექსტი, სადაც იქნება დაწერილი სტატიის შინაარსი. სტატიის კარგად დაწერის უნარი უბრალოდ აუცილებელია სკოლის მოსწავლეებისა და სტუდენტებისთვის, ჟურნალისტებისთვის, მასწავლებლებისთვის და სხვა ტიპის მუშაკებისთვის. დღევანდელ მსოფლიოში, სადაც ინფორმაცია ყველაზე ძვირადღირებული საქონელია, კარგ სტატიის ავტორებს შეუძლიათ საკმაოდ ბევრი ფული გამოიმუშაონ თავიანთი სახლებიდან. ზოგჯერ მათი შემოსავალი ბევრად აღემატება სახელმწიფო და კომერციულ დაწესებულებებში მომუშავე ადამიანების შემოსავალს. კარგი სათაური ძალიან მნიშვნელოვანია სტატიისთვის. ის უნდა ასახავდეს მთელი ტექსტის შინაარსს და ამავდროულად მიიპყრო პოტენციური მკითხველის ყურადღება. თუ სტატია დაწერილია საიტისთვის, მაშინ მისი სათაური უნდა შეიცავდეს პოპულარულ საკვანძო სიტყვებს, რაც ხელს შეუწყობს სტატიის პოპულარიზაციას საძიებო სისტემებში."
  );
  // function handleImageChange (event){
  //     const imagePreview = document.getElementById('blogImage');
  //     const fileInput = event.target;

  //     if (fileInput.files && fileInput.files[0]) {
  //       const reader = new FileReader();

  //       reader.onload = function(e) {
  //         imagePreview.src = e.target.result;
  //       };

  //       reader.readAsDataURL(fileInput.files[0]);
  //     }
  //   };
  function handleImageChange(event) {
    const fileInput = event.target;

    if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();

      reader.onload = function (e) {
        setSelectedImage(e.target.result);
      };

      reader.readAsDataURL(fileInput.files[0]);
    }
  }
  function handlePageImageChange(event) {
    const pageFileInput = event.target;

    if (pageFileInput.files && pageFileInput.files[0]) {
      const reader = new FileReader();

      reader.onload = function (e) {
        setSelectedPageImage(e.target.result);
      };

      reader.readAsDataURL(pageFileInput.files[0]);
    }
  }
  function handleSecondPageImageChange(event) {
    const secondPageFileInput = event.target;

    if (secondPageFileInput.files && secondPageFileInput.files[0]) {
      const reader = new FileReader();

      reader.onload = function (e) {
        setSecondSelectedPageImage(e.target.result);
      };

      reader.readAsDataURL(secondPageFileInput.files[0]);
    }
  }
  useEffect(() => {
    const fileInput = document.getElementById("blogImage");
    fileInput.addEventListener("change", handleImageChange);

    const pageFileInput = document.getElementById("blogPageImage");
    pageFileInput.addEventListener("change", handlePageImageChange);

    const secondPageFileInput = document.getElementById("secondBlogPageImage");
    secondPageFileInput.addEventListener("change", handleSecondPageImageChange);

    return () => {
      fileInput.removeEventListener("change", handleImageChange);
      pageFileInput.removeEventListener("change", handlePageImageChange);
      secondPageFileInput.removeEventListener(
        "change",
        handleSecondPageImageChange
      );
    };
  }, []);

  return (
    <>
      <div className="flex justify-between mt-[100px]">
        <div className="flex space-x-4">
          <button onClick={() => setSelectedLanguage("GEO")}>GEO</button>
          <button onClick={() => setSelectedLanguage("ENG")}>ENG</button>
          <button onClick={() => setSelectedLanguage("RUS")}>RUS</button>
        </div>
      </div>

      <section className="container mx-auto mt-[100px]">
        <div>
          <form className="flex flex-col justify-center items-center">
            <div className="relative border-black border-solid border-[0.8px] rounded-[0.9rem] flex flex-col justify-start space-y-4 py-0 w-[488px]">
              <div className="relative flex justify-center items-center">
                <img
                  className="w-[488px] h-[300]"
                  src={selectedImage || "/assets/icons/blogPlaceholder.jpg"}
                />
                <div className="absolute top-5 right-5">
                  <label
                    htmlFor="blogImage"
                    className="border-1 border-black border-solid px-4 py-2 rounded"
                  >
                    <img
                      className="cursor-pointer w-10 h-10"
                      src="/assets/icons/add.svg"
                    />
                  </label>
                  <input
                    type="file"
                    id="blogImage"
                    name="blogImage"
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                  />
                </div>
              </div>
              {selectedImage !== null ? (
                <input
                  className="border-[1px] border-solid border-black rounded px-4 py-2"
                  type="text"
                  id="blogImageAlt"
                  name="blogImageAlt"
                  placeholder="დაამატე ფოტოს ალტი"
                />
              ) : null}
              <div className="flex flex-col justify-end space-y-2 px-2">
                <div>
                {selectedLanguage === "GEO" && (
                    <input className="text-base" placeholder="სტატიის სათაური" />
                )}
                {selectedLanguage === "ENG" && (
                    <input className="text-base" placeholder="სტატიის სათაური ENG" />
                )}
                {selectedLanguage === "RUS" && (
                    <input className="text-base" placeholder="სტატიის სათაური RUS" />
                )}
                </div>
                <div>
                {selectedLanguage === "GEO" && (
                    <input className="text-base" placeholder="#ტაგი" />
                )}
                {selectedLanguage === "ENG" && (
                    <input className="text-base" placeholder="#ტაგი ინგლისურად" />
                )}
                {selectedLanguage === "RUS" && (
                    <input className="text-base" placeholder="#ტაგი რუსულად" />
                )}
                </div>
                <div className="flex justify-between mb-6">
                  <span className="text-base flex justify-center items-center space-x-2">
                    <span className="text-sm lg:text-base flex justify-center items-center space-x-2">
                      <span>
                        <img
                          className="w-[15px] h-[15px]"
                          src="/assets/icons/eye.png"
                          alt="views"
                        />
                      </span>
                      <span>16 ნახვა</span>
                    </span>
                  </span>
                  {selectedLanguage === "GEO" && (
                    <input className="text-base" placeholder="თარიღი" />
                  )}
                  {selectedLanguage === "ENG" && (
                    <input className="text-base" placeholder="თარიღი ინგლისურად" />
                  )}
                  {selectedLanguage === "RUS" && (
                    <input className="text-base" placeholder="თარიღი რუსულად" />
                  )}
                </div>
              </div>
            </div>
            <div
              id="specificBlog"
              className="container mx-auto mt-[100px] px-4"
            >
              <h2 className="font-bold text-2xl mb-12 flex justify-center items-center">
                სტატიის გვერდი
              </h2>
              <div className="relative flex flex-col justify-center items-start">
                <div>
                  <img
                    className="max-h-[400px] max-w-[1260px]"
                    src={
                      selectedPageImage ||
                      "/assets/icons/blogSpecificPlaceholder.png"
                    }
                  />
                  <div className="absolute top-5 right-5">
                    <label
                      htmlFor="blogPageImage"
                      className="border-1 border-black border-solid px-4 py-2 rounded"
                    >
                      <img
                        className="cursor-pointer w-10 h-10"
                        src="/assets/icons/add.svg"
                      />
                    </label>
                    <input
                      type="file"
                      id="blogPageImage"
                      name="blogPageImage"
                      style={{ display: "none" }}
                      onChange={handlePageImageChange}
                    />
                  </div>
                </div>
                {selectedPageImage !== null ? (
                  <input
                    className="mt-5 border-[1px] border-solid border-black rounded px-4 py-2"
                    type="text"
                    id="blogPageImageAlt"
                    name="blogPageImageAlt"
                    placeholder="დაამატე ფოტოს ალტი"
                  />
                ) : null}
                <div className="flex flex-col justify-center items-start w-full">
                 {selectedLanguage === "GEO" && (
                    <>
                    <textarea
                    className="border-transparent border-2 border-solid w-full"
                    rows={8}
                    placeholder={blogPageText}
                  />
                  <input type="text" id="linkGeo" name="linkGeo" placeholder="ლინკი ტექსტისთვის" className="w-fit-content border-black border-solid border-[1px] rounded px-4 py-2"/>
                  </>
                 )}
                {selectedLanguage === "ENG" && (
                    <>
                    <textarea
                    className="border-transparent border-2 border-solid w-full"
                    rows={8}
                    placeholder="ENG"
                  />
                  <input type="text" id="linkEng" name="linkEng" placeholder="ლინკი ტექსტისთვის" className="border-black border-solid border-[1px] rounded px-4 py-2"/>
                  </>
                 )}
                 {selectedLanguage === "RUS" && (
                    <>
                    <textarea
                    className="border-transparent border-2 border-solid w-full"
                    rows={8}
                    placeholder="RUS"
                  />
                  <input type="text" id="linkRus" name="linkRus" placeholder="ლინკი ტექსტისთვის" className="border-black border-solid border-[1px] rounded px-4 py-2"/>
                  </>
                 )}
                </div>
                <div className="flex justify-start items-start flex-col space-x-0 space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
                  <div className="w-full lg:w-1/2">
                    {selectedLanguage === "GEO" && (
                        <>
                         <textarea
                         className="border-transparent px-4 py-2 border-2 border-solid w-full"
                         rows={10}
                         placeholder="ტრანსპორტი (ლათ. trans - გადაღმა, და portare - ზიდვა) — ერთობლიობა საშუალებების, რომელთა დანიშნულება ადამიანების, ტვირთის და ინფორმაციის ერთი ადგილიდან მეორეში გადატანაა. სატრანსპორტო ინდუსტრია სამ მთავარ კომპონენტად იყოფა: ინფრასტრუქტურად, მანქანებად და მართვად. ინფრასტრუქტურა მოიცავს ტრანსპორტისთვის საჭირო უძრავ კონსტრუქციებს, მათ შორის საავტომობილო გზებს, რკინიგზებს, საჰაერო გზებს, არხებს, სადენებს ან ტერმინალებს, როგორიცაა აეროპორტები, რკინიგზის, საავტომობილო და საზღვაო სადგურები. მანქანები, რომლებიც. საჰაეროში - საავიაციო ტრანსპორტი.
                           დანიშნულების მიხედვით ტრანსპორტი იყოფა საერთო (რომელიც ემსახურება მოსახლეობას), არასაერთო (შიდასამრეწველო გადაზიდვები) და პირადი სარგებლობის ტრანსპორტად."
                       />
                       <input type="text" id="secondLinkGeo" name="secondLinkGeo" placeholder="ლინკი ტექსტისთვის" className="border-black border-solid border-[1px] rounded px-4 py-2"/>
                       </>
                    )}
                    {selectedLanguage === "ENG" && (
                        <>
                         <textarea
                         className="border-transparent px-4 py-2 border-2 border-solid w-full"
                         rows={10}
                         placeholder="ENG ტრანსპორტი (ლათ. trans - გადაღმა, და portare - ზიდვა) — ერთობლიობა საშუალებების, რომელთა დანიშნულება ადამიანების, ტვირთის და ინფორმაციის ერთი ადგილიდან მეორეში გადატანაა. სატრანსპორტო ინდუსტრია სამ მთავარ კომპონენტად იყოფა: ინფრასტრუქტურად, მანქანებად და მართვად. ინფრასტრუქტურა მოიცავს ტრანსპორტისთვის საჭირო უძრავ კონსტრუქციებს, მათ შორის საავტომობილო გზებს, რკინიგზებს, საჰაერო გზებს, არხებს, სადენებს ან ტერმინალებს, როგორიცაა აეროპორტები, რკინიგზის, საავტომობილო და საზღვაო სადგურები. მანქანები, რომლებიც. საჰაეროში - საავიაციო ტრანსპორტი.
                           დანიშნულების მიხედვით ტრანსპორტი იყოფა საერთო (რომელიც ემსახურება მოსახლეობას), არასაერთო (შიდასამრეწველო გადაზიდვები) და პირადი სარგებლობის ტრანსპორტად."
                       />
                       <input type="text" id="secondLinkEng" name="secondLinkEng" placeholder="ლინკი ტექსტისთვის" className="border-black border-solid border-[1px] rounded px-4 py-2"/>
                       </>
                    )}
                    {selectedLanguage === "RUS" && (
                        <>
                         <textarea
                         className="border-transparent px-4 py-2 border-2 border-solid w-full"
                         rows={10}
                         placeholder="RUs ტრანსპორტი (ლათ. trans - გადაღმა, და portare - ზიდვა) — ერთობლიობა საშუალებების, რომელთა დანიშნულება ადამიანების, ტვირთის და ინფორმაციის ერთი ადგილიდან მეორეში გადატანაა. სატრანსპორტო ინდუსტრია სამ მთავარ კომპონენტად იყოფა: ინფრასტრუქტურად, მანქანებად და მართვად. ინფრასტრუქტურა მოიცავს ტრანსპორტისთვის საჭირო უძრავ კონსტრუქციებს, მათ შორის საავტომობილო გზებს, რკინიგზებს, საჰაერო გზებს, არხებს, სადენებს ან ტერმინალებს, როგორიცაა აეროპორტები, რკინიგზის, საავტომობილო და საზღვაო სადგურები. მანქანები, რომლებიც. საჰაეროში - საავიაციო ტრანსპორტი.
                           დანიშნულების მიხედვით ტრანსპორტი იყოფა საერთო (რომელიც ემსახურება მოსახლეობას), არასაერთო (შიდასამრეწველო გადაზიდვები) და პირადი სარგებლობის ტრანსპორტად."
                       />
                       <input type="text" id="secondLinkRus" name="secondLinkRus" placeholder="ლინკი ტექსტისთვის" className="border-black border-solid border-[1px] rounded px-4 py-2"/>
                       </>
                    )}
                  </div>
                  <div className="relative w-full lg:w-1/2">
                    <img
                      className="w-full"
                      src={
                        secondSelectedPageImage ||
                        "/assets/icons/secondSpecificPlaceholder.png"
                      }
                    />
                    <div className="absolute top-5 right-5">
                      <label
                        htmlFor="secondBlogPageImage"
                        className="border-1 border-black border-solid px-4 py-2 rounded"
                      >
                        <img
                          className="cursor-pointer w-10 h-10"
                          src="/assets/icons/add.svg"
                        />
                      </label>
                      <input
                        type="file"
                        id="secondBlogPageImage"
                        name="secondBlogPageImage"
                        style={{ display: "none" }}
                        onChange={handleSecondPageImageChange}
                      />
                    </div>
                  </div>
                </div>
                {secondSelectedPageImage !== null ? (
                  <div className="mt-5 w-full flex justify-end items-center">
                    <input
                      className="border-[1px] border-solid border-black rounded px-4 py-2"
                      type="text"
                      id="secondBlogImageAlt"
                      name="secondBlogImageAlt"
                      placeholder="დაამატე ფოტოს ალტი"
                    />
                  </div>
                ) : null}
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default page;
