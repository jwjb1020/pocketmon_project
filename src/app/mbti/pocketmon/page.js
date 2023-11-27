"use client"
import useStoreClass from "@/stores/store";
import { useEffect, useState } from "react";


export default function Pocketmon(){
    //전역변수 불러오기
    const {classList} = useStoreClass();
    // useState로 변수 관리
    const [data,setData] = useState();
    const mbtiCount = classList.reduce((count, mbtiType) => {
        // 유효한 MBTI 유형인지 확인
        if (['e', 'i', 'n', 's', 'f', 't', 'j', 'p'].includes(mbtiType)) {
        count[mbtiType]++;
        } else {
        // 예외 처리: 유효하지 않은 MBTI 유형일 경우
        console.error(`Invalid MBTI type: ${mbtiType}`);
        }
        return count;
    }, { e: 0, i: 0, n: 0, s: 0, f: 0, t: 0, j: 0, p: 0 });

    // MBTI 유형별 카운트에 따라 크기 비교하여 mbti1, mbti2, mbti3, mbti4 설정
    const { e, i, n, s, f, t, j, p } = mbtiCount;
    const mbti1 = e > i ? 'e' : 'i';
    const mbti2 = n > s ? 'n' : 's';
    const mbti3 = f > t ? 'f' : 't';
    const mbti4 = j > p ? 'j' : 'p';

    const mbtiResult = mbti1 + mbti2 + mbti3 + mbti4;
    console.log(mbtiResult)
    
    // 처음 한번만 데이터 불러오기
    useEffect(()=>{
         fetch(`/api/mbtiResult?mbti=${mbtiResult}`)
        .then((res)=>res.json())
        .then((res)=>{
            // console.log(res)
            setData(res)
            
        })
    },[])
    console.log("data",data)
    
    if(!data){
        return <>
    
        </>
    }

    return (
        <div className="flex justify-center items-center">
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <img
              className="border border-black mx-auto mb-4"
              src={`/images/poketmon${data.img}.png`}
              alt={data.pocketmon}
            />
            <div className="text-center">
              <p className="text-xl font-bold mb-2">포켓몬 : {data.pocketmon}</p>
              <p className="text-lg mb-2">별명 : {data.name}</p>
              <p className="text-sm text-gray-600">{data.detail}</p>
            </div>
          </div>
        </div>
      );
}