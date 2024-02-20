import { useEffect } from "react";

function Login(){

  return (
    <ul>
      <li className="grid box-content h-128 w-80 bg-gray-700 mx-2 rounded-lg my-4 justify-items-center overflow-hidden place-items-start p-6 py-8 sm:p-8 lg:p-12">
        <h1 className="my-6 text-4xl">🛰ComoStation</h1>
        <div>
            <input
                className="mx-2 my-1 px-2 py-1 border-2 border-solid rounded-lg"
                type="id"
                id="id"
                name="id"
                placeholder="아이디"
                title="아이디"
                />
        </div>
        <div>
            <input
                className="mx-2 my-1 px-2 py-1 border-2 border-solid rounded-lg"
                type="password"
                id="pw"
                name="pw"
                placeholder="비밀번호"
                title="비밀번호"
                />
        </div>
        <div>
            <button className="mx-2 my-1 border-2 border-solid rounded-md bg-blue-700 px-4 py-1"> Log in</button>
            <button className="mx-2 my-1 border-2 border-solid rounded-md bg-blue-700 px-4 py-1"> Sign up</button>
        </div>
      </li>
    </ul>
  );
}
export default Login
