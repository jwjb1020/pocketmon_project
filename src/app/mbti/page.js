"use client"

import { useRouter } from "next/navigation";

export default function Mbti(){
    const router = useRouter();
    const startTest=()=>{
        router.push("/mbti/1")
        
    };

    return(
        <>
            <button onClick ={startTest} className="bg-gray-800 hover:bg-blue-700 text-white font-bold my-96 w-32 py-2 px-4 rounded inline-block">모험시작</button>
        </>
    )
}