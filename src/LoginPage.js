import React, { Component } from 'react';


class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    fullName = React.createRef();
    email = React.createRef();
    password = React.createRef(); 

    goToApp = event => {
        event.preventDefault();
        const user = {
            fullName: this.fullName.current.value, 
            email: this.email.current.value,
            password: this.email.current.value,
        };
        console.log(user);
        this.props.history.push(`/App`);
    };

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