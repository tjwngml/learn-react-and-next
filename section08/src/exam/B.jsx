import { act, useReducer } from "react";


  // 2. 외부에 reducer라는 함수를 만들어줌

  function reducer(state,action) {
    if(action.type === 'DECREASE'){
      return state - action.data;
    }
    else if(action.type === 'INCREASE') {
      return state + action.data;
    } 
  }

  // useReducer hook을 이용해서 외부에서 상태 변화를 처리하는 함수를 만들었음

export default function B() {

  const [count,dispatch] = useReducer(reducer,0); 
  // 1. useReducer hook에는 인수로 두 가지 값을 전달해야 함. 

  // 첫번째로는 reducer라는 함수고 두번째로는 생성하려는 state의 초기값(0)임.
  // useReducer는 useState와 동일하게 [count, dispatch] 처럼 두 요소로 이루어진 배열을 반환.
  // 첫 번째 요소 count는 useState와 동일함. state의 값이 저장됨.
  // 두 번째 요소는 dispatch라는 이름으로 저장, 함수가 저장됨. ( 상태 변화를 발동 시키는 트리거 역할을 하는 함수 )
  //  즉, dispatch 함수를 호출하면 count state 값이 변경 됨. dispatch 함수는 상태 변화를 처리하지 않는다는 점에서 상태 변화 함수와는 다르다.
  // 상태 변화 처리는 reducer 함수가 처리한다.
   
  return(

    <div>
      <h4>{count}</h4>
        <button onClick={()=>{dispatch({
            type : "DECREASE",
            data : 1
            // dispatch 함수가 상태 변화 촉발 -> useReducer의 첫번째 인수, reducer 함수가 호출
        });}}>-</button>
        <button onClick={()=>{dispatch({
            type : "INCREASE",
            data : 1
        })}}>+</button>
    </div>
  );
} 
