import React, { useState } from 'react';

import AddItem from './AddItem';
import MyList from './MyList';

const list = [
    {
        task: 'clean',
        id: 1,
        completed: false
    }
]

const List = () => {
    const [myList, setMyList] = useState(list);

    const handleAdd = (task) => {
        const newTask = {
            item:task,
            id: Date.now(),
            completed: false
        };
        setMyList({
            ...myList,
            myList: [...this.state.myList, newTask]
        });
    }

    const handleToggleTask = (selectedTask) => {
        setMyList({
            ...myList,
            myList: this.state.myList.map(task => {
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

    return (
        <div>
            <h2>My List:</h2>
            <AddItem handleAdd={handleAdd} />
            <MyList myList={myList} handleToggleTask={handleToggleTask} />
        </div>
    )
}
export default List;