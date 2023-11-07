import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { courses } from "src/utils/data";
import { DBCoursesReducer } from "src/redux/dashboard-courses/reducers";

/* _______________________________ FOR HOMEPAGE DUMMY DATE COURSES_________________________ */
const CoursesInitState = {
  isGotAllCourses: true,
  isFailedToGet: false,
  response: courses,
};

const AllCoursesReducer = (state = CoursesInitState) => {
  return state;
};

/* ___________________________________________________________________________ */

const AllCourseConfig = {
  key: "AllCourses",
  storage,
  blacklist: [""],
};

const DBCoursesConfig = {
  key: "DBCourses",
  storage,
  blacklist: [""],
};

export default combineReducers({
  AllCourses: persistReducer(AllCourseConfig, AllCoursesReducer),
  DBCourses: persistReducer(DBCoursesConfig, DBCoursesReducer),
});
