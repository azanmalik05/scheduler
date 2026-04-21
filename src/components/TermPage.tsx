import { useState } from "react";
import CourseList from "./CourseList";
import TermSelector from "./TermSelector";
import CoursePlanModal from "./CoursePlanModal";
import { hasConflict } from "../utilities/conflicts";

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
  const [showPlan, setShowPlan] = useState(false);

  function toggleCourse(courseId: string) {
    if (selectedCourses.includes(courseId)) {
      setSelectedCourses(selectedCourses.filter((id) => id !== courseId));
    } else if (!hasConflict(courseId, courses, selectedCourses)) {
      setSelectedCourses([...selectedCourses, courseId]);
    }
  }

  return (
    <>
      <div className="top-bar">
        <TermSelector term={term} setTerm={setTerm} />
        <button className="plan-button" onClick={() => setShowPlan(true)}>
          Course Plan
        </button>
      </div>

      <CourseList
        courses={courses}
        term={term}
        selectedCourses={selectedCourses}
        toggleCourse={toggleCourse}
      />

      <CoursePlanModal
        isOpen={showPlan}
        onClose={() => setShowPlan(false)}
        courses={courses}
        selectedCourses={selectedCourses}
      />
    </>
  );
}

export default TermPage;