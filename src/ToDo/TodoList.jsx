import React from 'react';
import TodoItem from './TodoItem';
import propTypes from 'prop-types';

const style =  {
    ul: {
        listStyle: 'none',
        margin: '0',
        padding: '0'
    }
};

const ToDo = ({ todos, onToggle }) => {
    return (<div>
        <ul style={style.ul}>
            { todos.map((element, index) => {
                return <TodoItem 
                            index={index} 
                            key={element.id} 
                            todo={element} 
                            onChange={onToggle}
                        />
            }) }
        </ul>
    </div>);
};

ToDo.propTypes = {
    todos: propTypes.arrayOf(propTypes.object).isRequired,
    onToggle: propTypes.func.isRequired
};

export default ToDo;