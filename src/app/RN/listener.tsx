"use client";
import { useEffect } from "react";

/** react native 에서 보낸 메시지를 수신합니다. */
const RNListener = () => {
  /** react native 환경에서만 가능 */
  const listener = (event) => {
    try {
      const { type, message } = JSON.parse(event.data);
      console.log(type, message);
      if (type === "LOGOUT") {
        // expire cookie
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (window.ReactNativeWebView) {
      /** android */
      document.addEventListener("message", listener);
      /** ios */
      window.addEventListener("message", listener);
    }
  }, []);
  return <></>;
};

export default RNListener;
