import React, { Component } from 'react';


class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
        <form>
        <label>
            Full Name:
            <input type="text" name="name" />
        </label>
        <label>
            Email:
            <input type="text" email="email" />
        </label>
        <label>
            Password:
            <input type="text" password="password" />
        </label>
        <input type="submit" value="Submit" />
        </form>
        );
    }
}

export default LoginPage;