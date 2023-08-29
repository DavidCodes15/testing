"use client";
import { useEffect, useState, useRef } from "react";
import "@/public/styles/certCarousel.css";
import { useSession } from "next-auth/react";
import "@/app/globals.css";
import Link from "next/link";
const page = () => {
  const { data: session } = useSession();
  const [fetched, setFetched] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [adding, setAdding] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedPageImage, setSelectedPageImage] = useState(null);
  const [secondSelectedPageImage, setSecondSelectedPageImage] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState("GEO");
  const [blogPageText, setBlogPageText] = useState(
    "ეს არის სტატიის გვერდის კონკრეტული ტექსტი, სადაც იქნება დაწერილი სტატიის შინაარსი. სტატიის კარგად დაწერის უნარი უბრალოდ აუცილებელია სკოლის მოსწავლეებისა და სტუდენტებისთვის, ჟურნალისტებისთვის, მასწავლებლებისთვის და სხვა ტიპის მუშაკებისთვის. დღევანდელ მსოფლიოში, სადაც ინფორმაცია ყველაზე ძვირადღირებული საქონელია, კარგ სტატიის ავტორებს შეუძლიათ საკმაოდ ბევრი ფული გამოიმუშაონ თავიანთი სახლებიდან. ზოგჯერ მათი შემოსავალი ბევრად აღემატება სახელმწიფო და კომერციულ დაწესებულებებში მომუშავე ადამიანების შემოსავალს. კარგი სათაური ძალიან მნიშვნელოვანია სტატიისთვის. ის უნდა ასახავდეს მთელი ტექსტის შინაარსს და ამავდროულად მიიპყრო პოტენციური მკითხველის ყურადღება. თუ სტატია დაწერილია საიტისთვის, მაშინ მისი სათაური უნდა შეიცავდეს პოპულარულ საკვანძო სიტყვებს, რაც ხელს შეუწყობს სტატიის პოპულარიზაციას საძიებო სისტემებში."
  );
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
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blogs/all");
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.log(error);
      } finally {
        setFetched(true);
      }
    };
    fetchBlogs();
  }, []);
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const handleNext = () => {
    const lastIndex = blogs.length - 1;
    setCurrentIndex((prevIndex) =>
      prevIndex < lastIndex ? prevIndex + 1 : lastIndex
    );
  };
  function processLinkText(text, linkUrl) {
    const regex = /\((.*?)\)/g;
    const processedText = text.replace(regex, `<a href="${linkUrl}">$1</a>`);
    return processedText;
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setAdding(true);
    const form = e.currentTarget;

    // first one
    const fileInput = Array.from(form.elements).find(
      ({ name }) => name === "blog"
    );
    const formData = new FormData();
    for (const file of fileInput.files) {
      formData.append("file", file);
    }
    formData.append("upload_preset", process.env.NEXT_PUBLIC_UPLOAD_PRESET);
    const blogData = await fetch(
      "https://api.cloudinary.com/v1_1/dvp84pcrp/image/upload",
      {
        method: "POST",
        body: formData,
      }
    ).then((r) => r.json());

    //second one
    const secondFileInput = Array.from(form.elements).find(
      ({ name }) => name === "secondBlog"
    );
    const secondFormData = new FormData();
    for (const file of secondFileInput.files) {
      secondFormData.append("file", file);
    }
    secondFormData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_UPLOAD_PRESET
    );
    const secondBlogData = await fetch(
      "https://api.cloudinary.com/v1_1/dvp84pcrp/image/upload",
      {
        method: "POST",
        body: secondFormData,
      }
    ).then((r) => r.json());

    // third one
    const thirdFileInput = Array.from(form.elements).find(
      ({ name }) => name === "thirdBlog"
    );
    const thirdFormData = new FormData();
    for (const file of thirdFileInput.files) {
      thirdFormData.append("file", file);
    }
    thirdFormData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_UPLOAD_PRESET
    );
    const thirdBlogData = await fetch(
      "https://api.cloudinary.com/v1_1/dvp84pcrp/image/upload",
      {
        method: "POST",
        body: thirdFormData,
      }
    ).then((r) => r.json());

    const blogImageName = blogData.original_filename;
    const blogImageUrl = blogData.secure_url;
    const blogImagePublicId = blogData.public_id;
    const blogPageImageName = secondBlogData.original_filename;
    const blogPageImageUrl = secondBlogData.secure_url;
    const blogPageImagePublicId = secondBlogData.public_id;
    const secondBlogPageImageName = thirdBlogData.original_filename;
    const secondBlogPageImageUrl = thirdBlogData.secure_url;
    const secondBlogPageImagePublicId = thirdBlogData.public_id;

    const blogImageAlt = form.elements.blogImageAlt.value;
    const blogPageImageAlt = form.elements.blogPageImageAlt.value;
    const secondBlogPageImageAlt = form.elements.secondBlogImageAlt.value;
    const blogTitle = form.elements.blogTitle.value;
    const blogTag = form.elements.blogTag.value;
    const blogDate = form.elements.blogDate.value;
    const blogText = form.elements.message.value;
    const secondBlogText = form.elements.secondMessage.value;

    const blogTitleEng = form.elements.blogTitleEng.value;
    const blogTagEng = form.elements.blogTagEng.value;
    const blogDateEng = form.elements.blogDateEng.value;
    const blogTextEng = form.elements.messageEng.value;
    const secondBlogTextEng = form.elements.secondMessageEng.value;

    const blogTitleRus = form.elements.blogTitleRus.value;
    const blogTagRus = form.elements.blogTagRus.value;
    const blogDateRus = form.elements.blogDateRus.value;
    const blogTextRus = form.elements.messageRus.value;
    const secondBlogTextRus = form.elements.secondMessageRus.value;

    const linkGeo = form.elements.linkGeo.value;
    const linkEng = form.elements.linkEng.value;
    const linkRus = form.elements.linkRus.value;
    const secondLinkGeo = form.elements.secondLinkGeo.value;
    const secondLinkEng = form.elements.secondLinkEng.value;
    const secondLinkRus = form.elements.secondLinkRus.value;

    const processedBlogText = processLinkText(blogText, linkGeo);
    const processedBlogTextEng = processLinkText(blogTextEng, linkEng);
    const processedBlogTextRus = processLinkText(blogTextRus, linkRus);
    console.log("1", processedBlogText);
    console.log("2", processedBlogTextEng);
    console.log("2", processedBlogTextRus);
    const secondProcessedBlogText = processLinkText(
      secondBlogText,
      secondLinkGeo
    );
    const secondProcessedBlogTextEng = processLinkText(
      secondBlogTextEng,
      secondLinkEng
    );
    const secondProcessedBlogTextRus = processLinkText(
      secondBlogTextRus,
      secondLinkRus
    );
    console.log("1", secondProcessedBlogText);
    console.log("2", secondProcessedBlogTextEng);
    console.log("2", secondProcessedBlogTextRus);

    sendToBackend(
      blogImageName,
      blogImageUrl,
      blogImagePublicId,
      blogImageAlt,
      blogTitle,
      blogTag,
      blogDate,
      blogTitleEng,
      blogTagEng,
      blogDateEng,
      blogTitleRus,
      blogTagRus,
      blogDateRus,
      blogPageImageName,
      blogPageImageUrl,
      blogPageImagePublicId,
      blogPageImageAlt,
      secondBlogPageImageName,
      secondBlogPageImageUrl,
      secondBlogPageImagePublicId,
      secondBlogPageImageAlt
    );
    sendToBlogPageText(
      processedBlogText,
      processedBlogTextEng,
      processedBlogTextRus,
      secondProcessedBlogText,
      secondProcessedBlogTextEng,
      secondProcessedBlogTextRus,
      blogImagePublicId
    );
  }
  async function sendToBackend(
    blogImageName,
    blogImageUrl,
    blogImagePublicId,
    blogImageAlt,
    blogTitle,
    blogTag,
    blogDate,
    blogTitleEng,
    blogTagEng,
    blogDateEng,
    blogTitleRus,
    blogTagRus,
    blogDateRus,
    blogPageImageName,
    blogPageImageUrl,
    blogPageImagePublicId,
    blogPageImageAlt,
    secondBlogPageImageName,
    secondBlogPageImageUrl,
    secondBlogPageImagePublicId,
    secondBlogPageImageAlt
  ) {
    try {
      const blogUpload = await fetch("/api/blogs/new", {
        method: "POST",
        body: JSON.stringify({
          blogImageName,
          blogImageUrl,
          blogImagePublicId,
          blogImageAlt,
          blogTitle,
          blogTag,
          blogDate,
          blogTitleEng,
          blogTagEng,
          blogDateEng,
          blogTitleRus,
          blogTagRus,
          blogDateRus,
          blogPageImageName,
          blogPageImageUrl,
          blogPageImagePublicId,
          blogPageImageAlt,
          secondBlogPageImageName,
          secondBlogPageImageUrl,
          secondBlogPageImagePublicId,
          secondBlogPageImageAlt,
        }),
      }).then((r) => r.json());
      if (blogUpload.ok) {
        console.log("blog upload was ok");
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.log("finally added blog");
    }
  }
  async function sendToBlogPageText(
    processedBlogText,
    processedBlogTextEng,
    processedBlogTextRus,
    secondProcessedBlogText,
    secondProcessedBlogTextEng,
    secondProcessedBlogTextRus,
    blogImagePublicId
  ) {
    try {
      await fetch("/api/blogs/texts/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
        body: JSON.stringify({
          processedBlogText,
          processedBlogTextEng,
          processedBlogTextRus,
          secondProcessedBlogText,
          secondProcessedBlogTextEng,
          secondProcessedBlogTextRus,
          blogImagePublicId,
        }),
      }).then((r) => r.json());
    } catch (error) {
      console.log(error);
    } finally {
      window.location.reload();
    }
  }
    const handleDelete = async (id, publicId, secondPublicId, thirdPublicId) => {
      try {
        setDeleting(true);
        await fetch(`/api/blogs/delete/${id}`, {
          method: "DELETE",
          body: JSON.stringify({
            publicId,
            secondPublicId,
            thirdPublicId,
          }),
        });
      } catch (error) {
        console.log(error);
      } finally {
        console.log("finally deleted");
        window.location.reload();
      }
    };
  return (
    <>
      {session?.user ? (
        <>
          <section className="container px-12 mt-5">
            <div className="flex justify-start items-center">
              <Link className="text-[#1A3DA7]" href="/admin/blogs/text">
              დაამატე მთავარი გვერდის ტექსტი
              </Link>
            </div>
          </section>
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
          <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
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
                    id="blog"
                    name="blog"
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
              
                    <input type="text" id="blogTitle" name="blogTitle" className={`${selectedLanguage === "GEO" ? "visible" : "hidden"} text-base`} placeholder="სტატიის სათაური" />
                    <input type="text" id="blogTitleEng" name="blogTitleEng" className={`${selectedLanguage === "ENG" ? "visible" : "hidden"} text-base`} placeholder="სტატიის სათაური ENG" />
                    <input type="text" id="blogTitleRus" name="blogTitleRus" className={`${selectedLanguage === "RUS" ? "visible" : "hidden"} text-base`} placeholder="სტატიის სათაური RUS" />
                </div>
                <div>
                {selectedLanguage === "GEO" && (
                    <input type="text" id="blogTag" name="blogTag" className="text-base" placeholder="#ტაგი" />
                )}
                {selectedLanguage === "ENG" && (
                    <input type="text" id="blogTagEng" name="blogTagEng" className="text-base" placeholder="#ტაგი ინგლისურად" />
                )}
                {selectedLanguage === "RUS" && (
                    <input type="text" id="blogTagRus" name="blogTagRus" className="text-base" placeholder="#ტაგი რუსულად" />
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
                  
                    <input type="text" id="blogDate" name="blogDate" className={`${selectedLanguage === "GEO" ? "visible" : "hidden"} text-base`} placeholder="თარიღი" />
                 
                 
                    <input type="text" id="blogDateEng" name="blogDateRus" className={`${selectedLanguage === "ENG" ? "visible" : "hidden"} text-base`} placeholder="თარიღი ინგლისურად" />
                 
                 
                    <input type="text" id="blogDateRus" name="blogDateRus" className={`${selectedLanguage === "RUS" ? "visible" : "hidden"} text-base`} placeholder="თარიღი რუსულად" />
                  
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
                      id="secondBlog"
                      name="secondBlog"
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
                 
                    <>
                    <textarea
                    className={`${selectedLanguage === "GEO" ? "visible" : "hidden"} border-transparent border-2 border-solid w-full`}
                    rows={8}
                    placeholder={blogPageText}
                  />
                  <input type="text" id="linkGeo" name="linkGeo" placeholder="ლინკი ტექსტისთვის" className={`${selectedLanguage === "RUS" ? "visible" : "hidden"} border-black border-solid border-[1px] rounded px-4 py-2`} />
                  </>
               
               
                    <>
                    <textarea
                    className={`${selectedLanguage === "ENG" ? "visible" : "hidden"} border-transparent border-2 border-solid w-full`}
                    rows={8}
                    placeholder="ENG"
                  />
                  <input type="text" id="linkEng" name="linkEng" placeholder="ლინკი ტექსტისთვის" className={`${selectedLanguage === "ENG" ? "visible" : "hidden"} border-black border-solid border-[1px] rounded px-4 py-2`} />
                  </>
                    <span>
                    <textarea
                    className={`${selectedLanguage === "RUS" ? "visible" : "hidden"} border-transparent border-2 border-solid w-full`}
                    rows={8}
                    placeholder="RUS"
                  />
                  <input type="text" id="linkRus" name="linkRus" placeholder="ლინკი ტექსტისთვის" className={`${selectedLanguage === "RUS" ? "visible" : "hidden"} border-black border-solid border-[1px] rounded px-4 py-2`} />
                  </span>
                </div>
                <div className="flex justify-start items-start flex-col space-x-0 space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
                <div className="w-full lg:w-1/2">
                    
                        <span className={`${selectedLanguage === "GEO" ? "visible" : "hidden"}`}>
                         <textarea
                         className="border-transparent px-4 py-2 border-2 border-solid w-full"
                         rows={10}
                         placeholder="ტრანსპორტი (ლათ. trans - გადაღმა, და portare - ზიდვა) — ერთობლიობა საშუალებების, რომელთა დანიშნულება ადამიანების, ტვირთის და ინფორმაციის ერთი ადგილიდან მეორეში გადატანაა. სატრანსპორტო ინდუსტრია სამ მთავარ კომპონენტად იყოფა: ინფრასტრუქტურად, მანქანებად და მართვად. ინფრასტრუქტურა მოიცავს ტრანსპორტისთვის საჭირო უძრავ კონსტრუქციებს, მათ შორის საავტომობილო გზებს, რკინიგზებს, საჰაერო გზებს, არხებს, სადენებს ან ტერმინალებს, როგორიცაა აეროპორტები, რკინიგზის, საავტომობილო და საზღვაო სადგურები. მანქანები, რომლებიც. საჰაეროში - საავიაციო ტრანსპორტი.
                           დანიშნულების მიხედვით ტრანსპორტი იყოფა საერთო (რომელიც ემსახურება მოსახლეობას), არასაერთო (შიდასამრეწველო გადაზიდვები) და პირადი სარგებლობის ტრანსპორტად."
                       />
                       <input type="text" id="secondLinkGeo" name="secondLinkGeo" placeholder="ლინკი ტექსტისთვის" className="border-black border-solid border-[1px] rounded px-4 py-2"/>
                       </span>
                   
                    
                        <span className={`${selectedLanguage === "GEO" ? "visible" : "hidden"}`}> 
                         <textarea
                         className="border-transparent px-4 py-2 border-2 border-solid w-full"
                         rows={10}
                         placeholder="ENG ტრანსპორტი (ლათ. trans - გადაღმა, და portare - ზიდვა) — ერთობლიობა საშუალებების, რომელთა დანიშნულება ადამიანების, ტვირთის და ინფორმაციის ერთი ადგილიდან მეორეში გადატანაა. სატრანსპორტო ინდუსტრია სამ მთავარ კომპონენტად იყოფა: ინფრასტრუქტურად, მანქანებად და მართვად. ინფრასტრუქტურა მოიცავს ტრანსპორტისთვის საჭირო უძრავ კონსტრუქციებს, მათ შორის საავტომობილო გზებს, რკინიგზებს, საჰაერო გზებს, არხებს, სადენებს ან ტერმინალებს, როგორიცაა აეროპორტები, რკინიგზის, საავტომობილო და საზღვაო სადგურები. მანქანები, რომლებიც. საჰაეროში - საავიაციო ტრანსპორტი.
                           დანიშნულების მიხედვით ტრანსპორტი იყოფა საერთო (რომელიც ემსახურება მოსახლეობას), არასაერთო (შიდასამრეწველო გადაზიდვები) და პირადი სარგებლობის ტრანსპორტად."
                       />
                       <input type="text" id="secondLinkEng" name="secondLinkEng" placeholder="ლინკი ტექსტისთვის" className="border-black border-solid border-[1px] rounded px-4 py-2"/>
                       </span>
                    
                   
                        <span className={`${selectedLanguage === "GEO" ? "visible" : "hidden"}`}>
                         <textarea
                         className="border-transparent px-4 py-2 border-2 border-solid w-full"
                         rows={10}
                         placeholder="RUs ტრანსპორტი (ლათ. trans - გადაღმა, და portare - ზიდვა) — ერთობლიობა საშუალებების, რომელთა დანიშნულება ადამიანების, ტვირთის და ინფორმაციის ერთი ადგილიდან მეორეში გადატანაა. სატრანსპორტო ინდუსტრია სამ მთავარ კომპონენტად იყოფა: ინფრასტრუქტურად, მანქანებად და მართვად. ინფრასტრუქტურა მოიცავს ტრანსპორტისთვის საჭირო უძრავ კონსტრუქციებს, მათ შორის საავტომობილო გზებს, რკინიგზებს, საჰაერო გზებს, არხებს, სადენებს ან ტერმინალებს, როგორიცაა აეროპორტები, რკინიგზის, საავტომობილო და საზღვაო სადგურები. მანქანები, რომლებიც. საჰაეროში - საავიაციო ტრანსპორტი.
                           დანიშნულების მიხედვით ტრანსპორტი იყოფა საერთო (რომელიც ემსახურება მოსახლეობას), არასაერთო (შიდასამრეწველო გადაზიდვები) და პირადი სარგებლობის ტრანსპორტად."
                       />
                       <input type="text" id="secondLinkRus" name="secondLinkRus" placeholder="ლინკი ტექსტისთვის" className="border-black border-solid border-[1px] rounded px-4 py-2"/>
                       </span>
                   
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
                        id="thirdBlog"
                        name="thirdBlog"
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
            <button type="submit" className="mt-12 border-black bg-black border-solid border-[1px] px-4 py-2 rounded text-white">
            {adding === true ? "პროცესშია..." : "დაამატე"}
            </button>
          </form>
        </div>
      </section>
    </>
          {/* <section className="container mx-auto mt-12">
            <div className="flex justify-center items-center">
              <form
                id="addForm"
                onSubmit={handleSubmit}
                className="flex flex-col justify-center items-start space-y-6"
              >
                <label htmlFor="blog">დაამატე სტატიის ფოტო</label>
                <input type="file" id="blog" name="blog" />
                <label htmlFor="blogImageAlt">დაამატე ფოტოს ალტი</label>
                <input type="text" id="blogImageAlt" name="blogImageAlt" />
                <label htmlFor="blogTitle">დაამატე სტატიის სათაური</label>
                <input type="text" id="blogTitle" name="blogTitle" />
                <label htmlFor="blogTag">დაამატე სტატიის ტაგი</label>
                <input type="text" id="blogTag" name="blogTag" />
                <label htmlFor="blogDate">დაამატე სტატიის თარიღი</label>
                <input type="text" id="blogDate" name="blogDate" />
                <label htmlFor="blogTitleEng">
                  დაამატე სტატიის სათაური ინგლისურად
                </label>
                <input type="text" id="blogTitleEng" name="blogTitleEng" />
                <label htmlFor="blogTagEng">
                  დაამატე სტატიის ტაგი ინგლისურად
                </label>
                <input type="text" id="blogTagEng" name="blogTagEng" />
                <label htmlFor="blogDateEng">
                  დაამატე სტატიის თარიღი ინგლისურად
                </label>
                <input type="text" id="blogDateEng" name="blogDateEng" />
                <label htmlFor="blogTitleRus">
                  დაამატე სტატიის სათაური რუსულად
                </label>
                <input type="text" id="blogTitleRus" name="blogTitleRus" />
                <label htmlFor="blogTagRus">დაამატე სტატიის ტაგი რუსულად</label>
                <input type="text" id="blogTagRus" name="blogTagRus" />
                <label htmlFor="blogDateRus">
                  დაამატე სტატიის თარიღი რუსულად
                </label>
                <input type="text" id="blogDateRus" name="blogDateRus" />
                <label htmlFor="secondBlog">დაამატე სტატიის გვერდის ფოტო</label>
                <input type="file" id="secondBlog" name="secondBlog" />
                <label htmlFor="blogPageImageAlt">დაამატე ფოტოს ალტი</label>
                <input
                  type="text"
                  id="blogPageImageAlt"
                  name="blogPageImageAlt"
                />
                <label htmlFor="thirdBlog">
                  სურვილისამებრ დაამატე სტატიის გვერდის მეორე ფოტო
                </label>
                <input type="file" id="thirdBlog" name="thirdBlog" />
                <label htmlFor="secondBlogPageImageAlt">
                  სურვილისამებრ დაამატე ფოტოს ალტი
                </label>
                <input
                  type="text"
                  id="secondBlogPageImageAlt"
                  name="secondBlogPageImageAlt"
                />
                <span className="font-bold text-xl">ქართულად</span>
                <label htmlFor="message" className="text-lg mt-10">
                  სტატიის გვერდის ტექსტი
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="8"
                  cols={70}
                  className="px-4 py-2 border-[1px] border-[#ADD1FC] rounded"
                  placeholder="Type your message..."
                />
                <label htmlFor="linkGeo" className="text-md">
                  დაამატე ლინკი
                </label>
                <input
                  id="linkGeo"
                  name="linkGeo"
                  className="border-[1px] border-solid border-[#ADD1FC] rounded px-4 py-2"
                />
                <span className="font-bold text-xl">ინგლისურად</span>
                <label htmlFor="message" className="text-lg mt-10">
                  სტატიის გვერდის ტექსტი
                </label>
                <textarea
                  id="messageEng"
                  name="messageEng"
                  rows="8"
                  cols={70}
                  className="px-4 py-2 border-[1px] border-[#ADD1FC] rounded"
                  placeholder="Type your message..."
                />
                <label htmlFor="linkEng" className="text-md">
                  დაამატე ლინკი ინგლისურად
                </label>
                <input
                  id="linkEng"
                  name="linkEng"
                  className="border-[1px] border-solid border-[#ADD1FC] rounded px-4 py-2"
                />
                <span className="font-bold text-xl">რუსულად</span>
                <label htmlFor="message" className="text-lg mt-10">
                  სტატიის გვერდის ტექსტი
                </label>
                <textarea
                  id="messageRus"
                  name="messageRus"
                  rows="8"
                  cols={70}
                  className="px-4 py-2 border-[1px] border-[#ADD1FC] rounded"
                  placeholder="Type your message..."
                />
                <label htmlFor="linkRus" className="text-md">
                  დაამატე ლინკი რუსულად
                </label>
                <input
                  id="linkRus"
                  name="linkRus"
                  className="border-[1px] border-solid border-[#ADD1FC] rounded px-4 py-2"
                />
                <span className="font-bold">
                  სურვილისამებრ დაამატე სტატიის გვერდის მეორე პარაგრაფის ტექსტი
                </span>
                <span className="font-bold text-xl">ქართულად</span>
                <label htmlFor="secondMessage" className="text-lg mt-10">
                  სტატიის გვერდის ტექსტი
                </label>
                <textarea
                  id="secondMessage"
                  name="secondMessage"
                  rows="8"
                  cols={70}
                  className="px-4 py-2 border-[1px] border-[#ADD1FC] rounded"
                  placeholder="Type your message..."
                />
                <label htmlFor="secondLinkGeo" className="text-md">
                  დაამატე ლინკი
                </label>
                <input
                  id="secondLinkGeo"
                  name="secondLinkGeo"
                  className="border-[1px] border-solid border-[#ADD1FC] rounded px-4 py-2"
                />
                <span className="font-bold text-xl">ინგლისურად</span>
                <label htmlFor="secondMessageEng" className="text-lg mt-10">
                  სტატიის გვერდის ტექსტი
                </label>
                <textarea
                  id="secondMessageEng"
                  name="secondMessageEng"
                  rows="8"
                  cols={70}
                  className="px-4 py-2 border-[1px] border-[#ADD1FC] rounded"
                  placeholder="Type your message..."
                />
                <label htmlFor="secondLinkEng" className="text-md">
                  დაამატე ლინკი ინგლისურად
                </label>
                <input
                  id="secondLinkEng"
                  name="secondLinkEng"
                  className="border-[1px] border-solid border-[#ADD1FC] rounded px-4 py-2"
                />
                <span className="font-bold text-xl">რუსულად</span>
                <label htmlFor="secondMessageRus" className="text-lg mt-10">
                  სტატიის გვერდის ტექსტი
                </label>
                <textarea
                  id="secondMessageRus"
                  name="secondMessageRus"
                  rows="8"
                  cols={70}
                  className="px-4 py-2 border-[1px] border-[#ADD1FC] rounded"
                  placeholder="Type your message..."
                />
                <label htmlFor="secondLinkRus" className="text-md">
                  დაამატე ლინკი რუსულად
                </label>
                <input
                  id="secondLinkRus"
                  name="secondLinkRus"
                  className="border-[1px] border-solid border-[#ADD1FC] rounded px-4 py-2"
                />
                <button
                  type="submit"
                  className="border-black border-solid border-[1px] rounded bg-black text-white px-4 py-2"
                >
                  {adding === true ? "პროცესშია..." : "დაამატე"}
                </button>
              </form>
            </div>
          </section> */}
        {fetched === true ? (
          <section>
          <div className="flex justify-end items-center space-x-2 px-12 mt-24">
            <button className="carousel-control" onClick={handlePrevious}>
              <img src="/assets/icons/left-arrow.png" alt="left arrow" />
            </button>
            <button className="carousel-control" onClick={handleNext}>
              <img src="/assets/icons/right-arrow.png" alt="right arrow" />
            </button>
          </div>

          <div className="carousel-container mt-5 px-4" ref={carouselRef}>
            <div
              className="carousel-wrapper flex space-x-4"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {blogs.map((blog, index) => (
                <div
                  key={index}
                  className="carousel-item flex flex-col justify-center items-start border-[1px] border-black border-solid rounded-lg"
                >
                  <div className="relative">
                    <img
                      src={blog.blogImageUrl}
                      alt={blog.blogImageAlt}
                      className="rounded w-[303px] h-[179px] lg:w-[404px] lg:h-[279px]"
                    />
                    <Link href={`/blogs/${blog.blogTitle}`}>
                      <button className="border-white border-solid border-[1px] rounded-full bg-transparent hover:bg-[#1A3DA7] text-white text-lg px-4 py-2 absolute top-[50%] left-[30%]">
                        ვრცლად
                      </button>
                    </Link>
                    <button className="absolute top-5 right-5 bg-black border-black border-[1px] border-solid rounded px-4 py-2 text-red-600" onClick={() => handleDelete(blog._id, blog.blogImagePublicId, blog.blogPageImagePublicId, blog.secondBlogPageImagePublicId)}>
                    {deleting === true ? "იშლება" : "წაშალე"}
                    </button>
                  </div>
                  <div className="w-full flex flex-col justify-end space-y-2 px-2">
                    <div>
                      <h3 className="text-base">{blog.blogTitle}</h3>
                    </div>
                    <div>
                      <span className="text-base">{blog.blogTag}</span>
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
                          <span>{blog.views} ნახვა</span>
                        </span>
                      </span>
                      <span className="text-base">{blog.blogDate}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        ): (
          null
        )}
          
        </>
      ) : (
        <h1>404 Page Error</h1>
      )}
    </>
  );
};

export default page;
