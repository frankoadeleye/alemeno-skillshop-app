import getDate from "src/utils/functions/getDate";
import { DASHBOARD_COURSES } from "./types";

const DBCoursesInitState = {
  response: [],
};

export function DBCoursesReducer(state = DBCoursesInitState, action) {
  switch (action.type) {
    case DASHBOARD_COURSES.CREATE:
      return {
        ...state,
        response: [
          ...state.response,
          {
            id: action.payload.course_id,
            course_name: action.payload.course_name,
            instructor_name: action.payload.instructor_name,
            thumbnail: action.payload.thumbnail,
            due_date: getDate(90), // meaning course is due in 90 days from day of enrolment
            status: action.payload.status,
          },
        ],
      };

    case DASHBOARD_COURSES.MARK_AS_COMPLETED:
      // let currentCourse = state.response.find(
      //   (course) => course.id === action.payload.id
      // );

      // const currentCourse = state.response.findIndex((obj) => {
      //   return obj.id === action.payload.id;
      // });
      // state.response[1].status = "Completed";
      return {
        ...state,
        response: state.response.map((course) =>
          course.id === action.payload
            ? { ...course, status: "Completed" }
            : course
        ),
      };

    default:
      return state;
  }
}
