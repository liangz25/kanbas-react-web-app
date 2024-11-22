import { Navigate, Route, Routes } from "react-router";
import Account from "./Account";
import Dashboard from "./DashBoard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import { useEffect, useState } from "react";
import * as courseClient from "./Courses/client";
import * as userClient from "./Account/client";
// import * as db from "./Database"
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import { useSelector } from "react-redux";
export default function Kanbas() {
    const [courses, setCourses] = useState<any[]>([]);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const [course, setCourse] = useState<any>({
        _id: "0", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
        image: "/images/reactjs.jpg", description: "New Description"
    });
    const addNewCourse =async () => {
        const newCourse = await userClient.createCourse(course);
        // const newCourse = {
        //     ...course,
        //     _id: new Date().getTime().toString()
        // };
        setCourses([...courses, { ...course, ...newCourse }]);
    };
    const deleteCourse = async (courseId: string) => {
        const status = await courseClient.deleteCourse(courseId);
        setCourses(courses.filter((course:any) => course._id !== courseId));
    };
    const updateCourse =async () => {
        await courseClient.updateCourse(course);
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
    };
    
    const fetchCourses = async () => {
        try {
          const courses = await userClient.findMyCourses();
          setCourses(courses);
        } catch (error) {
          console.error(error);
        }
      };
      useEffect(() => {
        fetchCourses();
      }, [currentUser]);
    
    return (
        <Session>
        <div id="wd-kanbas">
            {/* <h1>Kanbas</h1>
            <h1>Liang Zhen</h1>
            <h1>section2</h1>
            <h1>https://github.com/liangz25/kanbas-react-web-app.git</h1> */}
            <KanbasNavigation />
            <div className="wd-main-content-offset p-3">
                <Routes>
                    <Route path="/" element={<Navigate to="Account" />} />
                    <Route path="/Account/*" element={<Account />} />
                    <Route path="/Dashboard" element={
                        <ProtectedRoute><Dashboard courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}/></ProtectedRoute>} />
                    <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses}/></ProtectedRoute>} />
                    <Route path="/Calendar" element={<h1>Calendar</h1>} />
                    <Route path="/Inbox" element={<h1>Inbox</h1>} />
                </Routes>
            </div>
        </div>
        </Session>

    );
}
