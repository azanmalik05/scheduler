import Modal from "./Modal";

type Course = {
  term: string;
  number: string;
  meets: string;
  title: string;
};

type CoursePlanModalProps = {
  isOpen: boolean;
  onClose: () => void;
  courses: {
    [key: string]: Course;
  };
  selectedCourses: string[];
};

function CoursePlanModal({
  isOpen,
  onClose,
  courses,
  selectedCourses,
}: CoursePlanModalProps) {
  const plannedCourses = selectedCourses.map((id) => courses[id]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2>Course Plan</h2>

      {plannedCourses.length === 0 ? (
        <>
          <p>No courses selected yet.</p>
          <p>Click on course cards to add them to your plan.</p>
        </>
      ) : (
        <ul className="plan-list">
          {plannedCourses.map((course, index) => (
            <li key={index}>
              CS {course.number}: {course.title} — {course.meets}
            </li>
          ))}
        </ul>
      )}
    </Modal>
  );
}

export default CoursePlanModal;