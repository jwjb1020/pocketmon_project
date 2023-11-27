"use client"
import useStoreClass from "@/stores/store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


// Question 컴포넌트를 정의합니다.
export default function Question(props) {

  const router = useRouter();
  // URL 파라미터에서 'id'를 추출합니다.
  const id = props.params.id;
  // 데이터 상태를 초기화합니다.
  const [data, setData] = useState();
  // zustand 사용
  const {classList,pushClass,resetClass} = useStoreClass();
  

// 비동기 함수를 선언하여 데이터를 가져오는 로직을 작성합니다.
useEffect(() => {
  fetch(`/api/mbtilogic?id=${id}`, { method: "GET" })
    .then((res) => res.json())
    .then((res) => {
      // console.log(classList)
      // console.log("len",classList.length)
      setData(res);
      console.log(classList)
   
    })
  
}, []);

// 다음 질문으로 이동하는 핸들러 함수
function handleNextQuestion(index) {
  
  const nextId = parseInt(id, 10) + 1;
  console.log("id",nextId)
  

  fetch(`/api/mbtilogic?id=${nextId}`, { method: "GET" })
    .then((res) => res.json())
    .then((res) => {
      // 선택된 mbti 클래스 저장
      const selectedClass = data.answers[index].class;
      pushClass(selectedClass)
      router.push(`/mbti/quest/${nextId}`, { method: "GET" });
      
       // 리스트가 12개이면 pocketmon 페이지로 이동
      if(nextId==13){
      console.log("good")
      router.push("/mbti/pocketmon")
      }
    
     
    });
}

  // 데이터가 없을 때 로딩 메시지를 출력합니다.
  if (!data) {
    return <div>Loading...</div>;
  }

  // 데이터가 있을 때 화면을 렌더링합니다.
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="container mx-auto p-8">
        <div className="mb-4 text-center">
          {/* 현재 질문의 상황과 질문 내용을 출력합니다. */}
          상황 {data.question.id} . {data.question.question}
        </div>

        <ul className="space-y-2">
          {/* 각각의 선택지에 대한 버튼을 렌더링합니다. */}
          {data.answers.map((answer, index) => (
            <li key={index}>
              <button
                className="bg-slate-600 text-white p-4 rounded-full transform hover:scale-105 transition duration-300"
                onClick={() => handleNextQuestion(index)}
              >
                {answer.answer}
              </button>
            </li>
            
          ))}
        </ul>
      </div>
    </div>
  );
}
