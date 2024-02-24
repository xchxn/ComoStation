import Link from 'next/link';
import Navbar from './navbar';
export default function header(){
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center">
            <div className="flex cursor-pointer transform hover:scale-105">
                <p className="text-xl font-extrabold" >ComoStation</p>
            </div>
            <div className="flex flex-grow justify-evenly max-w-sm">
                <Link href="/">Home</Link>
                <Link href="/Login">Login</Link>
                <Link href="/SignUp">signup</Link>
            </div>
        </header>
    )
}