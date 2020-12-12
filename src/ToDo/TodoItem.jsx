import React from 'react';
import propTypes from 'prop-types';

const style = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #aaaaaa',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    },
    button: {
        background: 'red',
        borderRadius: '40%',
        color: 'white',
        border: 'none',
        outline: 'none'
    }
}

const TodoItem = ({ todo, index, onChange}) => {
    const classes = [];

    if(todo.completed === true) {
        classes.push('done');
    }

    return (
        <li style={style.li}>
            <span className={classes.join(' ')}>
                <input 
                    style={style.input} 
                    type="checkbox" 
                    checked={todo.completed}
                    onChange={() => onChange(todo.id) } 
                />
                <strong>
                    {index + 1}
                </strong>
                &nbsp;
                {todo.title}
            </span>
            <button style={style.button}>&times;</button>
        </li>
    );
};

TodoItem.propTypes = {
    todo: propTypes.object.isRequired,
    index: propTypes.number,
    onChange: propTypes.func.isRequired
};

export default TodoItem;