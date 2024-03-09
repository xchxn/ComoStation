
async function signUp(formData: FormData): Promise<any> {
  "use server";
  const rawFormData = {
    id: formData.get("id"),
    password: formData.get("password"),
    nickname: formData.get("nickname"),
  };

  console.log(rawFormData);

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(rawFormData),
  };

  const res = await fetch(`http://localhost:3001/auth/signup`, requestOptions);

  if (!res.ok) {
    throw new Error("fail fetch data");
  }
  else console.log("회원가입 성공");
  //로그인 페이지로 리디렉션 로직 추가 요망
  return res.json();
}

async function IdCheck(formData: FormData): Promise<any> {
  "use server";
  const rawFormData = {
    id: formData.get("id"),
  };

  console.log(rawFormData);

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(rawFormData),
  };

  const res = await fetch(`http://localhost:3001/auth/idvalidcheck`, requestOptions);

  if (!res.ok) {
    throw new Error("fail fetch data");
  }

  const data = await res.json();
  // 사용자가 존재하는 경우
  if (data) {
    console.log("동일한 아이디가 존재합니다.");
  } else { // 사용자가 존재하지 않는 경우
    console.log("사용가능한 아이디입니다.");
  }
}
async function nicknameCheck(formData: FormData): Promise<any> {
  "use server";
  const rawFormData = {
    nickname: formData.get("nickname"),
  };

  console.log(rawFormData);

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(rawFormData),
  };

  const res = await fetch(`http://localhost:3001/auth/nicknamevalidcheck`, requestOptions);

  if (!res.ok) {
    throw new Error("fail fetch data");
  }

  const data = await res.json();
  // 사용자가 존재하는 경우
  if (data) {
    console.log("동일한 닉네임이 존재합니다.");
  } else { // 사용자가 존재하지 않는 경우
    console.log("사용가능한 닉네임입니다.");
  }
}

export default async function Page() {
  return (
    <div>
      <div className="container flex flex-col min-w-128 justify-evenly justify-items-center mx-auto max-h-96 bg-slate-300 bg-center gap-4 w-1/2 rounded-lg sm:p-8 lg:p-12 shadow-2xl shadow-[#22aeff]/25">
        <div className="flex justify-center my-6 text-4xl font-medium text-gray-600">ComoStation</div>
        <div className="flex justify-center content-center">
          <form action={signUp}>
            <div className="">
              <input
                className="mx-2 px-2 py-1 border-2 border-solid rounded-lg text-black"
                type="text"
                id="id"
                name="id"
                placeholder="사용할 아이디"
              />
              <button
                  id="idDupCheck"
                  className="mx-2 my-1 border-2 border-solid rounded-md bg-[#22aeff] px-4 py-1"
                  formAction={IdCheck}>
                  Check for duplication
                </button>
            </div>
            <div>
              <input
                className="mx-2 my-1 px-2 py-1 border-2 border-solid rounded-lg text-black"
                type="name"
                id="nickname"
                name="nickname"
                placeholder="사용할 닉네임"
              />
              <button
                id="ninknameDupCheck"
                className="mx-2 my-1 border-2 border-solid rounded-md bg-[#22aeff] px-4 py-1"
                formAction={nicknameCheck}>
                Check for duplication
              </button>
            </div>
            <div>
              <input
                className="mx-2 my-1 px-2 py-1 border-2 border-solid rounded-lg text-black"
                type="password"
                id="password"
                name="password"
                placeholder="비밀번호"
              />
            </div>
            <div>
              <input
                className="mx-2 my-1 px-2 py-1 border-2 border-solid rounded-lg text-black"
                type="password"
                id="pwCheck"
                name="pwCheck"
                placeholder="비밀번호 확인"
              />
            </div>
            <div className="flex justify-center">
              <button
                id="signUp"
                className="flex justify-self-end mx-2 mt-6 border-2 border-solid rounded-md bg-[#22aeff] px-4 py-1"
                type="submit">
                Sign up
              </button>
            </div>
          </form>
          </div>
        </div>
    </div>
  );
}
