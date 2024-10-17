import { FaUserCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import * as db from "../../Database";
export default function PeopleTable() {
    const { cid } = useParams();
    const { users, enrollments } = db;
    return (
        <div id="wd-people-table">
            <table className="table table-striped">
                <thead>
                    <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
                </thead>
                <tbody>
                {users
    // .filter((usr) =>
    //   enrollments.some((enrollment) => enrollment.user === usr._id && enrollment.course === cid)
    // )
    .map((user: any) => (
                    <tr key={user._id}><td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">{user.firstName}</span>{" "}
                        <span className="wd-last-name">{user.lastName}</span></td>
                        <td className="wd-login-id">{user.loginId}</td>
                        <td className="wd-section">{user.section}</td>
                        <td className="wd-role">{user.role}</td>
                        <td className="wd-last-activity">{user.lastActivity}</td>
                        <td className="wd-total-activity">{user.totalActivity}</td> </tr>))}
                    
                     <td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                         <span className="wd-first-name">Liang</span>{" "}
                         <span className="wd-last-name">Zhen</span></td>
                       <td className="wd-login-id">00123456199S</td>
                        <td className="wd-section">S101</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2020-10-01</td>
                        <td className="wd-total-activity">10:21:32</td> 
                     <tr><td className="wd-full-name text-nowrap">
                         <FaUserCircle className="me-2 fs-1 text-secondary" />
                         <span className="wd-first-name">Angela</span>{" "}
                         <span className="wd-last-name">Zheng</span></td>
                         <td className="wd-login-id">00123456177S</td>
                         <td className="wd-section">S101</td>
                         <td className="wd-role">STUDENT</td>
                         <td className="wd-last-activity">2020-10-01</td>
                         <td className="wd-total-activity">10:21:32</td> </tr>
                     <tr><td className="wd-full-name text-nowrap">
                         <FaUserCircle className="me-2 fs-1 text-secondary" />
                         <span className="wd-first-name">Li</span>{" "}
                         <span className="wd-last-name">Xue</span></td>
                         <td className="wd-login-id">00123456331S</td>
                         <td className="wd-section">S101</td>
                         <td className="wd-role">STUDENT</td>
                         <td className="wd-last-activity">2020-10-01</td>
                         <td className="wd-total-activity">10:21:32</td> </tr>
                </tbody>
                
            </table>
        </div>);
}