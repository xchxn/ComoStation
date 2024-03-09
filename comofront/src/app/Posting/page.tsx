import Header from "../component/layout/header";

interface Posts {
  title: string;
  content: string;
  writer: string;
}

async function doPost(formData: FormData): Promise<any> {
  "use server";
  const rawFormData: any = {
    title: formData.get("title"),
    content: formData.get("content"),
    writer: formData.get("writer"),
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
    `http://localhost:3001/posting/posting`,
    requestOptions
  );

  if (!res.ok) {
    throw new Error("fail fetch data");
  }

  return res.json();
}

export default async function Posting() {
  return (
    <div>
      {/* <ObjektFilter /> */}
      <div className="container flex flex-wrap mx-auto border-4 border-[#c4c4c4] rounded-lg  w-full h-full align-center justify-center justify-items-center text-black bg-white">
        <div className="grow w-full ml-10 mt-10 mx-8 text-gray-400">게시글 작성</div>
        <div className="grow w-full mx-10 my-10">
          <form action={doPost}>
            <div className="grow h-full my-4">
              <input className="grow w-full border-4 border-[#63aad3] rounded-lg p-1" type="text" name="title" placeholder="Enter the title" />
            </div>
            <div className="grow my-4">
              <input className="grow w-full h-96 border-4 border-[#63aad3] rounded-lg p-1" type="text" name="content" placeholder="Content" />
            </div>
            <div>
              <input className="grow border-4 border-[#63aad3] rounded-lg p-1" type="text" name="writer" placeholder="Writer" />
            </div>
            <div className="flex text-black justify-end bg-white bg-cover">
              <button
                className="border-2 border-[#63aad3] px-2 rounded-md bg-[#22aeff] text-white"
                type="submit"
              >
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
