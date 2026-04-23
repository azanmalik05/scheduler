import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Banner from "./components/Banner";
import TermPage from "./components/TermPage";
import CourseEditor from "./components/CourseEditor";

type Course = {
  term: string;
  number: string;
  meets: string;
  title: string;
};

type Schedule = {
  title: string;
  courses: {
    [key: string]: Course;
  };
};

function App() {
  const [schedule, setSchedule] = useState<Schedule | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCourses() {
      const response = await fetch("https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php");
      const json = await response.json();
      setSchedule(json);
      setLoading(false);
    }

    loadCourses();
  }, []);

  if (loading || !schedule) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="app">
      <Banner title={schedule.title} />
      <Routes>
        <Route path="/" element={<TermPage courses={schedule.courses} />} />
        <Route path="/courses/:id/edit" element={<CourseEditor courses={schedule.courses} />} />
      </Routes>
    </div>
  );
}

export default App;