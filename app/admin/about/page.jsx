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
    const generalText = form.elements.generalText.value;
    const firstText = form.elements.firstText.value;
    const secondText = form.elements.secondText.value;
    const thirdText = form.elements.thirdText.value;
    const generalEngText = form.elements.generalEngText.value;
    const firstEngText = form.elements.firstEngText.value;
    const secondEngText = form.elements.secondEngText.value;
    const thirdEngText = form.elements.thirdEngText.value;
    const generalRusText = form.elements.generalRusText.value;
    const firstRusText = form.elements.firstRusText.value;
    const secondRusText = form.elements.secondRusText.value;
    const thirdRusText = form.elements.thirdRusText.value;

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
          <section className="container mx-auto mt-12">
            <div className="flex justify-center items-center">
              <form
                id="addForm"
                onSubmit={handleSubmit}
                className="w-1/2 flex flex-col justify-center items-start space-y-6"
              >
                <span className="font-bold">ქართულად</span>
                <label>ზოგადი ტექსტი</label>
                <textarea
                  rows="8"
                  cols={70}
                  className="px-4 py-2 border-[1px] border-[#ADD1FC] rounded"
                  id="generalText"
                  name="generalText"
                />
                <label>პირველი ტექსტი</label>
                <textarea
                  rows="8"
                  cols={70}
                  className="px-4 py-2 border-[1px] border-[#ADD1FC] rounded"
                  id="firstText"
                  name="firstText"
                />
                <label>მეორე ტექსტი</label>
                <textarea
                  rows="8"
                  cols={70}
                  className="px-4 py-2 border-[1px] border-[#ADD1FC] rounded"
                  id="secondText"
                  name="secondText"
                />
                <label>მესამე ტექსტი</label>
                <textarea
                  rows="8"
                  cols={70}
                  className="px-4 py-2 border-[1px] border-[#ADD1FC] rounded"
                  id="thirdText"
                  name="thirdText"
                />
                <span className="font-bold">ინგლისურად</span>
                <label>ზოგადი ტექსტი</label>
                <textarea
                  rows="8"
                  cols={70}
                  className="px-4 py-2 border-[1px] border-[#ADD1FC] rounded"
                  id="generalEngText"
                  name="generalEngText"
                />
                <label>პირველი ტექსტი</label>
                <textarea
                  rows="8"
                  cols={70}
                  className="px-4 py-2 border-[1px] border-[#ADD1FC] rounded"
                  id="firstEngText"
                  name="firstEngText"
                />
                <label>მეორე ტექსტი</label>
                <textarea
                  rows="8"
                  cols={70}
                  className="px-4 py-2 border-[1px] border-[#ADD1FC] rounded"
                  id="secondEngText"
                  name="secondEngText"
                />
                <label>მესამე ტექსტი</label>
                <textarea
                  rows="8"
                  cols={70}
                  className="px-4 py-2 border-[1px] border-[#ADD1FC] rounded"
                  id="thirdEngText"
                  name="thirdEngText"
                />
                <span className="font-bold">რუსულად</span>
                <label>ზოგადი ტექსტი</label>
                <textarea
                  rows="8"
                  cols={70}
                  className="px-4 py-2 border-[1px] border-[#ADD1FC] rounded"
                  id="generalRusText"
                  name="generalRusText"
                />
                <label>პირველი ტექსტი</label>
                <textarea
                  rows="8"
                  cols={70}
                  className="px-4 py-2 border-[1px] border-[#ADD1FC] rounded"
                  id="firstRusText"
                  name="firstRusText"
                />
                <label>მეორე ტექსტი</label>
                <textarea
                  rows="8"
                  cols={70}
                  className="px-4 py-2 border-[1px] border-[#ADD1FC] rounded"
                  id="secondRusText"
                  name="secondRusText"
                />
                <label>მესამე ტექსტი</label>
                <textarea
                  rows="8"
                  cols={70}
                  className="px-4 py-2 border-[1px] border-[#ADD1FC] rounded"
                  id="thirdRusText"
                  name="thirdRusText"
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

export default page;
