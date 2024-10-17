import { AiOutlineDashboard } from "react-icons/ai";
import { FaInbox } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { Link ,useLocation,useParams} from "react-router-dom";

export default function CoursesNavigation() {
  const { pathname } = useLocation();
  const { courseId } = useParams();
  const links = [
    { label: "Home", path: "/Kanbas/Courses/${courseId}/Home" },
    { label: "Modules", path: "/Kanbas/Courses/${courseId}/Modules" },
    { label: "Piazza", path: "/Kanbas/Courses/${courseId}/Piazza" },
    { label: "Zoom", path: "/Kanbas/Courses/${courseId}/Zoom" },
    { label: "Assignments", path: "/Kanbas/Courses/${courseId}/Assignments" },
    { label: "Quizzes", path: "/Kanbas/Courses/${courseId}/Quizzes" },
    { label: "Grades", path: "/Kanbas/Courses/${courseId}/Grades"},
    { label: "People", path: "/Kanbas/Courses/${courseId}/People" },
];
  return (
    
    <div id="wd-courses-navigation" className="">
     
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`list-group-item text-center border-0 ${pathname === link.path ? "text-black bg-white" : "text-danger"}`}
        >
          <br />
          {link.label}
        </Link>
      ))}
    </div>

// {/* <Link to="/Kanbas/Courses/Home" className={`list-group-item text-center border-0 bg-black
//             ${pathname.includes("Home") ? "bg-white text-danger" : "bg-black text-white"}`}>
//         <FaRegCircleUser className={`fs-1 ${pathname.includes("Home") ? "text-danger" : "text-white"}`} />
//         <br />
//         Home
//       </Link> */}
//       {links.map((link) => (
//         <Link key={link.path} to={link.path} className={`list-group-item bg-black text-center border-0
//               ${pathname.includes(link.label) ? "text-danger bg-white" : "text-white bg-black"}`}>
//           {link.icon({ className: "fs-1 text-danger"})}
//           <br />
//           {link.label}
//         </Link>
//   ))}
    
    // {/* // <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
    // //   <Link id="wd-course-home-link"    to="/Kanbas/Courses/1234/Home" className="list-group-item active border border-0">Home</Link>
    // //   <Link id="wd-course-modules-link" to="/Kanbas/Courses/1234/Modules" className="list-group-item text-danger border border-0">Modules
    // //     </Link>
    // //   <Link id="wd-course-piazza-link"  to="/Kanbas/Courses/1234/Piazza" className="list-group-item text-danger border border-0">Piazza</Link>
    // //   <Link id="wd-course-zoom-link"    to="/Kanbas/Courses/1234/Zoom" className="list-group-item text-danger border border-0">Zoom</Link>
    // //   <Link id="wd-course-quizzes-link" to="/Kanbas/Courses/1234/Assignments" className="list-group-item text-danger border border-0">
    // //       Assignments</Link>
    // //   <Link id="wd-course-assignments-link" to="/Kanbas/Courses/1234/Quizzes" className="list-group-item text-danger border border-0">Quizzes
    // //     </Link>
    // //   <Link id="wd-course-grades-link"  to="/Kanbas/Courses/1234/Grades" className="list-group-item text-danger border border-0">Grades</Link>
    // //   <Link id="wd-course-people-link"  to="/Kanbas/Courses/1234/People" className="list-group-item text-danger border border-0">People</Link>
    // // </div> */}
);}
