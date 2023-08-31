"use client";
import { useState } from "react";
import DOMPurify from "dompurify";
import "@/app/globals.css";
import Popup from "@/components/user/Popup";
const contactpage = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const [isNameValidated, setIsNameValidated] = useState(true);
  const [isPhoneValidated, setIsPhoneValidated] = useState(true);
  const [isEmailValidated, setIsEmailValidated] = useState(true);
  const [isMessageValidated, setIsMessageValidated] = useState(true);
  const [isMessageContains, setIsMessageContains] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const handleNameChange = (event) => {
    const rawName = event.target.value; // Get the original name
    if (/[\d<>]/.test(rawName)) {
      setIsNameValidated(false); // Set the validation state if name contains numbers or <>
    } else {
      setIsNameValidated(true); // Reset the validation state when valid characters are present
    }
    setName(rawName);
  
  };

  const handlePhoneChange = (event) => {
    const rawPhone = event.target.value; // Get the original phone
  if (!/^[0-9+]+$/.test(rawPhone)) {
    setIsPhoneValidated(false);
  } else {
    setIsPhoneValidated(true);
  }
  setPhone(rawPhone);
  };

  const handleEmailChange = (event) => {
    const rawEmail = event.target.value; // Get the original email
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(rawEmail)) {
    setIsEmailValidated(false);
  } else {
    setIsEmailValidated(true);
  }
  setEmail(rawEmail);
  };

  const handleMessageChange = (event) => {
    const rawMessage = event.target.value; // Get the original message
    if (rawMessage.includes('<') || rawMessage.includes('>')) {
      setIsMessageContains(true);
    } else {
      setIsMessageContains(false); // Reset the state when prohibited characters are removed
    }
  setMessage(rawMessage);

  const words = rawMessage.split(/\s+/).filter((word) => word !== "");
  setWordCount(words.length);

  // Validate the message length
  if (words.length > 150) {
    setIsMessageValidated(false);
  } else {
    setIsMessageValidated(true);
  }
  };
  async function handleSubmit(e) {
    e.preventDefault();
    setIsAdding(true);
    const namePattern = /^[A-Za-zა-ჰ\s]+$/;
    const phonePattern = /^[0-9+]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const sanitizedName = DOMPurify.sanitize(name);
    const sanitizedPhone = DOMPurify.sanitize(phone);
    const sanitizedEmail = DOMPurify.sanitize(email);
    const sanitizedMessage = DOMPurify.sanitize(message);

    if (!namePattern.test(sanitizedName)) {
      console.log("Invalid name:", sanitizedName);
      setIsNameValidated(false);
      return;
    }

    if (!phonePattern.test(sanitizedPhone)) {
      setIsPhoneValidated(false);
      return;
    }

    if (!emailPattern.test(sanitizedEmail)) {
      setIsEmailValidated(false);
      return;
    }
    if (!isMessageValidated) {
      setIsMessageValidated(false);
      return;
    }
    if (isNameValidated && isPhoneValidated && isEmailValidated && isMessageValidated && !isMessageContains) {
      await sendToBackend(sanitizedName, sanitizedPhone, sanitizedEmail, sanitizedMessage); // Wait for backend response
  
      // Reset input fields and validation states after successful submission
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
      setIsNameValidated(true);
      setIsPhoneValidated(true);
      setIsEmailValidated(true);
      setIsMessageValidated(true);
      setIsMessageContains(false);
      setIsAdding(false); // Reset the "isAdding" state after submission
      setSubmitted(true); // Set the submitted state to trigger the popup
  
      // You can also reset the word count state here if needed
      // setWordCount(0);
    } else {
      setIsAdding(false); // Reset the "isAdding" state if the form is not submitted
    }


  }
  async function sendToBackend(name, phone, email, message){
    try{
      const emailUpload = await fetch("/api/emails/new", {
        method: "POST",
        headers: {
                "Content-Type": "application/json",
          },
        body: JSON.stringify({
          name,
          phone,
          email,
          message,

        }),
        
      }).then((r) => r.json());
      if(emailUpload.ok){
        console.log("email sent");
      }
    } catch (error){
      console.log(error);
    } finally {
      setSubmitted(true);
    }
  }
  return (
    <>
      <section className="container mt-[100px] px-24">
        <div
          id="navigation"
          className="hidden lg:flex justify-start items-start space-x-2"
        >
          <span className="flex justify-center items-center space-x-4">
            <span>მთავარი</span>
            <img src="/assets/icons/Vector.png" alt="navigation arrow" />
          </span>
          <span className="text-[#1A3DA7]">კონტაქტი</span>
        </div>
      </section>
      <section className="container mx-auto mt-12">
        <div className="flex flex-col space-y-12 justify-center items-center">
          <div>
            <h1 className="font-bold text-xl fix-bg lg:text-3xl">
              როგორ შევიძინოთ
            </h1>
          </div>
          <div className="flex justify-center items-center space-x-0 flex-col lg:space-x-6 lg:flex-row">
            <div className="w-full lg:w-1/2">
              <div className="hidden lg:flex flex-col space-y-6">
                <div>
                  <h2 className=" text-xl">დაგვიკავშირდით</h2>
                </div>
                <div className="flex justify-start items-center space-x-4">
                  <span>
                    <img src="/assets/icons/Group.png" alt="inbox" />
                  </span>
                  <span>info@geopipe.ge</span>
                </div>
                <div className="flex justify-start items-center space-x-4">
                  <span>
                    <img src="/assets/icons/phone.png" alt="telephone" />
                  </span>
                  <span>+995 551 03 03 03</span>
                </div>
                <div className="flex justify-start items-center space-x-4">
                  <span>
                    <img src="/assets/icons/location.png" alt="location" />
                  </span>
                  <span>ქ. თბილისი, ქიზიყის ქ. N42</span>
                </div>
              </div>
              <div>
              <form
                onSubmit={handleSubmit}
                method="POST"
                className="flex flex-col mt-12 space-y-4 fix-contact-size"
              >
                <label htmlFor="name" className="text-lg">
                  სახელი
                </label>
                <input
                  onChange={handleNameChange}
                  type="text"
                  value={name}
                  id="name"
                  name="name"
                  required
                  className={`border-[1px] border-solid rounded-full px-4 py-2 ${
                    !isNameValidated ? "border-red-500" : "border-[#1A3DA7]"
                  }`}
                />
                {!isNameValidated ? (
                  <span className="text-red-500"> * არასწორი სახელია * </span>
                ) : null}
                <label htmlFor="phone" className="text-lg mt-10">
                  ტელეფონის ნომერი
                </label>
                <input
                  onChange={handlePhoneChange}
                  type="number"
                  id="phone"
                  value={phone}
                  name="phone"
                  required
                  className={`border-[1px] border-solid rounded-full px-4 py-2 ${
                    !isPhoneValidated ? "border-red-500" : "border-[#1A3DA7]"
                  }`}
                />
                {!isPhoneValidated ? (
                  <span className="text-red-500">
                    {" "}
                    * არასწორი ტელეფონის ნომერია *{" "}
                  </span>
                ) : null}
                <label htmlFor="email" className="text-lg">
                  Email
                </label>
                <input
                  onChange={handleEmailChange}
                  type="email"
                  id="email"
                  value={email}
                  name="email"
                  required
                  className={`border-[1px] border-solid rounded-full px-4 py-2 ${
                    !isEmailValidated ? "border-red-500" : "border-[#1A3DA7]"
                  }`}
                />
                {!isEmailValidated ? (
                  <span className="text-red-500">
                    {" "}
                    * არასწორი იმეილია *{" "}
                  </span>
                ) : null}
                <label htmlFor="message" className="text-lg mt-10">
                  გამოგვიგზავნეთ შეკვეთის დეტალები
                </label>
                <textarea
                  onChange={handleMessageChange}
                  id="message"
                  name="message"
                  value={message}
                  rows="8"
                  cols={70}
                  required
                  className="px-4 py-2 border-[1px] border-[#1A3DA7] rounded-xl"
                  placeholder="Type your message..."
                />
                <span className="text-sm">{wordCount} / 150 words</span>
                {!isMessageValidated && (
                  <span className="text-red-500">
                    {" "}
                    * შეტყობინება: 150 სიტყვაა მაქსიმუმ *{" "}
                  </span>
                )}
                {isMessageContains && (
                  <span className="text-red-500">
                    {" "}
                    * წერილი მხოლოდ სიტყვებს უნდა შეიცავდეს * {" "}
                  </span>
                )}
                <input
                  type="submit"
                  name="submit"
                  value={isAdding ? "იგზავნება..." : "გააგზავნე"}
                  disabled={
                    !isNameValidated ||
                    !isPhoneValidated ||
                    !isEmailValidated ||
                    !isMessageValidated ||
                    isMessageContains ||
                    isAdding
                  }
                  className="max-w-[284px] px-4 py-2 text-white bg-[#1A3DA7] rounded cursor-pointer"
                />
              </form>
              </div>
            </div>
            <div className="hidden lg:flex w-1/2">
              <img className="rounded-xl" src="/assets/icons/კონტაქტი.jpg" alt="contact image" />
            </div>
          </div>
        </div>
      </section>
      <Popup trigger={submitted} setTrigger={setSubmitted}>
            <div className="flex flex-col justify-center items-center space-y-6 py-12"> 
                  <span className="text-2xl">გაგზავნილია</span>
                  <span>
                    <img src="assets/icons/sent.png" alt="email sent"/>
                  </span>
            </div>
      </Popup>
    </>
  );
};
export default contactpage