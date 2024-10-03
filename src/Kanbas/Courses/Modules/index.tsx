import LessonControlButtons from "./LessonControlButtons";
import ModulesControls from "./ModulesControls";
import {BsGripVertical} from "react-icons/bs";

export default function Modules() {
    return (
        <div>
            <ModulesControls /><br /><br /><br /><br />

            {/* Implement Collapse All button, View Progress button, etc. */}
            <ul id="wd-modules" className="list-group rounded-0">
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3"/>Week 1<LessonControlButtons /></div>
                    <ul className="wd-lessons list-group rounded-0">
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <span className="wd-title">LEARNING OBJECTIVES<LessonControlButtons /></span>
                            <ul className="wd-content">
                                <li className="wd-content-item list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3"/>Introduction to the course<LessonControlButtons /></li>
                                <li className="wd-content-item list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3"/>Learn what is Web Development<LessonControlButtons /></li>
                                <li className="wd-lesson list-group-item p-3 ps-1"> <BsGripVertical className="me-2 fs-3"/>LESSON 1<LessonControlButtons /> </li>
                                <li className="wd-lesson list-group-item p-3 ps-1"> <BsGripVertical className="me-2 fs-3"/>LESSON 2 <LessonControlButtons /></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                    <BsGripVertical className="me-2 fs-3"/>Week 2<LessonControlButtons /></div>
                    <ul className="wd-lessons list-group rounded-0">
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <span className="wd-title">LEARNING OBJECTIVES<LessonControlButtons /></span>
                            <li className="wd-lesson list-group-item p-3 ps-1"> <BsGripVertical className="me-2 fs-3"/>LESSON 1 <LessonControlButtons /></li>
                            <li className="wd-lesson list-group-item p-3 ps-1"> <BsGripVertical className="me-2 fs-3"/>LESSON 2 <LessonControlButtons /></li>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}
