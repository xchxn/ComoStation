'use client'
import { useEffect, useState } from 'react';

async function Authentication(formData: any) {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    console.log(requestOptions);
    const res = await fetch(`http://localhost:3001/auth`, requestOptions);
  }
  
export default function AuthComponent({
    auth,
  }: {
    auth: React.ReactNode
  }) {
  const [formData, setFormData] = useState({
    id: '',
    nickname: '',
    password:'',
    pwCheck: ''
  });

  const handleChange = (e: any) => {
    const { value, name } = e.target;
    setFormData({
        ...formData,
        [name] : value
    });
    // console.log("change",formData);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await Authentication(formData);
  };

  return (
    <>
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
              placeholder="사용할 아이디"
              title="사용할 아이디"
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              className="mx-2 my-1 px-2 py-1 border-2 border-solid rounded-lg text-black"
              type="name"
              id="nickname"
              name="nickname"
              placeholder="사용할 닉네임"
              title="사용할 닉네임"
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
            <input
              className="mx-2 my-1 px-2 py-1 border-2 border-solid rounded-lg text-black"
              type="password"
              id="pwCheck"
              name="pwCheck"
              placeholder="비밀번호 확인"
              title="비밀번호 확인"
              onChange={handleChange}
            />
          </div>
          <div>
            <button
                className="mx-2 my-1 border-2 border-solid rounded-md bg-blue-700 px-4 py-1"
                type="submit">
              Sign up
            </button>
          </div>
        </form>
      </li>
    </ul>
    {auth}
    </>
  );
}