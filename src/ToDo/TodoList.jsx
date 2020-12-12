import React from 'react';
import TodoItem from './TodoItem';

const style =  {
    ul: {
        listStyle: 'none',
        margin: '0',
        padding: '0'
    }
};

const ToDo = (props) => {
    return (<div>
        <ul style={style.ul}>
            { props.todos.map((element, index) => {
                return <TodoItem 
                            index={index} 
                            key={element.id} 
                            todo={element} 
                        />
            }) }
        </ul>
    </div>);
};

export default ToDo;