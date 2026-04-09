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
};

function CourseList({ courses }: CourseListProps) {
  return (
    <ul className="course-list">
      {Object.values(courses).map((course) => (
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