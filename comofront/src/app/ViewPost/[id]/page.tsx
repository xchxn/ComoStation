import Headers from "../../component/layout/header";
import Link from "next/link";
import { NextRouter } from "next/router";
import { redirect } from "next/navigation";

interface Post {
  post_number: number;
  title: string;
  content: string;
  writer: string;
}
interface Comment {
  comment_number: number;
  comment: string;
  writer: string;
}

async function getPosts(post_number: any) {
  console.log(post_number.id);
  const res = await fetch(
    `http://localhost:3001/posting/viewPost/${post_number.id}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("fail fetch data");
  }
  return res.json();
}

async function getComments(post_number: any) {
  console.log(post_number.id);
  const res = await fetch(
    `http://localhost:3001/posting/getComments/${post_number.id}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("fail fetch data");
  }
  return res.json();
}

async function addComment(post_number: any, formData: FormData): Promise<any> {
  "use server";
  const rawFormData: any = {
    post_number: post_number.id,
    comment: formData.get("comment"),
    writer: "writer",
    //writer: formData.get("writer"),
    //작성자는 캐시로.
  };

  console.log(rawFormData);

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(rawFormData),
  };

  const res = await fetch(
    `http://localhost:3001/posting/addComment`,
    requestOptions
  );

  if (!res.ok) {
    throw new Error("fail fetch data");
  }

  return res.json();
}

//게시글번호를 매개로 게시글 내용을 확인하는 페이지
export default async function Page({
  params,
}: {
  params: { post_number: number };
}) {
  const data = await getPosts(params);
  const addPostNumtoComment = addComment.bind(null, params);
  const commentData = await getComments(params);
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
      <div id="comment">
        <form action={addPostNumtoComment}>
          <input
            className="grow border-4 border-[#63aad3] rounded-lg p-1 text-black"
            type="text"
            name="comment"
            placeholder="comment"
          ></input>
        <div className="flex text-black justify-end bg-white bg-cover">
          <button
            className="border-2 border-[#63aad3] px-2 rounded-md bg-[#22aeff] text-white"
            type="submit"
          >
            Add
          </button>
          </div>
          </form>
        </div>
        <div className="grow flex-wrap">
          <table>
            <thead>
              <tr>
                <th>Comment</th>
                <th>Writer</th>
              </tr>
            </thead>
            <tbody>
              {commentData.map((comment: Comment) => (
                <tr key={comment.comment_number}>
                  <td>{comment.comment}</td>
                  <td>{comment.writer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </>
  );
}
