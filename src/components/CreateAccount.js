import React, { Component } from "react";
import Cookies from 'universal-cookie';

class CreateAccount extends Component {

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
                },
                confirm_password: {
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
        if (this.state.loginForm.password.value !== this.state.loginForm.confirm_password.value) {
            alert("Passwords must match");
            event.preventDefault();
            return;
        }

        // CALL POST
        this.login(this.state.loginForm.username.value, this.state.loginForm.password.value);
        event.preventDefault();
    }

    login(username, password) {
        console.log("will fetch");
        fetch('http://localhost:3000/v1/users/signup', {
            headers: {
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                    username: username, 
                    password: password})
        })
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            if (data.err) {
                throw new Error(data.err.message)
            }
            if (data.success) {
                // Login
                fetch('http://localhost:3000/v1/users/login', {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify({
                        username: username, 
                        password: password})
                })
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        const cookies = new Cookies();
                        cookies.set('coraltoken', data.token, { path: '/' });
                        alert("User registered successfully")
                    }
                })
                .catch(err => console.log("Error loggin in: ", err.message))

            }
        })
        .catch((err) => {
            console.log("error fetching: ", err.message)
            alert(err.message);
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
                    <h2 className="text-center">Create an Account</h2>
                    <p className="hint-text">Sign up with your social media account or email address.</p>
                    <div className="social-btn text-center">
                        <a href="#" className="btn btn-primary btn-lg"><i className="fa fa-facebook"></i> Facebook</a>
                        <a href="#" className="btn btn-info btn-lg"><i className="fa fa-twitter"></i> Twitter</a>
                        <a href="#" className="btn btn-danger btn-lg"><i className="fa fa-google"></i> Google</a>
                    </div>
                    <div className="or-seperator"><b>or</b></div>
                    <div className="form-group">
                        <input type="text" className="form-control input-lg" name="username" 
                            placeholder="E-mail" required="required" 
                            onChange={this.handleInputChange('loginForm')}
                            onBlur={this.handleBlur}/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control input-lg" name="password" 
                            placeholder="Password" required="required"
                            onChange={this.handleInputChange('loginForm')}
                            onBlur={this.handleBlur}/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control input-lg" name="confirm_password" 
                            placeholder="Confirm Password" required="required"
                            onChange={this.handleInputChange('loginForm')}
                            onBlur={this.handleBlur}/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-success btn-lg btn-block signup-btn">Sign Up</button>
                    </div>
                </form>
                <div className="hint-text small">Already have an account? <a href="/login">Login here</a></div>
            </div>
        );
    }
}
export default CreateAccount;