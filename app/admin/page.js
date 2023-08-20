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
           <h1 className="mt-[100px]">you are signed in</h1>
           <button onClick={signOut} className="border-black border-[1px] border-solid">sign out</button>
           </>
    ): (
      <button onClick={signIn} className="mt-[200px] border-black border-solid border-[1px]">sign in </button>
    )}
     
    </>
  )
}

export default AdminPage
