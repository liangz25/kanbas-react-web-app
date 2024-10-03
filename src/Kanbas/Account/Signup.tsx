import React from "react";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div id="wd-signup-screen" className="container d-flex align-items-center justify-content-center vh-100">
      <div className="card p-4 w-100" style={{ maxWidth: '400px' }}>
      <h3 className="text-center mb-4">Sign up</h3>
      <input placeholder="username" className="form-control mb-3"/><br/>
      <input placeholder="password" type="password" className="form-control mb-3"/><br/>
      <input placeholder="verify password" type="password" className="form-control mb-3"/><br/>
      <Link to="/Kanbas/Account/Profile" > Sign up </Link><br />
      <Link to="/Kanbas/Account/Signin" >Sign in</Link>
    </div></div>
    );
}