
import { useState , useEffect, useReducer, useRef } from 'react';
import './App.css'
import Controller from './components/Controller';
import Viewer from './components/Viewer';
import Even from './components/Even';


// 1. 마운트 ( 탄생 )
// 2. 업데이트 ( 변화 ,리렌더 )
// 3. 언마운트 ( 죽음 )

function App() {
  const [count,setCount] = useState(0);
  const [text, setText] = useState("");
 
  // 마운트 - deps 에 빈배열 작성
  // useEffect(()=>{
  //   console.log("마운트");
  // },[]);



  // 업데이트 - deps를 작성하지 않는다.
  // const isMountRef = useRef(false); // 최초 마운트 시 콘솔에 업데이트 찍히는 것 방지
  // useEffect(()=>{
  //   if(!isMountRef.current){
  //     isMountRef.current = true;
  //     return;
  //   }
  //   console.log("업데이트");
  // }); 


  // 언마운트 
  



  // useEffect에서
  //  배열안의 값이 바뀔 때마다, 앞의 콜백 함수가 실행됨.
  // 두번째 배열을 의존성 배열, dependency array, deps라고 함.
  // deps에는 여러 값을 넣을 수도 있음. 

  const onClickButton = (value) => {
      setCount(count + value);
  }; 

  const onChangeText = (e)=>{
    setText(e.target.value);
  }

  return (
    <div className="App">
      <h1>Simple Counter</h1>
    <section>
      <input value={text} onChange={onChangeText}/>
    </section>
      <section>
        <Viewer count={count}/>
        {count % 2 === 0 && <Even />}
      </section>
      <section>
       <Controller onClickButton={onClickButton}/>
      </section>
    </div>
  );
}

export default App