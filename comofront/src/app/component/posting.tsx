"use client"
import Header from '../component/layout/header';
import objektFilter from './layout/objektFilter';

export default function Posting(){
  return (
    <div>
        <Header />
        {/* <ObjektFilter /> */}
        <div>
            제목
        </div>
        <div
                className='flex text-black justify-end bg-white bg-cover'>
                <button
                    className='border-2 border-violet-500 rounded-md'>
                    등록
                </button>
            </div>
    </div>
  );
}