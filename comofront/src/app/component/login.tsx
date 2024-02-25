"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from './layout/header';
import { cookies } from 'next/headers'

async function Login(formData: any) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };
  console.log(requestOptions);
  const res = await fetch(`http://localhost:3001/auth/login`, requestOptions);
  // 서버에서의 응답을 JSON 형식으로 파싱
  const data = await res.json();
  console.log(data);
  // 사용자가 존재하는 경우
  if (data) {
    console.log("로그인 성공.");
  } else { // 사용자가 존재하지 않는 경우
    console.log("로그인 실패.");
  }
}

export default function LoginComponent({ login }: { login: React.ReactNode }) {
    const [formData, setFormData] = useState({
      id: "",
      password: "",
    });

    const handleChange = (e: any) => {
      const { value, name } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
      // console.log("change",formData);
    };

    const handleSubmit = async (e: any) => {
      e.preventDefault();
      await Login(formData);
    };

    const router = useRouter();

    return (
      <>
      <Header />
        <ul className="flex justify-center">
          <li className="grid box-content h-128 w-80 bg-slate-50 mx-2 rounded-lg my-4 justify-items-center overflow-hidden place-items-start p-6 py-8 sm:p-8 lg:p-12">
            <h1 className="my-6 text-4xl text-black">🛰ComoStation</h1>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  className="mx-2 my-1 px-2 py-1 border-2 border-solid rounded-lg text-black"
                  type="id"
                  id="id"
                  name="id"
                  placeholder="아이디"
                  title="아이디"
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  className="mx-2 my-1 px-2 py-1 border-2 border-solid rounded-lg text-black"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="비밀번호"
                  title="비밀번호"
                  onChange={handleChange}
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
                  onClick={() => router.push('/SignUp')}
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
        {login}
      </>
    );
  }

