import React from 'react';

import Task from './Task';


class MyList extends React.Component {

render() {
    return (
        <div>
            {
                this.props.list.map(task => {
                    return <Task handleToggleTask={this.props.handleToggleTask} key={task.id} task={task} />
                })
            }
        </div>
    )
}
}

export default MyList;