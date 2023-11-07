import { Course } from "src/types/course";
import { courses } from "src/utils/data";
import SearchInput from "src/components/SearchInput";
import useSearch from "src/hooks/useSearch";
import { useAppSelector } from "src/hooks/useDispatch";
import checkEnrollmentStatus from "src/utils/functions/checkEnrolmentStatus";
import checkIfCompleted from "src/utils/functions/checkIfCompleted";

function CourseListing() {
  const { onSearchChange, SearchResult } = useSearch(courses);
  const DBCourses = useAppSelector((state) => state.DBCourses.response);

  return (
    <main className="app">
      <nav className="w-full flex-center flex-col mb-6">
        <header className="bg-white space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-slate-900">AlemenoSkillShop</h2>
            <a
              href="/dashboard"
              className="hover:bg-[#00887B] text-[#1b2723] text-center group flex items-center  hover:text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm">
              My Account
            </a>
          </div>
        </header>
      </nav>
      <div className="head_text text-center">
        Build Your Knowledge,
        <br />
        <span className="text-[#00887B] text-center">...the Alemeno way</span>
        <br className="max-md:hidden" />
      </div>
      <img
        className="banner_img"
        src="https://i.ibb.co/nkgJ7ht/alemeno-illustration.jpg"
        alt="alemeno-illustration"
      />
      <SearchInput onChange={onSearchChange} />

      {/* All Courses */}

      <div className="grid gap-2 lg:grid-cols-4 cursor-pointer mt-20 mb-10">
        {SearchResult.map((course: Course) => (
          <a href={`/course/${course.id}`} key={course.id}>
            <div
              className="w-full shadow-md lg:max-w-sm relative"
              key={course.id}>
              <img
                className="object-cover w-full h-48"
                src={course?.thumbnail}
                alt={course?.title}
              />
              <div className="flex flex-wrap justify-end courses-center mb-2 absolute top-0 left-0 right-0">
                <div className="flex flex-row gap-2 bg-[#c53f00] text-white items-center justify-center px-2 py-1">
                  {checkIfCompleted(course, DBCourses)
                    ? "Completed"
                    : checkEnrollmentStatus(course, DBCourses)
                    ? "In Progress"
                    : course?.enrollmentStatus}
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-1 mt-2 mx-2">
                <div className="flex flex-row gap-1 bg-white text-[#00887B] items-center justify-center px-2 py-1 rounded-full text-xs">
                  <i className="fa fa-calendar" aria-hidden="true"></i>
                  {course.duration}
                </div>
                <div className="flex flex-row gap-1 bg-white text-[#00887B] items-center justify-center px-2 py-1 rounded-full text-xs">
                  <i className="fa fa-user" aria-hidden="true"></i>
                  {course.instructor}
                </div>
                <div className="flex flex-row gap-1 bg-white text-[#00887B] items-center justify-center px-2 py-1 rounded-full text-xs">
                  <i className="fa fa-clock" aria-hidden="true"></i>
                  {course.schedule}
                </div>
              </div>
              <div className="px-4 pb-1">
                <h4 className="text-xl font-semibold text-[#00887B]">
                  {course?.title}
                </h4>
                <p className="mb-2 leading-normal">{course?.description}</p>
              </div>
              <button className="border-solid border-2 border-[#00887B] w-full px-4 py-2 text-sm text-[#00887B] hover:bg-[#00887B] hover:text-white">
                SEE FULL DETAILS
              </button>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}

export default CourseListing;
