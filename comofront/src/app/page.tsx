// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
import Link from "next/link";
import Header from "./component/layout/header";
import { cookies } from 'next/headers';
import Head from "next/head";
import Layout from "./layout";
import { useRouter } from "next/navigation";

export default function Page() {

  // const session = await getSession()
  // const userRole = session?.user?.role // Assuming 'role' is part of the session object

  const cookiesList = cookies()
  const hasCookie = cookiesList.has('id')

  if (hasCookie){
    return (
      <div>
      <Header />
      <div className="h-screen flex items-center justify-center">
        <div className="text-2xl text-center" >
            Objekt trade community for WAV
        </div>
      </div>
    </div>
    )
  }
  else return (
    <div>
      <Header />
      <div className="h-screen flex items-center justify-center">
        <div className="text-2xl text-center" >
            Login Please.
        </div>
      </div>
    </div>
  )
 
  // if (userRole === 'admin') {
  //   return <></> // Component for admin users
  // } else if (userRole === 'user') {
  //   return <></> // Component for regular users
  // } else {
  //   return <></> // Component shown for unauthorized access
  // }

  return (
    <div>
      <Header />
      <div className="h-screen flex items-center justify-center">
        <div className="text-2xl text-center" >
            Objekt trade community for WAV
        </div>
      </div>
    </div>
  );
}
