import React, { Component } from "react";

class Login extends Component {
    render() {
        return (
            <div className="sign-form">
                <form action="/examples/actions/confirmation.php" method="post">
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
                            <input type="text" className="form-control" name="username" placeholder="Username" required="required" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon"></span>
                            <input type="password" className="form-control" name="password" placeholder="Password" required="required" />
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