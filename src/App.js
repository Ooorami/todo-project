import {useEffect, useState} from 'react';
import './App.css';

function App() {

  const [value, setValue] = useState("");
  const [list,setList] = useState([]);
  // [{title: "~~"}, "~~"]

  useEffect ( ()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response=>response.json())
        .then(response=>{
          setList(response.slice(0,9))});
  },[] )

  const onClick = ()=>{
    // const copy = [...list];
    // const newTodo = {title: value}
    // copy.push(newTodo)
    // setList(copy)
    setList(prev=>[...prev, {title: value}]);
    setValue("");
  }

  const valueDelete = (id) => {
    setList((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} placeholder='할 일을 입력하세요.'></input>
      <button onClick={()=>onClick()}>버튼</button>
      {value}
      <ul>
        {
          list.map((item)=><li> <button onClick={() => valueDelete(item.id)}>삭제</button> {item.title} </li>)
        }
      </ul>
    </div>
  );
}
export default App;