import React from 'react';

class AddItem extends React.Component {
    constructor() {
        super();
        this.state = {
            task: ''
        }
    }
    

    handleChange = (e) => {
        this.setState({
            ...this.state,
            task: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleAdd(this.state.task)
    }
    
    render() {
        return (
            <div className='add'>
                <form onSubmit={this.handleSubmit}>
                    <label>New Task:</label>
                    <input 
                    onChange={this.handleChange}
                    name='task'
                    type='text'
                    placeholder='Enter New Task'
                    />
                    <button>Add Task</button>
                </form>
            </div>
        )
    }
}

export default AddItem;