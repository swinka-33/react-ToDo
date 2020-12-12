import React from 'react';

const TodoItem = (props) => {
    return (
        <li>
            <strong>
                { props.index + 1 }
            </strong>
            {props.todo.title}
        </li>
    );
};

export default TodoItem;