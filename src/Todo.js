import React, {Component} from "react";
import Card from "./Card"


class Todo extends Component {
    render() {
        return (
        <div className="column"> 
            <h1 className="Title">To Do</h1>
             <Card /> 
        </div>
        );
    }
}

export default Todo;
