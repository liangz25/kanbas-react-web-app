import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
            <div className="row row-cols-1 row-cols-md-5 g-4">
                <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                    <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="/images/reactjs.jpg" width="100%" height={160} />
                        <div className="card-body">
                            <h5 className="wd-dashboard-course-title card-title">
                                CS1234 React JS
                            </h5>
                            <p className="wd-dashboard-course-title card-text">
                                Full Stack software developer
                            </p>
                            <button className="btn btn-primary"> Go </button>
                        </div>
                    </Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="/images/reactjs.jpg" alt="course2" width={200} />
                        <div>
                            <h5>
                                CS1234 React JS
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course ">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="/images/reactjs.jpg" alt="course3" width={200} />
                        <div>
                            <h5>
                                CS1234 React JS
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course col" style={{ width: "300px" }}> ... </div>
                <div className="wd-dashboard-course col" style={{ width: "300px" }}> ... </div>
                
            </div>
        </div>
    );
}
