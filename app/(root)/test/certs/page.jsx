"use client";
import { useEffect, useState } from "react";

const page = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState("GEO");
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
  useEffect(() => {
    const fileInput = document.getElementById("certImage");
    fileInput.addEventListener("change", handleImageChange);
    return () => {
      fileInput.removeEventListener("change", handleImageChange);
    };
  }, []);
  async function handleSubmit(e){
    e.preventDefault();
    const form = e.currentTarget;
    const certificateName = form.elements.certName.value;
    const certificateNameEng = form.elements.certNameEng.value;
    const certificateNameRus = form.elements.certNameRus.value;
    const imageAlt = form.elements.imageAlt.value;
    console.log(certificateName);
    console.log(certificateNameEng);
    console.log(certificateNameRus);
    console.log(imageAlt);
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
      <section className="container mx-auto mt-[50px]">
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
            <div
              className="bg-[#ECF5FF] rounded px-4 py-2 relative flex flex-col justify-center items-center space-y-2"
            >
              <img
                className="w-[288px] h-[367px] rounded"
                src={selectedImage || "/assets/icons/certPlaceholder.svg"}
              />
              <div className="absolute top-0 right-5">
                  <label
                    htmlFor="certImage"
                    className="border-1 border-black border-solid px-4 py-2 rounded"
                  >
                    <img
                      className="cursor-pointer w-8 h-8"
                      src="/assets/icons/add.svg"
                    />
                  </label>
                  <input
                    type="file"
                    id="certImage"
                    name="certImage"
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                  />
                </div>
                {selectedImage !== null ? (
                    <input type="text" id="imageAlt" name="imageAlt" placeholder="ფოტოს ალტი" className="border-[1px] border-solid border-black rounded px-4 py-2" />
                ): (
                    null
                )}
              <span>
                 <input className={`${selectedLanguage === "GEO" ? "visible" : "hidden"} bg-transparent`} type="text" id="certName" name="certName" placeholder="სერთიფიკატის სახელი" />
                 <input className={`${selectedLanguage === "ENG" ? "visible" : "hidden"} bg-transparent`} type="text" id="certNameEng" name="certNameEng" placeholder="certificate Name" />
                 <input className={`${selectedLanguage === "RUS" ? "visible" : "hidden"} bg-transparent`} type="text" id="certNameRus" name="certNameRus" placeholder="certificate name Rus" />
              </span>
              <span className="flex flex-col space-y-2">
                <label className="flex justify-center items-center">id</label>
                <input className="bg-transparent border-[1px] border-black border-solid px-4 py-2 rounded" type="text" id="certId" name="certId" placeholder="მთავარი -- გვერდის"/>
              </span>
            </div>
            <button type="submit" className="text-white bg-black border-black border-[1px] border-solid rounded px-4 py-2">დაამატე</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default page;
