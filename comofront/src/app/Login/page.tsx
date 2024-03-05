import Header from "../component/layout/header";
import { cookies } from "next/headers";

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
async function CookieSetting() {
  cookies().set("name", "lee");
  // or
  cookies().set("name", "lee", { secure: true });
  // or
  cookies().set({
    name: "name",
    value: "lee",
    httpOnly: true,
    path: "/",
  });
}

export default function Page() {
  return (
    <div>
      <Header />
      <div className="container mx-auto bg-slate-300 bg-center grid grid-rows-5 grid-flow-col justify-items-center justify-center content-center min-w-30 w-1/2 rounded-lg sm:p-8 lg:p-12 shadow-2xl shadow-[#22aeff]/50">
          <div className="col-span-2 my-6 text-4xl text-black">🛰ComoStation</div>
          <div>
            <form className="" action={Login}>
            <div className="col-span-2">
              <input
                className="col-span-2w-full mx-2 my-1 px-2 py-1 border-2 border-solid rounded-lg text-black"
                type="id"
                id="id"
                name="id"
                placeholder="@ID"
              />
            </div>
            <div className="col-span-2">
              <input
                className="w-full mx-2 my-1 px-2 py-1 border-2 border-solid rounded-lg text-black"
                type="password"
                id="password"
                name="password"
                placeholder="@PASSWORD"
              />
            </div>
            <div className="">
              <div>
                <button
                  className="mx-2 my-1 border-2 border-solid rounded-md bg-[#22aeff] px-4 py-1"
                  type="submit"
                >
                  Login
                </button>
              </div>
              <div>
                <button
                  className=" mx-2 my-1 border-2 border-solid rounded-md bg-[#22aeff] px-4 py-1"
                  type="button"
                  // onClick={() => router.push("/SignUp")}
                >
                  Sign Up
                </button>
              </div>
              <div className="col-start-1 col-end-2 text-gray-400 text-sm">
                If you don`t have an id, sign up
              </div>
            </div>
          </form>
          </div>
        </div>
        </div>
  );
}
