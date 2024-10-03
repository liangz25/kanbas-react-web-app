import ModulesControls from "../Modules/ModulesControls";
import LessonControlButtons from "./LessonControlButtons";

import {BsGripVertical} from "react-icons/bs";
export default function Assignments() {
    return (
        <div id="wd-assignments">
            <ModulesControls /><br /><br /><br /><br />
            <input id="wd-search-assignment"
                placeholder="Search for Assignments" />
            <button id="wd-add-assignment-group">+ Group</button>
            <button id="wd-add-assignment">+ Assignment</button>

            <div className="wd-title p-3 ps-2 bg-secondary">
            <h3 id="wd-assignments-title"><BsGripVertical className="me-2 fs-3"/>
                ASSIGNMENTS 40% of Total <LessonControlButtons /><button>+</button>
            </h3></div>
            <ul id="wd-assignment-list" className="list-group rounded-0">
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                <li className="wd-content-item list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3"/>
                        <a className="wd-assignment-link"
                            href="#/Kanbas/Courses/1234/Assignments/123">
                                <span className="wd-title">
                            A1 - ENV + HTML</span></a><br />
                        Multiple Modules | <strong>Not available until</strong> May 6 at 12:00am | <br />
                        <strong>Due</strong> May 13 at 11:59pm | 100 pts
                        <LessonControlButtons />
                    </li >
                    <p></p>
                    <li >
                        <a className="wd-assignment-link"
                            href="#/Kanbas/Courses/1234/Assignments/123">
                                <BsGripVertical className="me-2 fs-3"/>
                            A2 - CSS + BOOTSTRAP<LessonControlButtons /></a><br />
                        Multiple Modules | <strong>Not available until</strong> May 13 at 12:00am | <br />
                        <strong>Due</strong> May 20 at 11:59pm | 100 pts

                    </li>
                    <p></p>
                    <li>
                        <a className="wd-assignment-link"
                            href="#/Kanbas/Courses/1234/Assignments/123">
                                <BsGripVertical className="me-2 fs-3"/>
                            A3 - JAVASCRIPT + REACT<LessonControlButtons /></a><br />
                        Multiple Modules | <strong>Not available until</strong> May 20 at 12:00am | <br />
                        <strong>Due</strong> May 27 at 11:59pm | 100 pts
                    </li>
                </li>
                <li className="wd-assignment-list-item">
                    {/* Complete On Your Own */}
                </li>
            </ul>
        </div>
    );
}
