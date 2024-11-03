// userReducer.ts
//gpt生成的
// userReducer.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  role: "Student" | "Faculty";
  enrollments: number[];
}

const initialState: UserState = {
  role: "Student",
  enrollments: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    enrollCourse(state, action: PayloadAction<number>) {
      state.enrollments.push(action.payload);
    },
    unenrollCourse(state, action: PayloadAction<number>) {
      state.enrollments = state.enrollments.filter(id => id !== action.payload);
    },
    setEnrollments(state, action: PayloadAction<number[]>) {
      state.enrollments = action.payload;
    },
  },
});

export const { enrollCourse, unenrollCourse, setEnrollments } = userSlice.actions;
export default userSlice.reducer;
