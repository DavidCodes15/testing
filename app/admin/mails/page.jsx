"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
const page = () => {
    const {data: session} = useSession();
    const [mails, setMails] = useState([]);
    const [fetched, setFetched] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    useEffect(() => {
        const fetchMails = async () => {
            try{
                const res = await fetch("/api/emails");
                const data = await res.json();
                setMails(data);
            } catch (error) {
                console.log(error);
            } finally{
                setFetched(true);
            }
        }
        fetchMails();
    }, []);
    const handleDelete = async (id) => {

        try{
            setIsDeleting(true);
             await fetch(`/api/emails/delete/${id}`, {
                method: "DELETE",
             });
        } catch (error) {
            console.log(error);
        } finally{
            window.location.reload();
            setIsDeleting(false);
        }
    }
  return (
    <>
      {session?.user ? (
        <>
          <section className="container mx-auto mt-[50px]">
            <div className="flex flex-col justify-center items-center">
              <div className="flex justify-center items-center">
                <h1 className="font-bold text-2xl">
                    გამოგზავნილი მეილები
                </h1>
              </div>
            {fetched === true ? (
                <div className="w-full flex flex-col justify-center items-start px-5 py-5 space-y-4">
                    {mails.map((mail, index) => (
                        <div key={index} className="relative border-[1px] border-solid border-[#ADD1FC] rounded-xl px-[30px] py-4 w-full">
                            
                            <div className="w-full flex flex-col justify-center items-start">
                                <div className="flex flex-col space-y-2">
                                <span className="font-bold text-lg">
                                    სახელი
                                </span>
                                <span>
                                    {mail.name}
                                </span>
                                </div>
                                <div className="flex flex-col space-y-2">
                                <span className="font-bold text-lg">
                                    ტელეფონი
                                </span>
                                <span>
                                    {mail.phone}
                                </span>
                                </div>
                                <div className="flex flex-col space-y-2">
                                <span className="font-bold text-lg">
                                    ელფოსტა
                                </span>
                                <span>
                                    {mail.email}
                                </span>

                                </div>
                                <div className="flex flex-col space-y-2">
                                <span className="font-bold text-lg">
                                    წერილი
                                </span>
                                <span className="max-w-[800px]">
                                    {mail.message}
                                </span>
                                </div>
                            </div>
                           

                            <button onClick={() => handleDelete(mail._id)} className={`absolute top-5 right-5 border-[1px] border-solid border-black rounded px-4 py-2 ${isDeleting === true ? "bg-red-600 text-black" : "bg-black text-red-600"}`}>წაშალე</button>
                        
                        </div>

                    ))}
                </div>
            ): (
                null
            )}
            </div>
          </section>
        </>
      ) : (
        <div className="w-screen h-screen bg-black container mx-auto">
          <div className="flex justify-center items-center mt-[100px]">
            <h1 className="text-white text-3xl">404 Page Error</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default page;
