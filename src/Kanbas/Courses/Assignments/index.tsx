import ModulesControls from "../Modules/ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import { useParams } from "react-router";
import React, { useState } from "react";
import * as db from "../../Database";
import { BsGripVertical } from "react-icons/bs";
import AssignmentEditor from "./AssignmentEditor";
import AssignmentControls from "./AssignmentControls";
import { addAssignment, editAssignment, updateAssignment, deleteAssignment }
  from "./reducer";
import { useSelector, useDispatch } from "react-redux";
export default function Assignments() {
    const { cid } = useParams();
    const [assignment, setAssignment] = useState<any[]>(db.assignments);
    const [assignmentName, setAssignmentName] = useState("");
    const assignments  = useSelector((state: any) => state.assignmentReducer.assignments);
  const dispatch = useDispatch();
    const addAssignmentHandler = () => {
        const obj = {
            _id: new Date().getTime().toString(),
            title: assignmentName, course: cid, lessons: []
        };
        dispatch(addAssignment(obj));
        setAssignmentName("");
    };
    const removeAssignment = (assignmentId: string) => {
        // const obj ={
        // assignment.filter((m) => m._id !== assignmentId)};
        dispatch(deleteAssignment(assignmentId));
        setAssignmentName("")
    };
    const edit2Assignment = (assignmentId: string) => {
        dispatch(editAssignment(assignmentId))
        // setAssignment(assignment.map((m) => (m._id === assignmentId ? { ...m, editing: true } : m)));
    };
    const saveAssignment = (assignment: any) => {
        dispatch(updateAssignment(assignment))
        // setAssignment(assignment.map((m: { _id: any; }) => (m._id === assignment._id? assignment : m)));
    };



    return (
        <div id="wd-assignments">
            <AssignmentControls setAssignment={setAssignmentName} assignmentName={assignmentName} addAssignment={addAssignmentHandler} />

           

            <input id="wd-search-assignment"
                placeholder="Search for Assignments" />
            <button id="wd-add-assignment-group">+ Group</button>
            <button id="wd-add-assignment">+ Assignment</button>
            <div className="wd-title p-3 ps-2 bg-secondary">
                <h3 id="wd-assignments-title"><BsGripVertical className="me-2 fs-3" />
                    ASSIGNMENTS 40% of Total
                </h3></div>
            <ul id="wd-assignment-list" className="list-group rounded-0">
                {assignments && assignments.length > 0 ? (
                    assignments.map((assignment: any) => (<li key={assignment._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                        <div className="wd-content-item list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            <a className="wd-assignment-link" href={`#/Kanbas/Courses/${cid}/Assignments/${assignment}`}>
                                <span className="wd-title">
                                    {!assignment.edit &&assignment.title}
                                    { assignment.edit && (
        <input className="form-control w-50 d-inline-block"
               onChange={(e) => setAssignment({ ...assignment, name: e.target.value })}
               onKeyDown={(e) => {
                 if (e.key === "Enter") {
                   saveAssignment({ ...assignment, editing: false });
                 }
               }}
               defaultValue={addAssignment.name}/>
      )}
                                    </span>
                            </a>
                            <LessonControlButtons assignmentId={assignment._id} deleteAssignment={removeAssignment} editAssignment={edit2Assignment} /><button>+</button>

                        </div>
                    </li>
                    ))
                ) : (
                    <p>No assignments available for this course.</p>
                )}
            </ul>
        </div>
        // {/* <ul id="wd-assignment-list" className="list-group rounded-0">
        //     <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
        //     <li className="wd-content-item list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3"/>
        //             <a className="wd-assignment-link"
        //                 href="#/Kanbas/Courses/1234/Assignments/123">
        //                     <span className="wd-title">
        //                 A1 - ENV + HTML</span></a><br />
        //             Multiple Modules | <strong>Not available until</strong> May 6 at 12:00am | <br />
        //             <strong>Due</strong> May 13 at 11:59pm | 100 pts
        //             <LessonControlButtons />
        //         </li >
        //         <p></p>
        //         <li >
        //             <a className="wd-assignment-link"
        //                 href="#/Kanbas/Courses/1234/Assignments/123">
        //                     <BsGripVertical className="me-2 fs-3"/>
        //                 A2 - CSS + BOOTSTRAP<LessonControlButtons /></a><br />
        //             Multiple Modules | <strong>Not available until</strong> May 13 at 12:00am | <br />
        //             <strong>Due</strong> May 20 at 11:59pm | 100 pts

        //         </li>
        //         <p></p>
        //         <li>
        //             <a className="wd-assignment-link"
        //                 href="#/Kanbas/Courses/1234/Assignments/123">
        //                     <BsGripVertical className="me-2 fs-3"/>
        //                 A3 - JAVASCRIPT + REACT<LessonControlButtons /></a><br />
        //             Multiple Modules | <strong>Not available until</strong> May 20 at 12:00am | <br />
        //             <strong>Due</strong> May 27 at 11:59pm | 100 pts
        //         </li>
        //     </li>
        //     <li className="wd-assignment-list-item">

        //     </li>
        // </ul> */}
        // </div>
    );
}
