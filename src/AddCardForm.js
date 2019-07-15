import React, { Component } from 'react';


class AddCardForm extends Component {

    taskName = React.createRef();
    taskDescription = React.createRef();
    taskPeriod = React.createRef();
    taskStatus = React.createRef(); 

    addCardtoApp = event => {
        event.preventDefault();
        const card = {
            taskName: this.taskName.current.value, 
            taskDescription: this.taskDescription.current.value,
            taskPeriod: this.taskPeriod.current.value,
            taskStatus: this.taskStatus.current.value,
            
        };
        this.props.addCard(card);
        event.currentTarget.reset();
    };

    render() {
        return (
        <form onSubmit={this.addCardtoApp}>
        <label>
            Task Name:
            <input type="text" name="taskName" ref={this.taskName}/>
        </label> <br />
        <label>
            Description:
            <input type="text" name="taskDescription" ref={this.taskDescription} />
        </label> <br /> 
        <label>
            Period:
            <input type="text" name="taskPeriod" ref={this.taskPeriod} />
        </label> <br />
        <label>
            Task Status:
            <select type="text" name="taskStatus" ref={this.taskStatus}>
                <option value="Todo">Todo</option>
                <option value="Onprogress">Onprogress</option>
                <option value="Done">Done</option>
            </select>
        </label> <br />
        <input type="submit" value="Submit" />
        </form>
        );
    }
}

export default AddCardForm;