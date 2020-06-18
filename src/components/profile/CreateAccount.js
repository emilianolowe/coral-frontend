import React, { Component } from "react";
import { signup, login } from '../../DAO/PropertiesDAO';

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
            },
            from: this.useQuery().get("from"),
            loggedin: false,
            errorMessage: null

        }
        
        this.handleSignup = this.handleSignup.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.useQuery = this.useQuery.bind(this);
    }
    useQuery() {
        return new URLSearchParams(window.location.search);
    }


    handleSignup(event) {
        console.log("Handle Signup");
        event.preventDefault();
        if (this.state.loginForm.username.value === '' || 
                this.state.loginForm.password.value === '' ||
                !this.state.loginForm.username.valid) {
            this.setState({ errorMessage: "please provide email and password." })
            event.preventDefault();
            return;
        }
        if (this.state.loginForm.password.value !== this.state.loginForm.confirm_password.value) {
            this.setState({ errorMessage: "Passwords must match." })
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

                    this.setState({ loggedin: true })

                } else {
                    this.setState({ errorMessage: "There was a problem creating that user." })
                }
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

        if(this.state.loggedin) {
            return (<div className="modal" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-body">
                        <p>Account created successfully.</p>
                    </div>
                    <div className="modal-footer">
                        <a href={this.state.from} type="button" className="btn btn-secondary" data-dismiss="modal">Continue</a>
                    </div>
                    </div>
                </div>
            </div>)
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
                <form onSubmit={this.handleSignup}>
                    <h2 className="text-center">Create an Account</h2>
                    <p className="hint-text">Sign up with your social media account or email address.</p>
                    <div className="social-btn text-center">
                        <a href="https://www.facebook.com" className="btn btn-facebook btn-lg"><i className="fa fa-facebook"></i> Facebook</a>
                        <a href="https://twitter.com" className="btn btn-twitter btn-lg"><i className="fa fa-twitter"></i> Twitter</a>
                        <a href="https://www.google.com" className="btn btn-instagram btn-lg"><i className="fa fa-google"></i> Google</a>
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
                    {errorMessage}
                    <div className="form-group">
                        <button type="submit" className="btn btn-info btn-lg btn-block signup-btn">Sign Up</button>
                    </div>
                </form>
                <div className="hint-text small">Already have an account? <a href="/login">Login here</a></div>
            </div>
        );
    }
}
export default CreateAccount;