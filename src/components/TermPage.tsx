import { useState } from "react";
import CourseList from "./CourseList";
import TermSelector from "./TermSelector";

type Course = {
  term: string;
  number: string;
  meets: string;
  title: string;
};

type TermPageProps = {
  courses: {
    [key: string]: Course;
  };
};

function TermPage({ courses }: TermPageProps) {
  const [term, setTerm] = useState("Fall");
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);

  function toggleCourse(courseId: string) {
    if (selectedCourses.includes(courseId)) {
      setSelectedCourses(selectedCourses.filter((id) => id !== courseId));
    } else {
      setSelectedCourses([...selectedCourses, courseId]);
    }
  }

  return (
    <>
      <TermSelector term={term} setTerm={setTerm} />
      <CourseList
        courses={courses}
        term={term}
        selectedCourses={selectedCourses}
        toggleCourse={toggleCourse}
      />
    </>
  );
}

export default TermPage;