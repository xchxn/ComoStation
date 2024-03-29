import Headers from "../../component/layout/header";
import Link from "next/link";
import { NextRouter } from "next/router";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

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
      next: { revalidate: 10 },
    }
  );

  if (!res.ok) {
    throw new Error("fail fetch data");
  }
  return res.json();
}

async function addComment(post_number: any, formData: FormData): Promise<any> {
  "use server";
  const getId = cookies().get("id");
  const rawFormData: any = {
    post_number: post_number.id,
    comment: formData.get("comment"),
    writer: getId?.value,
    //writer: formData.get("writer"),
    //작성자는 캐시로.
  };

  console.log(rawFormData);

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookies().get("token")?.value}`,
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
  const userId = cookies().get("id");
  //테이블처리
  return (
    <div>
      <div className="container flex flex-wrap mx-auto border-4 border-[#c4c4c4] rounded-lg  w-full h-full align-center justify-center justify-items-center text-black bg-white">
        <div className="flex text-black bg-white">
          <div>Post Number: {data.post_number} </div>
          <div>Title: {data.title}</div>
          <div>Writer: {data.writer}</div>
          <div className="flex flex-wrap text-black bg-white">
            Content: {data.content}
          </div>
        </div>
      </div>
      <div className="container flex mx-auto mt-2 border-4 border-[#c4c4c4] rounded-lg  w-full h-full align-middle items-center content-center justify-evenly justify-items-center text-black bg-white">
        <div className="flex mx-auto" id="comment">
          <div className="border-2 bg-gray-400 px-2 border-[#c4c4c4] rounded-sm mx-2">
            {userId?.value}
          </div>
          <div className="flex">
            <form action={addPostNumtoComment}>
              <div className="flex">
                <input
                  className="border-4 border-[#63aad3] rounded-lg p-1 text-black"
                  type="text"
                  name="comment"
                  placeholder="comment"
                ></input>
              </div>
              <div className="flex text-black bg-white bg-cover">
                <button
                  className="border-2 border-[#63aad3] px-2 rounded-md bg-[#22aeff] text-white"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex">
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
      </div>
    </div>
  );
}
