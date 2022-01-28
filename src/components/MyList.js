import React, { useState } from 'react';

import Task from './Task';


const MyList = (props) => {
    console.log('MyListProps:', props);

    return (
        <div>
            {
                props.myList.map(task => {
                    return <Task handleToggleTask={props.handleToggleTask} key={task.id} task={task} />;
                })
            }
            
        </div>
    )
}
export default MyList;