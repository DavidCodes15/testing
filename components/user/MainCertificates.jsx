"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import "@/public/styles/mainCert.css";

const MainCertificates = () => {
  const [certs, setCerts] = useState([]);
  const [texts, setTexts] = useState([]);
  const [added, setAdded] = useState(false);
  useEffect(() => {
    const fetchCerts = async () => {
      try {
        const res = await fetch("/api/certificates/main");
        const data = await res.json();
        setCerts(data);
        const textRes = await fetch("/api/certificates/text");
        const textData = await textRes.json();
        setTexts(textData);
        console.log(data[0].imageUrl);
        setAdded(true);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCerts();
  }, []);
  return (
    <>
    {added === true ? (
      <div className="bg-transparent lg:bg-[#ECF5FF] py-10 mt-12 lg:mt-[130px]">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col space-y-12">
          <div className="flex items-center justify-center mx-[0px] bg-[#ECF5FF] lg:mx-44 lg:justify-start">
            <h2 className="font-bold text-xl lg:text-2xl">სერთიფიკატები</h2>
          </div>
          <div className="flex flex-col items-center lg:items-start justify-center lg:flex-row lg:space-x-4">
            <div className="w-full lg:w-1/2 relative cert mb-5">
              <div className="absolute top-0 card">
                <img className="cert-width rounded-3xl" src={certs[0].imageUrl} alt={certs[0].imageAlt} />
              </div>
              <div className="absolute top-0 card  z-1 left-[15%]">
                <img className="cert-width rounded-3xl" src={certs[1].imageUrl} alt={certs[1].imageAlt} />
              </div>
              <div className="absolute top-0 card  z-2 left-[30%]">
                <img className="cert-width rounded-3xl" src={certs[2].imageUrl} alt={certs[2].imageAlt} />
              </div>
              <div className="absolute top-0 card  z-3 left-[45%]">
                <img className="cert-width rounded-3xl" src={certs[3].imageUrl} alt={certs[3].imageAlt} />
              </div>
              <div className="absolute top-0 card  z-4 left-[60%]">
                <img className="cert-width rounded-3xl" src={certs[4].imageUrl} alt={certs[4].imageAlt} />
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center space-y-8 max-w-[532px]">
              <div>
                {texts.map((text, index) => (
                  <p key={index} className="text-base">
                    {text.firstCertText}
                  </p>
                ))}
              </div>
              <div className="hidden lg:flex flex-col space-y-14 items-start">
                {texts.map((text, index) => (
                  <p key={index} className="text-base">
                    {text.firstCertText}
                  </p>
                ))}
                <Link href="/certificates">
                  <button className="bg-[#1A3DA7] text-white text-base  rounded-xl px-4 py-4">
                    მეტის ნახვა
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    ): (
      null
    )}
      
    </>
  );
};

export default MainCertificates;