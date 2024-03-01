import Header from "../component/layout/header";
import objektFilter from "./layout/objektFilter";

async function doPost(formData: FormData): Promise <any> {
  const rawFormData = {
    title: formData.get("title"),
    content: formData.get("content"),
    writer: formData.get("writer"),
  };

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(rawFormData),
  };

  const res = await fetch("http://localhost:3001/post", requestOptions);

  if (!res.ok) {
    throw new Error("fail fetch data");
  }

  return res.json();
}

export default async function Posting({ posting }: { posting: React.ReactNode}) {
  return (
    <div>
      <Header />
      {/* <ObjektFilter /> */}
      <div>
        <form action={doPost}>
          <input type="text" name="title">
            title
          </input>
          <input type="text" name="content">
            content
          </input>
          <input type="text" name="writer">
            writer
          </input>
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
