import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { assignments, modules } from "../../Database";
interface Assignment {
    _id: string;
    title: string;
    course: string;
    lessons: any[];
    editing?: boolean;
}
interface AssignmentState {
    assignments: Assignment[];
}

const initialState:AssignmentState = {
    assignments: [],
};
const assignmentsSlice = createSlice({
    name: "assignment",
    initialState,
    reducers: {
        setAssignments: (state, action: PayloadAction<Assignment[]>) => {
            state.assignments = action.payload;
        },        
      
        addAssignment: (state, { payload: assignment }) => {
            const newAssignment: any = {
                _id: new Date().getTime().toString(),
                lessons: [],
                title: assignment.title,
                course: assignment.course,
            };
            state.assignments = [...state.assignments, newAssignment] as any;
            console.log(state.assignments);
        },
        
        deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter(
                (assignment) => assignment._id !== assignmentId
            );
        },
        updateAssignment: (state, { payload: assignment }) => {
            state.assignments = state.assignments.map((m: any) =>
                m._id === assignment._id ? assignment : m
            ) as any;
        },
        editAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.map((m) =>
                m._id === assignmentId
                    ? { ...m, editing: true }
                    : { ...m, editing: false }
            );
        },
        
    },
});
export const { addAssignment, deleteAssignment, updateAssignment, editAssignment,setAssignments } =
    assignmentsSlice.actions;
export default assignmentsSlice.reducer;
