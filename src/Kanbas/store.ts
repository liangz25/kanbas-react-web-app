import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import userReducer from "./userReducer";



const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    userReducer//gpt

  },
});
export default store;