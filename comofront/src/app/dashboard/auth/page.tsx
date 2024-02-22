// import { useEffect } from "react";

// async function getData() {
//   const res = await fetch('https://api.example.com/...')
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data')
//   }
 
//   return res.json()
// }
// async function Authentication( formData: FormData ) {
//   'use server'
//   const rawFormData = {
//     inputId: formData.get('id'),
//     inputName: formData.get('name'),
//     inputPassword: formData.get('password'),
//   }
//   const requestOptions = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(formData)
//   };
//   const res = await fetch(`https://localhost:3001/signUp`, requestOptions)
//   if(rawFormData.inputPassword) return res.json()
//   else
//     console.log("Wrong Password");
// }
// export default async function Page(){
//   return (
//     <ul className="flex justify-center">
//       <li className="grid box-content h-128 w-80 bg-slate-50 mx-2 rounded-lg my-4 justify-items-center overflow-hidden place-items-start p-6 py-8 sm:p-8 lg:p-12">
//         <h1 className="my-6 text-4xl text-black">🛰ComoStation</h1>
//         <form>
//         <div>
//             <input
//                 className="mx-2 my-1 px-2 py-1 border-2 border-solid rounded-lg text-black"
//                 type="id"
//                 id="id"
//                 name="id"
//                 placeholder="아이디"
//                 title="아이디"
//                 />
//         </div>
//         <div>
//             <input
//                 className="mx-2 my-1 px-2 py-1 border-2 border-solid rounded-lg text-black"
//                 type="password"
//                 id="pw"
//                 name="pw"
//                 placeholder="비밀번호"
//                 title="비밀번호"
//                 />
//         </div>
//         <div>
//             <button className="mx-2 my-1 border-2 border-solid rounded-md bg-blue-700 px-4 py-1"> Log in</button>
//             <button className="mx-2 my-1 border-2 border-solid rounded-md bg-blue-700 px-4 py-1"> Sign up</button>
//         </div>
//         </form>
//       </li>
//     </ul>
//   );
// }