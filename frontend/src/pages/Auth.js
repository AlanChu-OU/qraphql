import React, { Component } from 'react';

import './Auth.css';

class AuthPage extends Component {
    render(){
        return(
            <form className="auth-form ">
                <div className="form-control">
                    <label htmlFor="email">E-Mail</label>
                    <input type="email" id="email"/>
                </div>
                <div className="form-control">
                    <label htmlFor="pwd">Password</label>
                    <input type="password" id="pwd"/>
                </div>
                <div className="form-actions">
                    <button type="button">Switch to Signup</button>
                    <button type="submit">Login</button>    
                </div>
            </form>
        );
    }
}

export default AuthPage;