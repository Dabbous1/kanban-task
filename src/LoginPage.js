import React, { Component } from 'react';


class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    goToApp = event => {
        event.preventDefault();
        console.log(this);
        this.props.history.push(`/App`);
    };

    fullName = React.createRef();
    email = React.createRef();
    password = React.createRef();

    render() {
        return (
        <form onSubmit={this.goToApp}>
        <label>
            Full Name:
            <input type="text" name="name" ref={this.fullName}/>
        </label> <br />
        <label>
            Email:
            <input type="text" email="email" ref={this.email} />
        </label> <br /> 
        <label>
            Password:
            <input type="text" password="password" ref={this.password} />
        </label> <br />
        <input type="submit" value="Submit" />
        </form>
        );
    }
}

export default LoginPage;