import React, { useEffect, useState } from 'react';

const TodoItem = (props) => {
    const [todoItem, setTodoItem] = useState(props.data);

    useEffect(() => {
        fetch(`http://localhost:8080/todoItems/${todoItem.id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(todoItem),
        })
            .then((response) => response.json())
            .then((data) => {
                setTodoItem(data);
            })
    }, [todoItem]);

    return (
        <>
            <input
                type="checkbox"
                checked={todoItem.isDone}
                onChange={() => {
                    return setTodoItem({ ...todoItem, isDone: !todoItem.isDone })
                }}
            />
            <span>{todoItem.task}</span>
        </>
    )
};

export default TodoItem;