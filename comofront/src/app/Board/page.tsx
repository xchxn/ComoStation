import Headers from "../component/layout/header";
import Link from 'next/link';

interface Post {
  post_number: number;
  title: string;
  content: string;
  writer: string;
}

async function getPosts() {
  'use server'
  const res = await fetch(`http://localhost:3001/posting/getPosts`,{ next: { revalidate: 60 } });

  if (!res.ok) {
    throw new Error("fail fetch data");
  }
  return res.json();
}

export default async function Page() {
    const data = await getPosts();
    //테이블처리
    return (
        <>
        <Headers />
        <div className="text-black bg-white">
        <table>
          <thead>
            <tr>
              <th>Post Number</th>
              <th>Title</th>
              <th>Content</th>
              <th>Writer</th>
            </tr>
          </thead>
          <tbody>
            {data.map((post : Post) => (
              <tr key={post.post_number}>
                <td>{post.post_number}</td>
                <td>
                  <Link href={`/ViewPost/${post.post_number}`}>
                    {post.title}
                  </Link>
                  </td>
                <td>{post.content}</td>
                <td>{post.writer}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
    </>
  )
}