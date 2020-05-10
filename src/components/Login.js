import React, { Component } from "react";
import Cookies from 'universal-cookie';

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
            }
        }
        
        this.handleLogin = this.handleLogin.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleLogin(event) {
        console.log("Handle Login");
        if (this.state.loginForm.username.value === '' || 
                this.state.loginForm.password.value === '' ||
                !this.state.loginForm.username.valid) {
            alert("please provide email and password");
            event.preventDefault();
            return;
        }

        // CALL POST
        this.login(this.state.loginForm.username.value, this.state.loginForm.password.value);
        event.preventDefault();
    }

    login(username, password) {
        console.log("will fetch");
        fetch('http://localhost:3000/v1/users/login', {
            headers: {
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(
                {
                    username: username, 
                    password: password
                })
        })
        .then(res => res.json())
        .then((data) => {
            if (data.success) {
                const cookies = new Cookies();
                cookies.set('coraltoken', data.token, { path: '/' });
            }
        })
        .catch((err) => {
            console.log("error fetching: ", err.message)
            alert("Invalid email or password. Please try again.");
        });
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

    validateField (fieldName, fieldValue) {
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
        return (
            <div className="sign-form">
                <form onSubmit={this.handleLogin}>
                    <h2 className="text-center">Sign in</h2>
                    <div className="social-btn text-center">
                        <a href="#" className="btn btn-primary btn-lg"><i className="fa fa-facebook"></i> Facebook</a>
                        <a href="#" className="btn btn-info btn-lg"><i className="fa fa-twitter"></i> Twitter</a>
                        <a href="#" className="btn btn-danger btn-lg"><i className="fa fa-google"></i> Google</a>
                    </div>
                    <div className="or-seperator"><b>or</b></div>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon"></span>
                            <input type="text" className="form-control" 
                                name="username" placeholder="E-mail" required="required" 
                                onChange={this.handleInputChange('loginForm')}
                                onBlur={this.handleBlur}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon"></span>
                            <input type="password" className="form-control" 
                                name="password" placeholder="Password" required="required"
                                onChange={this.handleInputChange('loginForm')}
                                onBlur={this.handleBlur}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-success btn-block login-btn">Sign in</button>
                    </div>
                    <div className="clearfix">
                        <label className="pull-left checkbox-inline"><input type="checkbox" /> Remember me</label>
                        <a href="/forgotpassword" className="pull-right text-success">Forgot Password?</a>
                    </div>
                </form>
                <div className="hint-text small">Don't have an account? <a href="/createaccount" className="text-success">Register Now!</a></div>
            </div>
        );
    }
}
export default Login;