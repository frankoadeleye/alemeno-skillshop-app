import { useParams } from "react-router-dom";
import { Course, SyllabusItem } from "src/types/course";
import { courses } from "src/utils/data";
import { useAppSelector } from "src/hooks/useDispatch";
import checkEnrollmentStatus from "src/utils/functions/checkEnrolmentStatus";
import useAddCourse from "src/hooks/useAddCourse";

/* DB stands for DashBoard */

function CourseDetails() {
  const DBCourses = useAppSelector((state) => state.DBCourses.response);

  const { id } = useParams<{ id: string }>();
  const courseId = parseInt(id, 10);
  const currentCourse = courses.find(
    (course: Course) => course.id === courseId
  );
  const { AddCourse } = useAddCourse(currentCourse);

  if (!currentCourse) {
    return <div className="not-found">Course Not Found</div>;
  }

  return (
    <div className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
      <p className="text-sm leading-4 font-medium  sm:text-black dark:sm:text-black">
        <a href={`/`}>
          <i className="fa fa-long-arrow-left mr-2" aria-hidden="true"></i>
          Back to Courses
        </a>
      </p>
      <br />
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
        <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
          <h1 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-dark">
            {currentCourse.title}
          </h1>
          <p className="text-sm leading-4 font-medium text-white sm:text-black dark:sm:text-black">
            Status: {currentCourse.enrollmentStatus}
          </p>
          <br />
        </div>
        <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
          <img
            src={currentCourse.thumbnail}
            alt=""
            className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full"
            loading="lazy"
          />
        </div>
        <div className="mt-4 text-xs flex-col font-medium flex row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
          <div className="flex flex-row">
            <div className="text-[#c53f00] flex items-center dark:text-[#c53f00]">
              <span>
                <i className="fa fa-star mr-1" aria-hidden="true"></i>
                {currentCourse.rating} from {currentCourse.students.length}
                students
              </span>
            </div>
            <div className="flex items-center">
              <div className="flex flex-row gap-1 bg-white text-[#00887B] items-center justify-center px-2 py-1 rounded-full text-xs">
                <i className="fa fa-user mr-1" aria-hidden="true"></i>
                {currentCourse.instructor}
              </div>
            </div>
          </div>
          {/*  */}
          <div className="flex flex-row">
            <div className="text-[#c53f00] flex items-center dark:text-[#c53f00]">
              <i className="fa fa-clock mr-1" aria-hidden="true"></i>
              {currentCourse.schedule}
            </div>
            <div className="flex items-center">
              <div className="flex flex-row gap-1 bg-white text-[#00887B] items-center justify-center px-2 py-1 rounded-full text-xs">
                <i className="fa fa-calendar mr-1" aria-hidden="true"></i>
                {currentCourse.duration}
              </div>
            </div>
          </div>
          <br />
          Prerequisites:
          <div className="flex">
            <ul className="list-none">
              {currentCourse.prerequisites.map((item) => {
                return <li>{item}</li>;
              })}
            </ul>
          </div>
          <br />
          Syllabus:
          {currentCourse.syllabus.map((item: SyllabusItem) => {
            return (
              <div className="flex">
                <details key={item.week} className="mb-2">
                  <summary className="cursor-pointer mb-1">
                    {item.topic}
                  </summary>
                  {item.content}
                </details>
              </div>
            );
          })}
        </div>
        <div className="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
          <button
            disabled={checkEnrollmentStatus(currentCourse, DBCourses)}
            onClick={AddCourse}
            type="button"
            className="hover:bg-[#00887B] bg-black text-[#fff] text-center group flex items-center  hover:text-white text-sm font-medium px-7 py-2 shadow-sm disabled:bg-gray-400">
            {checkEnrollmentStatus(currentCourse, DBCourses) ? (
              <span>
                <i className="fa fa-check mr-2" aria-hidden="true"></i>
                Enrolled
              </span>
            ) : (
              "Enrol Now"
            )}
          </button>
        </div>
        <p className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-500">
          {currentCourse.description}
        </p>
      </div>
    </div>
  );
}

export default CourseDetails;
