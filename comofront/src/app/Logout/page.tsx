import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
// async function Logout(): Promise<any> {
//     "use server";
//       cookies().set('id', 'value', { maxAge: 0 });
//       console.log("로그아웃 성공.");
//       redirect(`/`);
//       //로그인 성공 시, 메인페이지로 리디렉션 요망.
//   }
export default async function Page() {
    return (
        <div>
            <button
              className="mx-2 my-1 border-2 border-solid rounded-md bg-[#22aeff] px-4 py-1"
              type="button"
            >
              Logout
            </button>
        </div>
    )
}