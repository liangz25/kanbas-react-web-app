import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import * as client from "./client";
export default function Signup() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signup = async() => {
    const user = await client.signup(credentials);
    if (!user) return;
    dispatch(setCurrentUser(user));
    navigate("/Kanbas/Account/Profile");
  };
  return (
    <div id="wd-signup-screen" className="container d-flex align-items-center justify-content-center vh-100">
      <div className="card p-4 w-100" style={{ maxWidth: '400px' }}>
      <h3 className="text-center mb-4">Sign up</h3>
      <input defaultValue={credentials.username}
             onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
             className="form-control mb-2" placeholder="username" id="wd-username" />
      <input defaultValue={credentials.password}
             onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
             className="form-control mb-2" placeholder="password" type="password" id="wd-password" />
      <button onClick={signup} id="wd-signin-btn" className="btn btn-primary w-100" > Sign up </button><br />
      <Link to="/Kanbas/Account/Signin" >Sign in</Link>
    </div></div>
    );
}