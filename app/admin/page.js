"use client";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const AdminPage = () => {
    const { data: session } = useSession();

    const [providers, setProviders] = useState(null);
    useEffect(() => {
        (async () => {
          const res = await getProviders();
          setProviders(res);
        })();
      }, []);
  return (
    <>
    {session?.user ? (
      <>
          <div className="mt-[100px] flex flex-col justify-start items-center space-y-4">
           <h1 className="text-xl font-bold">მოგესამლებით ადმინკაზე</h1>
           <button onClick={signOut} className="border-black border-[1px] border-solid text-red-600 rounded px-4 py-2">sign out</button>
           </div>
           </>
    ): (

      <div className="mt-[300px] mb-[300px] flex flex-col justify-start items-center space-y-4">
      <h1 className="text-xl font-bold">გთხოვთ დატოვოთ ეს გვერდი თუ გუნდის წევრი არ ხართ.</h1>
      <button onClick={signIn} className="border-black border-[1px] border-solid text-red-600 rounded px-4 py-2">sign In</button>
      </div>
    )}
     
    </>
  )
}

export default AdminPage
