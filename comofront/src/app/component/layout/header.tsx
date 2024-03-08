import Link from 'next/link';
import Navbar from './navbar';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default async function Header(){
//    const logout = () => {
//     'use server'
//         cookies().delete('id');
//         redirect('/');
//     }
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center">
            <div className="flex cursor-pointer transform hover:scale-105">
                <p className="text-xl font-extrabold" >ComoStation</p>
            </div>
            <div className="flex flex-grow justify-evenly max-w-sm">
                <Link href="/">Home</Link>
                <Link href="/Posting">Posting</Link>
                <Link href="/Board">Board</Link>
                <Link href="/Login">Login</Link>
                <Link href="/SignUp">SignUp</Link>
                <button
                    id='logout'
                    // onClick={logout}
                    >
                Logout</button>
            </div>
        </header>
    )
}