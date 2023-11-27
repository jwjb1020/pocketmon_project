"use client";

import useStoreClass from "@/stores/store";
import { useRouter } from "next/navigation";

export default function Layout({ children }) {
  const { resetClass } = useStoreClass();
  const router = useRouter();

  function returnTest() {
    resetClass();
    router.push("/mbti");
  }

  return (
    <div className="bg-white m-6 p-6 rounded-lg shadow-lg">
      <p className="text-2xl font-bold mb-4">당신의 포켓몬은??</p>
      {children}
      <button
        onClick={() => returnTest()}
        className="bg-blue-500 text-white px-4 py-2 rounded-full mt-4 hover:bg-blue-600 transition duration-300"
      >
        다시하기
      </button>
    </div>
  );
}
