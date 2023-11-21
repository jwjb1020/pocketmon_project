"use client"



export default function MbtiqLayout({ children }) {
 
 

  return (
    <div className="flex flex-col items-center">
    {children}
    <div className="mt-auto mb-4 flex justify-between w-full">
      <button
        className="bg-slate-600 text-white p-2 rounded"
        onClick={() => alert("이전 버튼 클릭")}
      >
        이전
      </button>
      <button
        className="bg-slate-600 text-white p-2 rounded"
        onClick={() => alert("다음 버튼 클릭")}
      >
        다음
      </button>
    </div>
  </div>
  );
}
