import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './Home.css';


export class Home extends Component {

    render() {
        return (

            <div className="container-login wrap-login">

                <div className="form-container">
                    <h3 className="title">My Account</h3>
                    <form className="form-horizontal">
                        <div className="form-icon">
                            <i className="fa fa-user-circle"></i>
                        </div>

                        <div className="form-group">
                            <span className="input-icon"><i className="fa fa-user"></i></span>
                            <input type="email" className="form-control" placeholder="Username" />
                        </div>

                        <div className="form-group">
                            <span className="input-icon"><i className="fa fa-lock"></i></span>
                            <input type="password" className="form-control" placeholder="Password" />
                            <span className="forgot"><a href="">Forgot Password?</a></span>
                        </div>
                        <button className="btn signin">Login</button>

                    </form>
                </div>
            </div>
        )
    }
}