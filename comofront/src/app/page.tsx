// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
import Link from 'next/link'
import Header from './component/layout/header'
import Head from 'next/head'
import Layout from './layout'
export default function Page() {
    return(
      <div>
        <Header />
    </div>
    )
  }