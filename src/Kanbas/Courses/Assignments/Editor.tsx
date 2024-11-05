import { useState } from "react";

export default function AssignmentEditor() {
    const [assignment, setAssignment] = useState({
        title: "Assignment Title",
        course: "Sample Course",
        description: "The assignment is available online. Submit a link to the landing page of",
        points: 100,
        group: "Assignments",
        displayGradeAs: "Percentage",
        submissionType: "Online",
        onlineEntryOptions: {
            textEntry: false,
            websiteUrl: false,
            mediaRecordings: false,
            studentAnnotation: false,
            fileUpload: false,
        },
        assignTo: "Everyone",
        dueDate: "2024-05-13",
        availableFrom: "2024-05-06",
        availableUntil: "2024-05-20",
    });

    const [isEditing, setIsEditing] = useState(false); 

    const handleChange = (field: string, value: string | number | boolean) => {
        setAssignment((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleCheckboxChange = (option: keyof typeof assignment.onlineEntryOptions) => {
        setAssignment((prev) => ({
            ...prev,
            onlineEntryOptions: {
                ...prev.onlineEntryOptions,
                [option]: !prev.onlineEntryOptions[option],
            },
        }));
    };

    const toggleEditMode = () => {
        setIsEditing(!isEditing); 
    };

    const saveAssignment = () => {
        console.log("Assignment saved:", assignment);
        setIsEditing(false); 
    };

    return (
        <div>
            <div className="mb-3">
                <label htmlFor="title" className="col-form-label">Assignment Title</label>
                <input
                    id="title"
                    value={assignment.title}
                    onChange={(e) => handleChange("title", e.target.value)}
                    placeholder="Assignment Title"
                    className="form-control"
                    disabled={!isEditing} 
                />
            </div>
            <div className="mb-3">
                <label htmlFor="course" className="col-form-label">Course</label>
                <input
                    id="course"
                    value={assignment.course}
                    onChange={(e) => handleChange("course", e.target.value)}
                    placeholder="Course"
                    className="form-control"
                    disabled={!isEditing}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="col-form-label">Description</label>
                <textarea
                    id="description"
                    value={assignment.description}
                    onChange={(e) => handleChange("description", e.target.value)}
                    className="form-control"
                    disabled={!isEditing}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="points" className="col-form-label">Points</label>
                <input
                    id="points"
                    type="number"
                    value={assignment.points}
                    onChange={(e) => handleChange("points", Number(e.target.value))}
                    className="form-control"
                    disabled={!isEditing}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="group" className="col-form-label">Assignment Group</label>
                <select
                    id="group"
                    value={assignment.group}
                    onChange={(e) => handleChange("group", e.target.value)}
                    className="form-select"
                    disabled={!isEditing}
                >
                    <option value="Assignments">Assignments</option>
                    <option value="Quizzes">Quizzes</option>
                    <option value="Projects">Projects</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="displayGradeAs" className="col-form-label">Display Grade As</label>
                <select
                    id="displayGradeAs"
                    value={assignment.displayGradeAs}
                    onChange={(e) => handleChange("displayGradeAs", e.target.value)}
                    className="form-select"
                    disabled={!isEditing}
                >
                    <option value="Percentage">Percentage</option>
                    <option value="Points">Points</option>
                    <option value="Letter Grade">Letter Grade</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="submissionType" className="col-form-label">Submission Type</label>
                <select
                    id="submissionType"
                    value={assignment.submissionType}
                    onChange={(e) => handleChange("submissionType", e.target.value)}
                    className="form-select"
                    disabled={!isEditing}
                >
                    <option value="Online">Online</option>
                    <option value="Paper">Paper</option>
                    <option value="External Tool">External Tool</option>
                </select>
            </div>
            <div className="mb-3">
                <label>Online Entry Options</label>
                {Object.keys(assignment.onlineEntryOptions).map((option) => (
                    <div key={option} className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id={option}
                            checked={assignment.onlineEntryOptions[option as keyof typeof assignment.onlineEntryOptions]}
                            onChange={() => handleCheckboxChange(option as keyof typeof assignment.onlineEntryOptions)}
                            disabled={!isEditing}
                        />
                        <label htmlFor={option} className="form-check-label">
                            {option.charAt(0).toUpperCase() + option.slice(1)}
                        </label>
                    </div>
                ))}
            </div>
            <div className="mb-3">
                <label htmlFor="assignTo" className="col-form-label">Assign To</label>
                <textarea
                    id="assignTo"
                    value={assignment.assignTo}
                    onChange={(e) => handleChange("assignTo", e.target.value)}
                    className="form-control"
                    rows={1}
                    disabled={!isEditing}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="dueDate" className="col-form-label">Due Date</label>
                <input
                    type="date"
                    id="dueDate"
                    value={assignment.dueDate}
                    onChange={(e) => handleChange("dueDate", e.target.value)}
                    className="form-control"
                    disabled={!isEditing}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="availableFrom" className="col-form-label">Available From</label>
                <input
                    type="date"
                    id="availableFrom"
                    value={assignment.availableFrom}
                    onChange={(e) => handleChange("availableFrom", e.target.value)}
                    className="form-control"
                    disabled={!isEditing}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="availableUntil" className="col-form-label">Available Until</label>
                <input
                    type="date"
                    id="availableUntil"
                    value={assignment.availableUntil}
                    onChange={(e) => handleChange("availableUntil", e.target.value)}
                    className="form-control"
                    disabled={!isEditing}
                />
            </div>
            <button onClick={isEditing ? saveAssignment : toggleEditMode} className="btn btn-primary">
                {isEditing ? "Save" : "Edit"}
            </button>
            {isEditing && (
                <button onClick={toggleEditMode} className="btn btn-secondary ms-2">
                    Cancel
                </button>
            )}
        </div>
    );
}
