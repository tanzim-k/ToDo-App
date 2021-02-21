import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

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
      {todoItems ? todoItems.map(todoItem => {
        return <input type="checkbox" checked={todoItem.isDone} />
      }) : 'loading'}</div>
  );
}

export default App;
