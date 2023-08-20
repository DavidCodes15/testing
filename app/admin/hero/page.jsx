"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const page = () => {
    const [isDeleting , setIsDeleting] = useState(false);
    const {data: session} = useSession();
    const [heros, setHeros] = useState([]);
    const [fetched, setFetched] = useState(false);
    useEffect(() => {
        const fetchHero = async () => {
            try{
                const res = await fetch("/api/heroImages");
                const data = await res.json();
                setHeros(data);
            } catch (error){
                console.log(error);
            } finally{
                setFetched(true);
            }
        }
        fetchHero(); 
}, []);
    const handleDelete = async (id, publicId) => {
        try{
            setIsDeleting(true);
            await fetch(`/api/heroImages/delete/${id}`, {
                method: "DELETE",
                body: JSON.stringify({
                    publicId,
                })
            });
        } catch (error) {
            console.log(error);
        } finally {
            window.location.reload();
        }
    }
  return (
    <>
    {session?.user ? (
        <>
        {fetched === true ? (
             <section className="container mx-auto mt-[50px]">
             <div className="flex justify-center items-center px-4 py-4">
                 <div className="grid grid-cols-2 gap-5">
                    {heros.map((hero, index) => (
                        <div key={index} className="flex justify-center items-center relative">
                        <img className="w-[500px] h-[300px]" src={hero.imageUrl} alt={hero.imageAlt}/>
                        <button onClick={() => handleDelete(hero._id, hero.publicId)} className={`absolute top-2 right-2 rounded border-black border-solid border-[1px] px-4 py-2 ${isDeleting === true ? "bg-red-600 text-black" : "bg-black text-red-600"}`}>
                            წაშალე
                        </button>
                        </div>
                    ))}
                 </div>
             </div>
         </section>
        ): (
            null
        )}
        </>
    ): (
        <div className="w-screen h-screen bg-black container mx-auto">
          <div className="flex justify-center items-center mt-[100px]">
            <h1 className="text-white text-3xl">404 Page Error</h1>
          </div>
        </div>
    )}
    </>
  )
}

export default page
