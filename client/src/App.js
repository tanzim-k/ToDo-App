import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    console.log("testing")

    fetch('http://localhost:8080/todoItems').then((response) =>
      response.json()
    ).then(todoItems => {
      console.log(todoItems)
    });
  })
  return (
    <div>Hello world</div>
  );
}

export default App;
