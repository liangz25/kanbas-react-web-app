import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import userReducer from "./userReducer";
import assignmentReducer from "./Courses/Assignments/reducer"
import enrollmentReducer from "./Enrollment/reducer";


const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    enrollmentReducer,
    assignmentReducer
  },
});
export default store;