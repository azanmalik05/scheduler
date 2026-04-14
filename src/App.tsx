import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import TermPage from "./components/TermPage";

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
      <TermPage courses={schedule.courses} />
    </div>
  );
}

export default App;