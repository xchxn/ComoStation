// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
import Link from "next/link";
import Header from "./component/layout/header";
import ObjektFilter from "./component/layout/objektFilter";
import { cookies } from 'next/headers';
import Head from "next/head";
import Layout from "./layout";
import { useRouter } from "next/navigation";

export default function Page() {
  const cookiesList = cookies()
  // cookies().set('name', 'Delba')
  const hasCookie = cookiesList.has('id')

  if (hasCookie){
    return (
      <div className="">
      <Header/>
      <div className="h-screen flex items-center justify-center">
        <div className="text-2xl text-center" >
            Objekt trade community for WAV
        </div>
        <div><ObjektFilter /></div>
        
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
}
