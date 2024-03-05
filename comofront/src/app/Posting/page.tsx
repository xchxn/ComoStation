import Header from "../component/layout/header";

interface Posts {
  title: string;
  content: string;
  writer: string;
}

async function doPost(formData: FormData): Promise <any> {
  "use server";
  const rawFormData : any = {
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

  const res = await fetch(`http://localhost:3001/posting/posting`, requestOptions);

  if (!res.ok) {
    throw new Error("fail fetch data");
  }

  return res.json();
}

export default async function Posting() {
  return (
    <div>
      <Header />
      {/* <ObjektFilter /> */}
      <div className="w-full flex flex-col gap-2 justify-center text-black">
        <form action={doPost}>
          <div><input type="text" name="title" placeholder="Enter the title" /></div>
          <div> <input type="text" name="content" placeholder="Content" /></div>
          <div><input type="text" name="writer" placeholder="Writer" /></div>
          <div className="flex text-black justify-end bg-white bg-cover">
            <button
              className="border-2 border-violet-500 rounded-md"
              type="submit"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
