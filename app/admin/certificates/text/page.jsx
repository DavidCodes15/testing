"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
const page = () => {
  const { data: session } = useSession();
  const [fetched, setFetched] = useState(false);
  const [texts, setTexts] = useState([]);
  const [adding, setAdding] = useState(false);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const fetchTexts = async () => {
      try {
        const res = await fetch("/api/certificates/text");
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

    const firstCertText = form.elements.firstCertText.value;
    const secondCertText = form.elements.secondCertText.value;
    const firstEngCertText = form.elements.firstEngCertText.value;
    const secondEngCertText = form.elements.secondEngCertText.value;
    const firstRusCertText = form.elements.firstRusCertText.value;
    const secondRusCertText = form.elements.secondRusCertText.value;

    sendToBackend(
      firstCertText,
      secondCertText,
      firstEngCertText,
      secondEngCertText,
      firstRusCertText,
      secondRusCertText
    );
  }
  async function sendToBackend(
    firstCertText,
    secondCertText,
    firstEngCertText,
    secondEngCertText,
    firstRusCertText,
    secondRusCertText
  ) {
    try {
      await fetch("/api/certificates/text/new", {
        method: "POST",
        body: JSON.stringify({
          firstCertText,
          secondCertText,
          firstEngCertText,
          secondEngCertText,
          firstRusCertText,
          secondRusCertText,
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
    try{
      await fetch(`/api/certificates/text/delete/${id}`, {
        method: "DELETE",
      });
    } catch (error){
      console.log(error);
    } finally{
      console.log("finally deleted the text");
      window.location.reload();
    }
  }
  return (
    <>
      {session?.user ? (
        <>
        <section className="container mx-auto mt-12">
          <div className="flex justify-center items-center">
            <form
              id="addForm"
              onSubmit={handleSubmit}
              className="w-1/2 flex flex-col justify-center items-start space-y-6"
            >
              <span className="font-bold">ქართულად</span>
              <label>დამატე ზემოთ მდგომი ტექსტი</label>
              <input type="text" id="firstCertText" name="firstCertText" />
              <label>დამატე ქვემოთ მდგომი ტექსტი</label>
              <input type="text" id="secondCertText" name="secondCertText" />
              <span className="font-bold">ინგლისურად</span>
              <label>დამატე ზემოთ მდგომი ტექსტი</label>
              <input
                type="text"
                id="firstEngCertText"
                name="firstEngCertText"
              />
              <label>დამატე ქვემოთ მდგომი ტექსტი</label>
              <input
                type="text"
                id="secondEngCertText"
                name="secondEngCertText"
              />
              <span className="font-bold">რუსულად</span>
              <label>დამატე ზემოთ მდგომი ტექსტი</label>
              <input
                type="text"
                id="firstRusCertText"
                name="firstRusCertText"
              />
              <label>დამატე ქვემოთ მდგომი ტექსტი</label>
              <input
                type="text"
                id="secondRusCertText"
                name="secondRusCertText"
              />
              <button
                type="submit"
                className="bg-black border-[1px] border-solid border-black rounded px-4 py-2 text-white"
              >
                {adding === true ? "პროცესშია" : "დაამატე"}
              </button>
            </form>
          </div>
        </section>
        {fetched === true ? (
          <>
          <section className="container px-5 mt-[200px]">
            <div className="flex justify-start items-center px-4">
              {texts.map((text, index) => (
                <div key={index} className="relative flex flex-col justify-center items-start space-y-6">
                  <div className="flex flex-col justify-center items-start space-y-4">
                    <span>ზემოთ მდგომი ტექსტი</span>
                    <p>{text.firstCertText}</p>
                  </div>
                  <div className="flex flex-col justify-center items-start space-y-4">
                    <span>ქვემოთ მდგომი ტექსტი</span>
                    <p>{text.secondCertText}</p>
                  </div>
                  <button onClick={() => handleDelete(text._id)} className="bg-black border-black border-solid border-[1px] rounded px-4 py-2 text-red-600 absolute top-0 right-0">
                    {deleting === true ? "იშლება..." : "წაშალე"}
                  </button>
                </div>
              ))}
            </div>
          </section>
          </>
        ): (  
          null
        )}
        </>
      ) : (
        null
      )}
    </>
  );
};

export default page;
