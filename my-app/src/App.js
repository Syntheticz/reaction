import { functions } from 'lodash';
import React, { useState , useRef} from 'react';
import Todolist from "./Todolist";
import { nanoid } from 'nanoid';

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();
  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, {id: nanoid(), name: name, complete: false}]
    })
    todoNameRef.current.value = null;
  }

  return (
    <>
    <Todolist todos = {todos}/>
    <input ref={todoNameRef} type="text" placeholder = "Todolist" />
    <button onClick={handleAddTodo}>Add Todo</button>
    <button>Clear</button>
    <div>0 Left Todo</div>
    </>
  );
}

export default App;
