function checkEnrollmentStatus(course, BaseData) {
  for (let i = 0; i < BaseData.length; i++) {
    const title = () => course.title === BaseData[i].course_name;
    if (BaseData.some(title)) {
      return true;
    }
  }
  return false;
}

export default checkEnrollmentStatus;
