// actions.ts
//这是gpt生成的
export const ENROLL_COURSE = 'ENROLL_COURSE';
export const UNENROLL_COURSE = 'UNENROLL_COURSE';
export const SET_ENROLLMENTS = 'SET_ENROLLMENTS';

interface EnrollCourseAction {
  type: typeof ENROLL_COURSE;
  payload: { courseId: number };
}

interface UnenrollCourseAction {
  type: typeof UNENROLL_COURSE;
  payload: { courseId: number };
}

interface SetEnrollmentsAction {
  type: typeof SET_ENROLLMENTS;
  payload: { enrollments: number[] };
}

export type UserActionTypes = EnrollCourseAction | UnenrollCourseAction | SetEnrollmentsAction;

export const enrollCourse = (courseId: number): EnrollCourseAction => ({
  type: ENROLL_COURSE,
  payload: { courseId },
});

export const unenrollCourse = (courseId: number): UnenrollCourseAction => ({
  type: UNENROLL_COURSE,
  payload: { courseId },
});

export const setEnrollments = (enrollments: number[]): SetEnrollmentsAction => ({
  type: SET_ENROLLMENTS,
  payload: { enrollments },
});
export {};