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
};

function CourseList({ courses, term }: CourseListProps) {
  const filteredCourses = Object.values(courses).filter(
    (course) => course.term === term
  );

  return (
    <ul className="course-list">
      {filteredCourses.map((course) => (
        <li className="course-card" key={course.term + course.number}>
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