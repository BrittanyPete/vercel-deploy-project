import React from 'react';

class Task extends React.Component {
    render() {
        const handleClick = () => {
            this.props.handleToggleTask(this.props.task);
        }
    
        return (
            <div onClick={handleClick} id='task-item' className={`task${this.props.task.completed ? ' completed' : ''}`}>
                <ul>
                    <li>{this.props.task.task}</li>
                </ul>
            </div>
        )
    }

}

export default Task;