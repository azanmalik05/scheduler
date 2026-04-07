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
    <ul>
      {Object.values(courses).map((course) => (
        <li key={course.term + course.number}>
          {course.term} CS {course.number}: {course.title} ({course.meets})
        </li>
      ))}
    </ul>
  );
}

export default CourseList;