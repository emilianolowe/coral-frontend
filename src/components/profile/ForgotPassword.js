import React, { Component } from "react";

class ForgotPassword extends Component {
    render() {
        return (
            <div className="sign-form">
                <form action="/examples/actions/confirmation.php" method="post">
                    <h2 className="text-center">Forgot your password?</h2>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon"></span>
                            <input type="text" className="form-control" name="username" placeholder="Type your e-mail" required="required" />
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-success btn-block login-btn">Click to change password</button>
                    </div>
                </form>
                <div className="hint-text small">Don't have an account? <a href="/createaccount" className="text-success">Register Now!</a></div>
            </div>
        );
    }
}
export default ForgotPassword;