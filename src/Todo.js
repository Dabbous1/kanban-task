import React, {Component} from "react";
import Card from "./Card"


class Todo extends Component {
    render() {
        return (
        <div className="column"> 
            <h1 className="Title">To Do</h1>
        </div>
        );
    }
}

export default Todo;


// {Object.keys(this.state.cards).map(key => (
//     <Todo key={key} details={this.state.cards[key]} />
//   ))}