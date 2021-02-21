import React, { useState } from 'react';

const TodoItem = (props) => {
    const [todoItem, setTodoItem] = useState(props.data);

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