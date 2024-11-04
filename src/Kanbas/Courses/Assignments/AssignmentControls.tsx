import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";

import NoSymbol from "./NoSymbol";
import AssignmentEditor from "./AssignmentEditor";
export default function AssignmentControls(
    { assignmentName, setAssignment, addAssignment }:
    { assignmentName: string; setAssignment: (title: string) => void; addAssignment: () => void; }) {
    return (
        <div id="wd-modules-controls" className="text-nowrap">
      <button className="btn btn-lg btn-danger me-1 float-end" id="wd-add-module-btn"
        data-bs-toggle="modal" data-bs-target="#wd-add-module-dialog" >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </button>
      ...
      <AssignmentEditor dialogTitle="Add Assignment" assignmentName={assignmentName}
                    setAssignmentName={setAssignment} addAssignment={addAssignment} />
    </div>

                   
    );
}
