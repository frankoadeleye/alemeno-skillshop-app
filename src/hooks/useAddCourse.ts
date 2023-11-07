import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "src/hooks/useDispatch";
import DashboardActions from "src/redux/dashboard-courses/actions";

function useAddCourse(currentCourse) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const AddCourse = () => {
    dispatch(
      DashboardActions.create({
        course_id: currentCourse.id,
        course_name: currentCourse.title,
        instructor_name: currentCourse.instructor,
        thumbnail: currentCourse.thumbnail,
        due_date: "December 2023",
        status: "In Progress",
      })
    );
    navigate("/dashboard");
  };

  return {
    AddCourse,
  };
}

export default useAddCourse;
