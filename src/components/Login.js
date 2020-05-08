import React, { Component } from "react";

class Login extends Component {
    render() {
        return (
            <div className="login-form">
                <form action="/examples/actions/confirmation.php" method="post">
                    <h2 className="text-center">Sign in</h2>
                    <div className="text-center social-btn">
                        <a href="#" className="btn btn-primary btn-block"><i className="fa fa-facebook"></i> Sign in with <b>Facebook</b></a>
                        <a href="#" className="btn btn-info btn-block"><i className="fa fa-twitter"></i> Sign in with <b>Twitter</b></a>
                        <a href="#" className="btn btn-danger btn-block"><i className="fa fa-google"></i> Sign in with <b>Google</b></a>
                    </div>
                    <div className="or-seperator"><i>or</i></div>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-user"></i></span>
                            <input type="text" className="form-control" name="username" placeholder="Username" required="required" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                            <input type="password" className="form-control" name="password" placeholder="Password" required="required" />
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-success btn-block login-btn">Sign in</button>
                    </div>
                    <div className="clearfix">
                        <label className="pull-left checkbox-inline"><input type="checkbox" /> Remember me</label>
                        <a href="#" className="pull-right text-success">Forgot Password?</a>
                    </div>
                </form>
                <div className="hint-text small">Don't have an account? <a href="#" className="text-success">Register Now!</a></div>
            </div>
        );
    }
}
export default Login;