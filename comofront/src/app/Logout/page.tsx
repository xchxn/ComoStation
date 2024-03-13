import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

async function Logout(): Promise<any> {
  "use server";
  const rawFormData = {
    // id: formData.get("id"),
    token : cookies().get('token'),
  };

  console.log(cookies().get("token")?.value);

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookies().get("token")?.value}`,
    },
    body: JSON.stringify(rawFormData),
  };

  const res = await fetch(`http://localhost:3001/auth/logout`, requestOptions);
  // 서버에서의 응답을 JSON 형식으로 파싱
  const data = await res.json();

  // 사용자가 존재하는 경우
  if (data) {
    // cookies().set('id', data.id);
    // 반환 값이 존재할 때, maxAge로 쿠키 만료 시키기
    cookies().delete('id');
    cookies().delete('token');
    console.log("로그아웃 성공.");
    redirect(`/`);
    //로그인 성공 시, 메인페이지로 리디렉션 요망.
  } else {
    // 사용자가 존재하지 않는 경우
    console.log("로그아웃 실패.");
  }
}
export default function Page() {
  // const data = Logout();
    return (
      <div>
        <form className="" action={Logout}>
          <button type="submit">
            logout
          </button>
          </form>
        </div>
    )
}