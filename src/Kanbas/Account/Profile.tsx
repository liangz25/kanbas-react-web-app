import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen" className="container d-flex align-items-center justify-content-center vh-100">
        <div className="card p-4 w-100" style={{ maxWidth: '400px' }}>
      <h3 className="text-center mb-4">Profile</h3>
      <input id="wd-username" value="alice" placeholder="username" className="form-control mb-3"/><br/>
      <input id="wd-password" value="123" placeholder="password"className="form-control mb-3"
             type="password" /><br/>
      <input id="wd-firstname" value="Alice" placeholder="First Name" className="form-control mb-3"/><br/>
      <input id="wd-lastname" value="Wonderland" placeholder="Last Name" className="form-control mb-3"/><br/>
      <input id="wd-dob" value="2000-01-01" type="date"className="form-control mb-3" /><br/>
      <input id="wd-email" value="alice@wonderland" type="email" className="form-control mb-3"/><br/>
      <select id="wd-role" className="form-control mb-3">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select><br/>
      <Link to="/Kanbas/Account/Signin" >Sign out</Link>
    </div></div>
);}
