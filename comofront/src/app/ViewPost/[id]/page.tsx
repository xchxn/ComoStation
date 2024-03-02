import Headers from "../../component/layout/header";
import Link from 'next/link';
import { NextRouter } from 'next/router'
import { redirect } from 'next/navigation'

interface Post {
  post_number: number;
  title: string;
  content: string;
  writer: string;
}
interface Comment {
  post_number: number;
  comment_number: number;
  content: string;
  writer: string;
}

async function getPosts( post_number: any ) {
  console.log(post_number.id);
  const res = await fetch(`http://localhost:3001/posting/viewPost/${post_number.id}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("fail fetch data");
  }
  return res.json();
}

export default async function Page( { params }: { params: { post_number: number } } ) {
  const data = await getPosts(params);
  //테이블처리
  return (
    <>
      <Headers />
      <div className="text-black bg-white">
        <div>Post Number: {data.post_number} </div>
        <div>Title: {data.title}</div>
        <div>Content: {data.content}</div>
        <div>Writer: {data.writer}</div>
      </div>
    </>
  );
}
