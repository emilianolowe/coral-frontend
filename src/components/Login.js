import React, { Component } from "react";
import { login } from './PropertiesDAO';
import {Redirect} from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            facebook: {},
            loginForm: {
                username: {
                    value: '',
                    valid: true,
                    touched: false
                },
                password: {
                    value: '',
                    valid: true,
                    touched: false
                }
            },
            from: this.useQuery().get("from"),
            loggedin: false,
            errorMessage: null
        }

        this.handleLogin = this.handleLogin.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.useQuery = this.useQuery.bind(this);

    }

    useQuery() {
        return new URLSearchParams(window.location.search);
    }

    handleLogin(event) {
        console.log("Handle Login");
        if (this.state.loginForm.username.value === '' ||
            this.state.loginForm.password.value === '' ||
            !this.state.loginForm.username.valid) {
            this.setState({ errorMessage: "please provide email and password." })
            event.preventDefault();
            return;
        }

        login(this.state.loginForm.username.value,
            this.state.loginForm.password.value,
            status => {
                if (status) {
                    this.setState({ loggedin: true })
                } else {
                    this.setState({ errorMessage: "Wrong user or password. Please try again." })
                }
            });

        event.preventDefault();
    }

    handleBlur(event) {
        const fieldName = event.target.name;

        this.setState({
            loginForm: {
                ...this.state.loginForm,
                [fieldName]: {
                    ...this.state.loginForm[fieldName],
                    touched: true
                }
            }
        });
    }

    handleInputChange = (formName) => (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;

        this.setState({
            [formName]: {
                ...this.state[formName],
                [fieldName]: {
                    ...this.state[formName][fieldName],
                    touched: true,
                    value: fieldValue,
                    valid: this.validateField(fieldName, fieldValue)
                }
            }
        });
    }

    validateField(fieldName, fieldValue) {
        if (fieldName === "password") {
            // returns true if !== "" (valid situation) 
            return fieldValue !== "";
        }
        if (fieldName === "username") {
            return fieldValue !== "" && /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(fieldValue);
        }

        return true;
    }


    render() {

        if(this.state.loggedin) {
            return (<Redirect to={this.state.from} /> )
        }

        let errorMessage = "";
        if (this.state.errorMessage) {
            errorMessage = (
                <div className="alert alert-danger fade show" role="alert">
                    {this.state.errorMessage}
                </div>
            )
        }

        return (
            <div className="sign-form">
                <form onSubmit={this.handleLogin}>
                    <h2 className="text-center">Sign in</h2>
                    <div className="social-btn text-center">
                        <a href="#" className="btn btn-facebook btn-lg"><i className="fa fa-facebook"></i>Facebook</a>
                        <a href="#" className="btn btn-twitter btn-lg"><i className="fa fa-twitter"></i>Twitter</a>
                        <a href="#" className="btn btn-instagram btn-lg"><i className="fa fa-google"></i>Google</a>
                    </div>
                    <div className="or-seperator"><b>or</b></div>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon"></span>
                            <input type="text" className="form-control"
                                name="username" placeholder="E-mail" required="required"
                                onChange={this.handleInputChange('loginForm')}
                                onBlur={this.handleBlur} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon"></span>
                            <input type="password" className="form-control"
                                name="password" placeholder="Password" required="required"
                                onChange={this.handleInputChange('loginForm')}
                                onBlur={this.handleBlur} />
                        </div>
                    </div>
                    {errorMessage}
                    <div className="form-group">
                        <button type="submit" className="btn btn-info btn-lg btn-block signup-btn">Sign in</button>
                    </div>
                    <div className="clearfix">
                        <div className="hint-text pull-left checkbox-inline"><input type="checkbox" /> Remember me</div>
                        <div className="hint-text pull-right">
                            <a href="/forgotpassword">Forgot Password?</a>
                        </div>
                    </div>
                </form>
                <div className="hint-text">Don't have an account? <a href={"/createaccount" + (this.state.from ? "?from=" + this.state.from : "")} className="text-success">Register Now!</a></div>
            </div>
        );
    }
}
export default Login;