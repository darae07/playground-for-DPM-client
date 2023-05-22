"use client";

import Link from "next/link";

export default function Login() {
  const login = () => {
    if (window.ReactNativeWebView) {
      /**로그인 성공 후 RN에 토큰을 보내줍니다. */
      window.ReactNativeWebView.postMessage(
        JSON.stringify({ type: "BEARER_TOKEN", message: "1" })
      );
    }
    window.localStorage.setItem("token", "1");
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>로그인 페이지</h1>
      <button onClick={login}>login</button>
      <div>
        <Link href="/">Home</Link>
      </div>
    </main>
  );
}
