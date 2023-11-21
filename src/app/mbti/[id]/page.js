"use client"


import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Question(props) {

// 파라미터의 아이디값 가지고 오기
  const id = props.params.id;
  //클라이언트 서버 라우터
  const router = useRouter();
  //useState로 초기값 null 만들기
  const [data, setData] = useState(null);

  // useEffect로 처음으로 렌더링 될때 데이터가지고 오기
  useEffect(() => {
    // promise 이용 async, await
    const fetchData = async () => {
      try {
        //api에서 데이터 가지고 오기
        const response = await fetch(`/api/mbtilogic?id=${id}`);
        const result = await response.json();
        // 가져온 데이터를 상태로 설정
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    //컴포넌트가 렌더링 될때 fetchData 실행
    fetchData();
    // id가 변경되면 재 렌더링
  }, [id]);

    const handleNextQuestion = () => {
        const nextId = parseInt(id,10) +1;
        router.push(`/mbti/${nextId}`);
    }

  if (!data) {
    return <div></div>;
  }

  return (
    <div className="flex items-center justify-center h-screen">
    <div className="container mx-auto p-8">
      <div className="mb-4 text-center">
        상황 {data.question.id} . {data.question.question}
      </div>

      <ul className="space-y-2">
        {data.answers.map((answer, index) => (
          <li key={index}>
            <button
              className="bg-slate-600 text-white p-4 rounded-full transform hover:scale-105 transition duration-300"
              onClick={handleNextQuestion}
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
