import './App.css';
import React from 'react'
import { Fragment, useEffect, useState } from 'react';
import TodoItem from './components/todoitem';

function App() {
  const [todoItems, setTodoItems] = useState(null);


  useEffect(() => {
    console.log("testing")

    if (!todoItems) {
      fetch('http://localhost:8080/todoItems/')
        .then((response) => response.json())
        .then((data => {
          console.log("Todo items list ", data)
          setTodoItems(data);
        }));
    }
  }, [todoItems])
  return (
    <div>
      <div>
        <button>Add New Task</button>
      </div>
      <div>
        {todoItems
          ? todoItems.map(todoItem => {
            return <TodoItem key={todoItem.id} data={todoItem} />
          })
          : 'loading'}
      </div>
    </div>
  );
}

export default App;
