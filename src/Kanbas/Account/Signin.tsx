import { Link } from "react-router-dom";
export default function Signin() {
  return (
    <div id="wd-signin-screen"className="container d-flex align-items-center justify-content-center vh-100">
         <div className="card p-4 w-100" style={{ maxWidth: '400px' }}>
      <h3 className="text-center mb-4">Sign in</h3>
      <input id="wd-username" placeholder="username" className="form-control mb-3" /> 
      <input id="wd-password" placeholder="password" type="password" className="form-control mb-3"/> 
      <Link  id="wd-signin-btn"
             to="/Kanbas/Dashboard" className="btn btn-primary w-100"> Sign in </Link> 
      <Link  id="wd-signup-link" to="/Kanbas/Account/Signup">Sign up</Link>
    </div></div>
);}
