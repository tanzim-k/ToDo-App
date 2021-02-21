import React, { useEffect, useState } from 'react';

const TodoItem = (props) => {
    const [todoItem, setTodoItem] = useState(props.data);

    useEffect(() => {
        console.log("to do item changed", todoItem)
    }, [todoItem])

    function updateIsDone() {
        setTodoItem({ ...todoItem, isDone: !todoItem.isDone })
    }

    return (
        <>
            <input
                type="checkbox"
                checked={todoItem.isDone}
                onChange={updateIsDone}
            />
            <span>{todoItem.task}</span>
        </>
    )
};

export default TodoItem;