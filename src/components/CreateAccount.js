import React, { Component } from "react";
import { signup, login } from './PropertiesDAO';

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
        
        this.handleSignup = this.handleSignup.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleSignup(event) {
        console.log("Handle Signup");
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
        signup(this.state.loginForm.username.value, 
            this.state.loginForm.password.value,
            status => {
                if (status) {
                    login(this.state.loginForm.username.value,
                        this.state.loginForm.password.value,
                        success => {console.log("successfully logged in")})
                    alert("User created successfully")
                } else {
                    alert("There was a problem creating that user")
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
                <form onSubmit={this.handleSignup}>
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