
import { useRef, useReducer } from 'react'
import './App.css'
import Editor from './Components/Editor'
import Header from './components/Header'
import List from './components/List'

  const mockData =[
    {
    id:0,
    isDone : false,
    content :"React 공부하기",
    date : new Date().getTime(),
  },
   {
    id:1,
    isDone : false,
    content : "빨래하기",
    date : new Date().getTime(),
  },
   {
    id:2,
    isDone : false,
    content :"노래 연습하기",
    date : new Date().getTime(),
  },
];


function reducer(state,action){
  switch(action.type){
    case 'CREATE': {
      return [action.data,...state];
    }
    case 'UPDATE': {
      return state.map((it)=>it.id === action.data?  {...it, isDone : !it.isDone}: it)    }
    
    case 'DELETE': {
      return state.filter((it) => it.id !== action.data)
    }
    }

}


function App() {
  const [todos, dispatch] = useReducer(reducer,mockData);
  // const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3)

  const onCreate = (content)=>{
    dispatch({
      type : "CREATE",
      data : {
      id : idRef.current++,
      inDone : false,
      content: content,
      date : new Date().getTime()

      },
    });

    // setTodos([newTodo,...todos]);

  }


  const onUpdate = (targetId) => {
     dispatch({
      type : "UPDATE",
      data : targetId
    });





    // todos State 의 값들 중에
    // targetId와 일치하는 id를 갖는 투두 아이템의 isDone 변경

    // 인수 : todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 새로운 배열
//     setTodos(todos.map((todo)=>
//       todo.id === targetId
//     ? {...todo, isDone: !todo.isDone} : todo
//   )
// );
}
    const onDelete = (targetId) => {
       dispatch({
      type : "DELETE",
      data : targetId

    
    });




      // 인수 : todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열
      // setTodos(todos.filter((todo)=> todo.id !== targetId));
    }


  return (
    <div className='App'>
    <Header/>
    <Editor onCreate={onCreate}/>
    <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  );
}

export default App;