import { useEffect } from "react";

export default function Even() {


  useEffect(()=>{
    return()=>{
      console.log("언마운트");
    };
  },[]);


    // useEffect의 첫 번째 인수로 전달한 콜백 함수가 새로운 함수 반환 -> 컴포넌트가 언마운트 될 때 실행
    // deps에 빈 배열을 추가 한 이유 ->  deps에 빈 배열을 추가 시 마운트 시점에 한 번만 호출 되므로 두 번 다시 호출 x
    // 그러므로 콜백 함수가 다시 호출 되지 않음 ( 함수 실행 조건 충족 x )  
    // 오직 언마운트 될 때만 실행 되는 코드임

  return <div>짝수입니다</div>;
}