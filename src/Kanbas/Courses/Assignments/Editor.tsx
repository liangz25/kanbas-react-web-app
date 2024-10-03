export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor" className="mb-3">
            <hr></hr><div className="mb-3">
                <label htmlFor="r1" className="col-sm-2 col-form-label">Assignment Name</label>
                <input id="wd-name" value="A1 - ENV + HTML" /><br /><br /></div>
            <label htmlFor="r1" className="col-sm-2 col-form-label">
                <div className="mb-3"> <label htmlFor="wd-description" className="col-form-label">Description</label>
                    <textarea id="wd-description" className="form-control">
                        The assignment is available online Submit a link to the landing page of
                    </textarea></div></label>
            <br />


            <table>

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points" className="col-form-label">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" className="form-control" value={100} />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group" className="col-form-label"> Assignment Group: </label><br />
                        <select id="wd-group" className="form-select">
                            <option value="Assignments">Assignments</option>
                        </select>
                    </td>

                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as" className="col-form-label"> Display grade as: </label><br />
                        <select id="wd-display-grade-as" className="form-select">
                            <option value="Percentage">Percentage</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type" className="col-form-label"> Submission type: </label><br />
                        <select id="wd-submission-type" className="form-select">
                            <option value="Online">Online</option>
                        </select>
                    </td>
                    <div className="mb-3">
                <label>Online Entry Options</label>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="wd-text-entry" />
                    <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="wd-website-url" />
                    <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="wd-media-recordings" />
                    <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="wd-student-annotation" />
                    <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="wd-file-upload" />
                    <label htmlFor="wd-file-upload" className="form-check-label">File Uploads</label>
                </div>
            </div>
                </tr>
                <tr><div className="mb-3">
                    <td align="right" valign="top">
                        <h5 id="wd-assign-to">Assign to</h5>
                        <label htmlFor="wd-textarea" className="col-form-label">Assign Assign to:</label><br />
                        <textarea id="wd-textarea" className="form-control" cols={10} rows={1}>EveryOne.</textarea>

                    </td></div>
                </tr>
                <tr><div className="row mb-3">
                    <td align="right" valign="top">
                        <label htmlFor="wd-due-date" className="col-form-label"> Due: </label>
                        <input type="date"
                            id="wd-due-date" className="form-control"
                            value="2024-05-13" /><br />
                        <div className="col-md-4">
                            <label htmlFor="wd-available-from" className="col-form-label"> Available from: </label>
                            <input type="date"
                                id="wd-available-from" className="form-control"
                                value="2024-05-6" /><br /></div>
                                <div className="col-md-4">
                        <label htmlFor="wd-available-until"className="col-form-label"> Until: </label>
                        <input type="date"
                            id="wd-available-until"className="form-control"
                            value="2024-05-20" /><br /></div>
                    </td></div>
                </tr>

                <hr></hr>
                <tr>

                    <button id="wd-name" onClick={() => alert("Life is Good!")} type="button">
                        Cancel
                    </button>

                    <button id="wd-name" onClick={() => alert("Life is Good!")} type="button">
                        Save
                    </button>

                </tr>
            </table>

        </div>
    );
}
