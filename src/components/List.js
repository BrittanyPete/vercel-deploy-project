import React from 'react';

import AddItem from './AddItem';
import MyList from './MyList';

const list = [
    {
        task: 'clean',
        id: 1,
        completed: false
    },
    {
        task: 'cook',
        id: 2,
        completed: false
    }
]

class List extends React.Component {
    constructor() {
        super();
        this.state= {
            list: list
        };
    }

    handleClearCompleted = () => {
        this.setState({
          ...this.state,
          list: this.state.list.filter(task => {
            return !task.completed;
          })
        });
      }

    handleAdd = (task) => {
        const newTask = {
            task:task,
            id: Date.now(),
            completed: false
        };
        this.setState({
            ...this.state,
            list: [...this.state.list, newTask]
        });
    }

    handleToggleTask = (selectedTask) => {
        this.setState({
            ...this.state,
            list: this.state.list.map(task => {
                if(task.id === selectedTask.id) {
                    return({
                        ...task,
                        completed: !task.completed
                    })
                } else {
                    return task;
                }
            })
        })
    }

    render() {

    return (
        <div className='list'>
            
            <AddItem handleAdd={this.handleAdd} />
            <div id='my-list'>
            <h2>My List:</h2>
            <MyList list={this.state.list} handleToggleTask={this.handleToggleTask} />
            <button onClick={this.handleClearCompleted} className='clear-btn'>Clear Finished</button>
            </div>
        </div>
    )
}
}
export default List;