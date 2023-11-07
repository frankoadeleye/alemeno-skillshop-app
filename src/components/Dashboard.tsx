import React from "react";
import { useAppSelector } from "src/hooks/useDispatch";
import { useAppDispatch } from "src/hooks/useDispatch";
import DashboardActions from "src/redux/dashboard-courses/actions";

function StudentDashboard() {
  const dispatch = useAppDispatch();
  const DBCourses = useAppSelector((state) => state.DBCourses.response);

  const handleMarkAsCompleted = (id: number | string) => () => {
    dispatch(DashboardActions.mark_as_completed(id));
  };

  return (
    <>
      <figure className="bg-slate-100 p-8">
        <p className="text-sm leading-4 font-medium  sm:text-black dark:sm:text-black">
          <a href={`/`}>
            <i className="fa fa-long-arrow-left mr-2" aria-hidden="true"></i>
            Back to Courses
          </a>
        </p>
        <br />
        <img
          className="w-24 h-24 rounded-full"
          src="https://i.ibb.co/zJX53G6/user-in-dashboard.jpg"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg w-2/4">Your Dashboard</p>
          </blockquote>
          <figcaption>
            <div>
              Here you can see your enroled courses and mark a course as
              completed
            </div>
          </figcaption>
        </div>
      </figure>
      <br />
      <div className="table-container">
        <table className="border-separate border-spacing-y-2 text-sm sm:mx-8">
          {DBCourses.length > 0 && (
            <thead className="">
              <tr>
                <th>Course</th>
                <th>Instructor</th>
                <th>Thumbnail</th>
                <th>Due Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
          )}
          <tbody>
            {DBCourses.map((DBCourse) => {
              return (
                <tr className="mb-2" key={DBCourse.id}>
                  <td className="td-class px-4 py-3 text-gray-900 bg-gray-200 ">
                    {DBCourse.course_name}
                  </td>
                  <td className="td-class px-4 py-3 text-gray-900 bg-gray-200 ">
                    {DBCourse.instructor_name}
                  </td>
                  <td className="td-class px-4 py-3 text-gray-900 bg-gray-200 ">
                    <img
                      src={DBCourse.thumbnail}
                      alt=""
                      className="w-20 h-auto object-cover"
                      loading="lazy"
                    />
                  </td>
                  <td className="td-class px-4 py-3 text-gray-900 bg-gray-200 ">
                    {DBCourse.due_date}
                  </td>
                  <td className="td-class px-4 py-3 text-gray-900 bg-gray-200 ">
                    {DBCourse.status}
                  </td>
                  <td className="td-class px-4 py-3 text-gray-900 bg-gray-200 ">
                    <button
                      disabled={DBCourse.status === "Completed"}
                      onClick={handleMarkAsCompleted(DBCourse.id)}
                      className="cursor-pointer float-right bg-[#00887B] px-4 py-2 text-xs font-semibold uppercase text-[#fff] antialiased disabled:bg-gray-400 disabled:cursor-default">
                      {DBCourse.status === "Completed"
                        ? "Completed"
                        : "Mark As Completed"}
                    </button>
                  </td>
                  <td className="td-class px-4 py-3 text-gray-900 bg-gray-200 ">
                    <a
                      href={`/course/${DBCourse.id}`}
                      className=" cursor-pointer float-right bg-[#00887B] px-4 py-2 text-xs font-semibold uppercase text-[#fff] antialiased">
                      Course Details
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default StudentDashboard;
