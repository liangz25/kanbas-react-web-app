export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <hr></hr>
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description">
                The assignment is available online Submit a link to the landing page of
            </textarea>
            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group"> Assignment Group: </label><br />
                        <select id="wd-group">
                            <option value="Assignments">Assignments</option>
                        </select>
                    </td>

                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as"> Display grade as: </label><br />
                        <select id="wd-display-grade-as">
                            <option value="Percentage">Percentage</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type"> Submission type: </label><br />
                        <select id="wd-submission-type">
                            <option value="Online">Online</option>
                        </select>
                    </td>
                    <tr>
                        <td align="right" valign="top">
                            <label>Online Entry Options:</label><br />

                            <input type="checkbox" name="check-genre" id="wd-text-entry" />
                            <label htmlFor="wd-text-entry">Text Entry</label><br />

                            <input type="checkbox" name="check-genre" id="wd-website-url" />
                            <label htmlFor="wd-website-url">Website URL</label><br />

                            <input type="checkbox" name="check-genre" id="wd-media-recordings" />
                            <label htmlFor="wd-media-recordings">Media Recordings</label><br />

                            <input type="checkbox" name="check-genre" id="wd-student-annotation" />
                            <label htmlFor="wd-student-annotation">Student Annotation</label>
                            <input type="checkbox" name="check-genre" id="wd-file-upload" />
                            <label htmlFor="wd-file-upload">File Uploads</label>
                        </td>
                    </tr>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <h5 id="wd-assign-to">Assign to</h5>
                        <label>Assign Assign to:</label><br />
                        <textarea id="wd-textarea" cols={10} rows={1}>EveryOne.</textarea>

                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-due-date"> Due: </label>
                        <input type="date"
                            id="wd-due-date"
                            value="2024-05-13" /><br />
                        <label htmlFor="wd-available-from"> Available from: </label>
                        <input type="date"
                            id="wd-available-from"
                            value="2024-05-6" /><br />
                        <label htmlFor="wd-available-until"> Until: </label>
                        <input type="date"
                            id="wd-available-until"
                            value="2024-05-20" /><br />
                    </td>
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
