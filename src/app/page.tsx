import { cookies } from "next/headers";
import Link from "next/link";
import { use } from "react";
import RNListener from "./RN/listener";

const getData = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get("BEARER_TOKEN");
  console.log(token);
  if (!token?.value) {
    console.log("no id");
    // 인증 요구하기
    return;
  }
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${token.value}`
  );
  if (!res.ok) {
    throw new Error("error");
  }
  return res.json();
};

export default function Home() {
  const data = use(getData());
  // console.log(data);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <RNListener />
      <p>Home</p>
      {data ? (
        <div>
          <b>Todo item by token</b>
          <p>id: {data.id}</p>
          <p>title: {data.title}</p>
        </div>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </main>
  );
}
