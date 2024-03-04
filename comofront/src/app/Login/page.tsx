import Header from "../component/layout/header";
import { cookies } from 'next/headers'

async function Login(formData: any): Promise<any> {
  "use server";
  const rawFormData = {
    id: formData.get("id"),
    password: formData.get("password"),
  };

  console.log(rawFormData);

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(rawFormData),
  };

  const res = await fetch(`http://localhost:3001/auth/login`, requestOptions);
  // 서버에서의 응답을 JSON 형식으로 파싱
  const data = await res.json();

  // 사용자가 존재하는 경우
  if (data) {
    console.log("로그인 성공.");
    //로그인 성공 시, 메인페이지로 리디렉션 요망.
  } else {
    // 사용자가 존재하지 않는 경우
    console.log("로그인 실패.");
  }
}
async function create() {
  cookies().set('name', 'lee')
  // or
  cookies().set('name', 'lee', { secure: true })
  // or
  cookies().set({
    name: 'name',
    value: 'lee',
    httpOnly: true,
    path: '/',
  })
}

export default function Page() {
  return (
    <>
      <Header />
      <ul className="flex justify-center">
        <li className="grid box-content h-128 w-80 bg-slate-50 mx-2 rounded-lg my-4 justify-items-center overflow-hidden place-items-start p-6 py-8 sm:p-8 lg:p-12">
          <h1 className="my-6 text-4xl text-black">🛰ComoStation</h1>
          <form action={Login}>
            <div>
              <input
                className="mx-2 my-1 px-2 py-1 border-2 border-solid rounded-lg text-black"
                type="id"
                id="id"
                name="id"
                placeholder="아이디"
              />
            </div>
            <div>
              <input
                className="mx-2 my-1 px-2 py-1 border-2 border-solid rounded-lg text-black"
                type="password"
                id="password"
                name="password"
                placeholder="비밀번호"
              />
            </div>
            <div>
              <button
                className="mx-2 my-1 border-2 border-solid rounded-md bg-blue-700 px-4 py-1"
                type="submit"
              >
                Login
              </button>
              <button
                className="mx-2 my-1 border-2 border-solid rounded-md bg-blue-700 px-4 py-1"
                type="button"
                // onClick={() => router.push("/SignUp")}
              >
                Sign Up
              </button>
            </div>
            <div>
              <p className="text-gray-400 text-sm">
                If you don`t have an id, sign up
              </p>
            </div>
          </form>
        </li>
      </ul>
    </>
  );
}
