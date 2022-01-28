import React, { useState } from 'react';

const AddItem = () => {

    const [task, setTask] = useState({
        task: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Task</label>
                <input 
                name='task'
                type='text'
                />
                <button>Add</button>
            </form>
        </div>
    )
}

export default AddItem;