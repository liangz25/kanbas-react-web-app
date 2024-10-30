import LessonControlButtons from "./LessonControlButtons";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import { useParams } from "react-router";
import * as db from "../../Database";
import ModuleControlButtons from "./ModuleControlButtons";
import React, { useState } from "react";  
import { addModule, editModule, updateModule, deleteModule }
  from "./reducer";
import { useSelector, useDispatch } from "react-redux";  

export default function Modules() {
    const { cid } = useParams();
    const [modules, setModules] = useState<any[]>(db.modules);
    const [moduleName, setModuleName] = useState("");
  const addModule = () => {
    setModules([ ...modules, { _id: new Date().getTime().toString(),
                                     name: moduleName, course: cid, lessons: [] } ]);
    setModuleName("");
  };
  const deleteModule = (moduleId: string) => {
    setModules(modules.filter((m) => m._id !== moduleId));
  };
  const editModule = (moduleId: string) => {
    setModules(modules.map((m) => (m._id === moduleId ? { ...m, editing: true } : m)));
};
const updateModule = (module: any) => {
  setModules(modules.map((m) => (m._id === module._id ? module : m)));
};



    return (
        <div>
            <ModulesControls setModuleName={setModuleName} moduleName={moduleName} addModule={addModule}/><br /><br /><br /><br />

            {/* Implement Collapse All button, View Progress button, etc. */}
            <ul id="wd-modules" className="list-group rounded-0">
                {modules
                    // .filter((module: any) => module.course === cid)
                    .map((module: any) => (
                        <li key ={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                            <div className="wd-title p-3 ps-2 bg-secondary">
                                <BsGripVertical className="me-2 fs-3" />{!module.editing && module.name}
      { module.editing && (
        <input className="form-control w-50 d-inline-block"
               onChange={(e) => updateModule({ ...module, name: e.target.value })}
               onKeyDown={(e) => {
                 if (e.key === "Enter") {
                   updateModule({ ...module, editing: false });
                 }
               }}
               defaultValue={module.name}/>
      )}<ModuleControlButtons moduleId={module._id}
        deleteModule={deleteModule}editModule={editModule}/></div>
                            {module.lessons && (
                                <ul className="wd-lessons list-group rounded-0">
                                    {module.lessons.map((lesson: any) => (
                                        <li className="wd-lesson list-group-item p-3 ps-1">
                                            <BsGripVertical className="me-2 fs-3" />{lesson.name}<LessonControlButtons />

                                            <ul className="wd-content">
                                                <li className="wd-content-item list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />Introduction to the course<LessonControlButtons /></li>
                                                <li className="wd-content-item list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />Learn what is Web Development<LessonControlButtons /></li>
                                                <li className="wd-lesson list-group-item p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />LESSON 1<LessonControlButtons /> </li>
                                                <li className="wd-lesson list-group-item p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />LESSON 2 <LessonControlButtons /></li>
                                            </ul>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}

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
