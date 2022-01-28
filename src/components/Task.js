import React from 'react';

const Task = (props) => {
    console.log('props', props);

    const handleClick = () => {
        props.handleToggleTask(this.props.task);
    }

    return (
        <div onClick={handleClick} className={`item${props.task.completed ? ' completed' : ''}`}>
            <p>{props.task.task}</p>
        </div>
    )
}

export default Task;