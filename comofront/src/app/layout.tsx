import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const getSession = cookies().get("id");
  
  if (getSession) {
    return (
      <html lang="en">
        <body className={inter.className}>
          <header className="flex flex-col sm:flex-row m-5 justify-between items-center">
            <div className="flex cursor-pointer transform hover:scale-105">
              <p className="text-xl font-extrabold">
                <Link href="/">ComoStation</Link>
              </p>
            </div>
            <div className="flex flex-grow justify-evenly max-w-sm">
              <div className="flex cursor-pointer transform hover:scale-105">
                <Link href="/">Home</Link>
              </div>
              <div className="flex cursor-pointer transform hover:scale-105">
                <Link href="/Posting">Posting</Link>
              </div>
              <div className="flex cursor-pointer transform hover:scale-105">
                <Link href="/Board">Board</Link>
              </div>
              <button
                id="logout">
                  <Link href="/Logout">Logout</Link>
              </button>
            </div>
          </header>
          {children}
        </body>
      </html>
    );
  } else {
    return (
      <html lang="en">
        <body className={inter.className}>
          <header className="flex flex-col sm:flex-row m-5 justify-between items-center">
            <div className="flex cursor-pointer transform hover:scale-105">
              <p className="text-xl font-extrabold">
                <Link href="/">ComoStation</Link>
                </p>
            </div>
            <div className="flex flex-grow justify-evenly max-w-sm">
              <div className="flex cursor-pointer transform hover:scale-105">
                <Link href="/">Home</Link>
              </div>
              <div className="flex cursor-pointer transform hover:scale-105">
                <Link href="/Posting">Posting</Link>
              </div>
              <div className="flex cursor-pointer transform hover:scale-105">
                <Link href="/Board">Board</Link>
              </div>
              <button
                id="logout"
              >
                <Link href="/Login">Login</Link>
              </button>
            </div>
          </header>
          {children}
        </body>
      </html>
    );
  }
}
