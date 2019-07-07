import React, {Component} from "react";

class Card extends Component {
    render() {
        return (
        <div className="card">
            <span className="title">{this.props.taskname}</span>
        </div>  
        );
    }
}

export default Card;