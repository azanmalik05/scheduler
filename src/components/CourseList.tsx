type Course = {
  term: string;
  number: string;
  meets: string;
  title: string;
};

type CourseListProps = {
  courses: {
    [key: string]: Course;
  };
  term: string;
  selectedCourses: string[];
  toggleCourse: (courseId: string) => void;
};

function CourseList({
  courses,
  term,
  selectedCourses,
  toggleCourse,
}: CourseListProps) {
  const filteredCourses = Object.entries(courses).filter(
    ([, course]) => course.term === term
  );

  return (
    <ul className="course-list">
      {filteredCourses.map(([id, course]) => (
        <li
          className={
            selectedCourses.includes(id)
              ? "course-card selected-course"
              : "course-card"
          }
          key={id}
          onClick={() => toggleCourse(id)}
        >
          <h2 className="course-header">
            {course.term} CS {course.number}
          </h2>
          <p className="course-title">{course.title}</p>
          <p className="course-meets">{course.meets}</p>
        </li>
      ))}
    </ul>
  );
}

export default CourseList;