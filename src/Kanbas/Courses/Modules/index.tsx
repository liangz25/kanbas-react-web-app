import ModulesControls from "./ModulesControls";

export default function Modules() {
    return (
        <div>
            <ModulesControls /><br /><br /><br /><br />

            {/* Implement Collapse All button, View Progress button, etc. */}
            <ul id="wd-modules" className="list-group rounded-0">
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">Week 1</div>
                    <ul className="wd-lessons list-group rounded-0">
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item list-group-item p-3 ps-1">Introduction to the course</li>
                                <li className="wd-content-item list-group-item p-3 ps-1">Learn what is Web Development</li>
                                <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 1 </li>
                                <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 2 </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">Week 2</div>
                    <ul className="wd-lessons list-group rounded-0">
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 1 </li>
                            <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 2 </li>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}
