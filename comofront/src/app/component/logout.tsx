// "use client";
// import { useEffect, useRef } from "react";
// import { useRouter } from 'next/navigation';

// export default function SignOutAction({ deleteTokens }): Promise<null> {
//   const deleteTokensRef = useRef(deleteTokens);
//   const router = useRouter();
  
//   console.log("logout");
//   useEffect(() => {
//     deleteTokensRef.current = deleteTokens;
//   });

//   useEffect(() => {
//     deleteTokensRef.current();
//   }, []);
//   return null;
// }
