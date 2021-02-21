import logo from './logo.svg';
import './App.css';
import React from 'react'
import { Fragment, useEffect, useState } from 'react';

function App() {
  const [todoItems, setTodoItems] = useState(null);


  useEffect(() => {
    console.log("testing")

    if (!todoItems) {
      fetch('http://localhost:8080/todoItems').then((response) =>
        response.json()
      ).then((data => {
        console.log("Todo items list ", data)
        setTodoItems(data);
      }));
    }
  }, [todoItems])
  return (
    <div>
      {todoItems
        ? todoItems.map(todoItem => {
          return (
            <Fragment key={todoItem.id}>
              <input type="checkbox" checked={todoItem.isDone} onChange={ } />{" "}
              <span>{todoItem.task}</span>
            </Fragment>
          );
        }) : 'loading'}</div>
  );
}

export default App;
