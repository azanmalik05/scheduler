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

  return (
    <>
      <TermSelector term={term} setTerm={setTerm} />
      <CourseList courses={courses} term={term} />
    </>
  );
}

export default TermPage;