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
      მოგესალმები ადმინზე
      </>
    ): (
      <>
      არახარ წევრი არა
      </>
    )}
    </>
  )
}

export default AdminPage
