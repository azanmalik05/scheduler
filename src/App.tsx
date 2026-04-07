import Banner from "./components/Banner";
import CourseList from "./components/CourseList";

const schedule = {
  title: "CS Courses for 2018-2019",
  courses: {
    F101: {
      term: "Fall",
      number: "101",
      meets: "MWF 11:00-11:50",
      title: "Computer Science: Concepts, Philosophy, and Connections"
    },
    F110: {
      term: "Fall",
      number: "110",
      meets: "MWF 12:00-12:50",
      title: "Intro Programming for non-majors"
    },
    F111: {
      term: "Fall",
      number: "111",
      meets: "MWF 1:00-1:50",
      title: "Fundamentals of Computer Programming I"
    },
    W111: {
      term: "Winter",
      number: "111",
      meets: "MWF 1:00-1:50",
      title: "Fundamentals of Computer Programming I"
    },
    F211: {
      term: "Fall",
      number: "211",
      meets: "MWF 2:00-2:50",
      title: "Fundamentals of Computer Programming II"
    }
  }
};

function App() {
  return (
    <>
      <Banner title={schedule.title} />
      <CourseList courses={schedule.courses} />
    </>
  );
}

export default App;