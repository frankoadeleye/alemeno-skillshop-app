import { DASHBOARD_COURSES } from "./types";

function CreateCourse(payload) {
  return {
    type: DASHBOARD_COURSES.CREATE,
    payload,
  };
}

function MarkCourseCompleted(payload: number | string) {
  return {
    type: DASHBOARD_COURSES.MARK_AS_COMPLETED,
    payload,
  };
}

export const DashboardActions = {
  create: CreateCourse,
  mark_as_completed: MarkCourseCompleted,
};

export default DashboardActions;
