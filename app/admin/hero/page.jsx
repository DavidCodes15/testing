"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const page = () => {
    const [isDeleting , setIsDeleting] = useState(false);
    const {data: session} = useSession();
    const [heros, setHeros] = useState([]);
    const [fetched, setFetched] = useState(false);
    const [isAdding, setIsAdding] = useState(false);
    const [imageSrc, setImageSrc] = useState("");
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
    function handleOnChange(changeEvent){
        const reader = new FileReader();

    reader.onload = function (onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
    };

    reader.readAsDataURL(changeEvent.target.files[0]);
    }
    async function handleSubmit(e){
        e.preventDefault();
        setIsAdding(true);
        const form = e.currentTarget;
        const fileInput = Array.from(form.elements).find(
            ({ name }) => name === "hero"
        );
        const formData = new FormData();
        for (const file of fileInput.files) {
            formData.append("file", file);
          }
        formData.append("upload_preset", process.env.NEXT_PUBLIC_UPLOAD_PRESET);
        const data = await fetch(
            "https://api.cloudinary.com/v1_1/dvp84pcrp/image/upload",
            {
              method: "POST",
              body: formData,
            }
          ).then((r) => r.json());
          const imageName = data.original_filename;
          const imageUrl = data.secure_url;
          const publicId = data.public_id;
          setImageSrc(imageUrl);
          console.log("data", data);
        console.log(imageUrl);
        console.log(imageName);
        console.log(publicId);
        try{
            const heroUpload = await fetch("/api/heroImages/new", {
                method: "POST",
                body: JSON.stringify({
                    imageName,
                    imageUrl,
                    publicId,
                }),
            }).then((r) => r.json());
            if(heroUpload.ok){
                console.log("uploaded");
            }
        } catch (error) {
            console.log(error);
        } finally{
            window.location.reload();
        }
    }
    const handleDelete = async (id, publicId) => {
        try{
            setIsDeleting(true);
               await fetch(`/api/heroImages/delete/${id}`, {
                method: "DELETE",
                body: JSON.stringify({
                    publicId,
                }),
            });

        } catch (error) {
            console.log(error);
        } finally {
            console.log("finally deleted");
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
                onChange={handleOnChange}
                onSubmit={handleSubmit}
                className="flex flex-col space-y-6 justify-center items-start"
                >
                    <label>დაამატე ფოტო</label>
                    <input type="file" id="hero" name="hero" className="bg-black text-white px-4 py-2 rounded-xl"/>
                    {imageSrc === "" ? (
                        null
                    ): (
                        <img src={imageSrc} className="w-[400px] h-[200px]"/>
                    )}  
                    
                    <button type="submit" className="border-black border-[1px] border-solid rounded px-4 py-2 text-red-600 bg-black hover:bg-transparent">
                        {isAdding ? "პროცესშია..." : "დაამატე"}
                    </button>
                </form>
            </div>
        </section>
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
