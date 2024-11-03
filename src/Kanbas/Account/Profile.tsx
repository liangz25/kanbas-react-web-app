import { Link,useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const fetchProfile = () => {
    if (!currentUser) return navigate("/Kanbas/Account/Signin");
    setProfile(currentUser);
  };
  const signout = () => {
    dispatch(setCurrentUser(null));
    navigate("/Kanbas/Account/Signin");
  };
  useEffect(() => { fetchProfile(); }, []);
  return (
    <div className="wd-profile-screen">
      <h3>Profile</h3>
      {profile && (
        <div>
          <input defaultValue={profile.username} id="wd-username" className="form-control mb-2"
                 onChange={(e) => setProfile({ ...profile, username:  e.target.value })}/>
          <input defaultValue={profile.password} id="wd-password" className="form-control mb-2"
                 onChange={(e) => setProfile({ ...profile, password:  e.target.value })}/>
          <input defaultValue={profile.firstName} id="wd-firstname" className="form-control mb-2"
                 onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}/>
          <input defaultValue={profile.lastName} id="wd-lastname" className="form-control mb-2"
                 onChange={(e) => setProfile({ ...profile, lastName:  e.target.value })}/>
          <input defaultValue={profile.dob} id="wd-dob" className="form-control mb-2"
                 onChange={(e) => setProfile({ ...profile, dob: e.target.value })} type="date"/>
          <input defaultValue={profile.email} id="wd-email" className="form-control mb-2"
                 onChange={ (e) => setProfile({ ...profile, email: e.target.value })}/>
                 <select onChange={(e) => setProfile({ ...profile, role:  e.target.value })}
                 className="form-control mb-2" id="wd-role">
            <option value="USER">User</option>            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>      <option value="STUDENT">Student</option>
          </select>
          <button onClick={signout} className="btn btn-danger w-100 mb-2" id="wd-signout-btn">
            Sign out
          </button>
        </div>
      )}
</div>);}


//   return (
//     <div id="wd-profile-screen" className="container d-flex align-items-center justify-content-center vh-100">
//         <div className="card p-4 w-100" style={{ maxWidth: '400px' }}>
//       <h3 className="text-center mb-4">Profile</h3>
//       <input id="wd-username" value="alice" placeholder="username" className="form-control mb-3"/><br/>
//       <input id="wd-password" value="123" placeholder="password"className="form-control mb-3"
//              type="password" /><br/>
//       <input id="wd-firstname" value="Alice" placeholder="First Name" className="form-control mb-3"/><br/>
//       <input id="wd-lastname" value="Wonderland" placeholder="Last Name" className="form-control mb-3"/><br/>
//       <input id="wd-dob" value="2000-01-01" type="date"className="form-control mb-3" /><br/>
//       <input id="wd-email" value="alice@wonderland" type="email" className="form-control mb-3"/><br/>
//       <select id="wd-role" className="form-control mb-3">
//         <option value="USER">User</option>
//         <option value="ADMIN">Admin</option>
//         <option value="FACULTY">Faculty</option>
//         <option value="STUDENT">Student</option>
//       </select><br/>
//       <Link to="/Kanbas/Account/Signin" >Sign out</Link>
//     </div></div>
// );}
