import { use, useState } from "react";

export default function Body(){
  
  const [state, setState] = useState({
    name:"",
    gender:"",
    bio:""
  });

 const onChange =(e)=> {
  setState({
    ...state,
    [e.target.name]: e.target.value,
    // 객체 생성 시 대괄호와 함께 프로퍼티의 name을 쓰는 것 -> 계산된 프로퍼티 
    // computed property . e.target.name에 저장된 값을 프로퍼티의 key로 사용함. 
    });
 }

  return(
    <div className="body">
      <div>
      <input name={"name"} value={state.name} onChange={onChange} />
      </div>
    
      <div>
        <select name={"gender"} value={state.gender} onChange={onChange}>
          <option value=""> 밝히지 않음</option>
          <option value="female"> 여성</option>
          <option value="male"> 남성</option>
        </select>
      </div>
      <div>
        <textarea name={"bio"} value={state.bio} onChange={onChange}/>
      </div>
    </div>
  );
}


