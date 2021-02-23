import './App.css';
import React from 'react'
import { Fragment, useEffect, useState } from 'react';
import TodoItem from './components/todoitem';

function App() {
  const [todoItems, setTodoItems] = useState(null);


  useEffect(() => {
    console.log("testing")

    if (!todoItems) {
      fetch('https://peaceful-woodland-23958.herokuapp.com/todoItems/')
        .then((response) => response.json())
        .then((data => {
          console.log("Todo items list ", data)
          setTodoItems(data);
        }));
    }
  }, [todoItems])

  function addNewTodoItem() {
    fetch(`https://peaceful-woodland-23958.herokuapp.com/todoItems/`, {
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

  function handleDeleteTodoItem(item) {
    const updatedTodoItems = todoItems.filter(aTodoItem => aTodoItem.id !== item.id);
    setTodoItems([...updatedTodoItems]);
  }

  return (
    <div>
      <div>
        <button onClick={addNewTodoItem}>Add New Task</button>
      </div>
      <div>
        {todoItems
          ? todoItems.map(todoItem => {
            return <TodoItem key={todoItem.id} data={todoItem} emitDeleteTodoItem={handleDeleteTodoItem} />
          })
          : 'loading'}
      </div>
    </div>
  );
}

export default App;
