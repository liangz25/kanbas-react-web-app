import { createSlice } from "@reduxjs/toolkit";
import { assignments, modules } from "../../Database";
const initialState = {
    assignments: assignments,
};
const assignmentsSlice = createSlice({
    name: "assignment",
    initialState,
    reducers: {
        addAssignment: (state, { payload: assignment }) => {
            const newAssignment: any = {
                _id: new Date().getTime().toString(),
                lessons: [],
                title: assignment.title,
                course: assignment.title,
            };
            state.assignments = [...state.assignments, newAssignment] as any;
            console.log(state.assignments);
        },
        deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter(
                (m: any) => m._id !==assignmentId);
        },
        updateAssignment: (state, { payload: assignment }) => {
            state.assignments = state.assignments.map((m: any) =>
                m._id === assignment._id ? module : m
            ) as any;
        },
        editAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.map((m: any) =>
                m._id === assignmentId ? { ...m, editing: true } : m
            ) as any;
        },
    },
});
export const { addAssignment, deleteAssignment, updateAssignment, editAssignment } =
    assignmentsSlice.actions;
export default assignmentsSlice.reducer;
