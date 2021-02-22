import React, { useEffect, useState } from 'react';

const TodoItem = (props) => {
    const { emitDeleteTodoItem } = props;
    const [todoItem, setTodoItem] = useState(props.data);
    const [isModified, setModified] = useState(false);

    useEffect(() => {
        if (isModified) {
            fetch(`http://localhost:8080/todoItems/${todoItem.id}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(todoItem),
            })
                .then((response) => response.json())
                .then((data) => {
                    setModified(false);
                    setTodoItem(data);
                })
        }

    }, [todoItem, isModified]);

    function updateTask(e) {
        setModified(true)
        setTodoItem({ ...todoItem, task: e.target.value });
    }

    function deleteTodoItem() {
        fetch(`http://localhost:8080/todoItems/${todoItem.id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                emitDeleteTodoItem(todoItem)
            });
    }

    return (
        <div>
            <input
                type="checkbox"
                checked={todoItem.isDone}
                onChange={() => {
                    setModified(true);
                    setTodoItem({ ...todoItem, isDone: !todoItem.isDone })
                }}
            />
            {
                todoItem.isDone ? (
                    <span style={{ textDecoration: "line-through" }}>{todoItem.task}</span>
                ) : (
                        <input type='text' value={todoItem.task} onChange={updateTask} />


                    )}
            <span
                style={{ marginLeft: "2rem", cursor: "pointer" }}
                onClick={deleteTodoItem}
            >
                ⛔
                </span>
        </div>
    )
};

export default TodoItem;