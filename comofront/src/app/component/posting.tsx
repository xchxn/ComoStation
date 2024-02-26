"use client"
import Header from '../component/layout/header';

export default function Page(){
  return (
    <div>
        <Header />
        <div
            className=' bg-clip-content bg-white bg-cover justify-center'>
                <div
                    className='text-black'>
                    Objekt Search filter
                </div>
            <div className='grid grid-cols-4 gap-4 text-black text-center justify-center'>
                    <div className='grid border-solid border rounded-md border-slate-800 ring-2 ring-blue-500/50'>Have
                        <select className="appearance-none row-start-1 col-start-1 bg-slate-50 dark:bg-slate-800" >
                            <option>tripleS</option>
                            <option>ARTMS</option>
                        </select>
                    </div>
                    <div>Want</div>
                    <div>3</div>
                    <div>Search</div>
            </div>
            
        </div>
        <div
                className='flex text-black justify-end bg-white bg-cover'>
                <button
                    className='border-2 border-violet-500 rounded-md'>
                    글쓰기
                </button>
            </div>
    </div>
  );
}