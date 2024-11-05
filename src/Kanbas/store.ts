import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import userReducer from "./userReducer";
import assignmentReducer from "./Courses/Assignments/reducer"



const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    userReducer,//gpt
    assignmentReducer
  },
});
export default store;