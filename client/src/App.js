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

  function addNewTodoItem() {
    fetch(`http://localhost:8080/todoItems/`, {
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST',
    })
      .then((response) => response.json())
      .then((aTodoItem) => {
        console.log(aTodoItem);

        setTodoItems([...todoItems, aTodoItem]);
      })
  }

  return (
    <div>
      <div>
        <button onClick={addNewTodoItem}>Add New Task</button>
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
