import Headers from "../component/layout/header";
async function getPosts() {
  'use server';
  const res = await fetch(`http://localhost:3001/posting/getPosts`);

  if (!res.ok) {
    throw new Error("fail fetch data");
  }

  return res.json();
}

export default async function Posting() {
    const data = await getPosts()
    //테이블처리
    return (
        <>
        <Headers />
        <div className="text-black bg-white">
            { data.map((data:any) => <li key={data.post_number}> {data.title}</li>)}
        </div>
    </>
  )
}