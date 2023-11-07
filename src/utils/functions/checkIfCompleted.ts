import checkEnrollmentStatus from "./checkEnrolmentStatus";

function checkIfCompleted(course, DBData) {
  if (checkEnrollmentStatus(course, DBData)) {
    for (let i = 0; i < DBData.length; i++) {
      if (course.title === DBData[i].course_name) {
        if (DBData[i].status === "Completed") {
          return true;
        }
      }
    }
  }
  return false;
}

export default checkIfCompleted;
