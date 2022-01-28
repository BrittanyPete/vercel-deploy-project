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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Task</label>
                    <input 
                    onChange={this.handleChange}
                    name='task'
                    type='text'
                    />
                    <button>Add</button>
                </form>
            </div>
        )
    }
}

export default AddItem;