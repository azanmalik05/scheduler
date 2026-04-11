import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import CourseList from "./components/CourseList";

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
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadCourses() {
      try {
        const response = await fetch("https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php");
        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }
        const json = await response.json();
        setSchedule(json);
      } catch (err) {
        setError("Could not load courses");
      } finally {
        setLoading(false);
      }
    }

    loadCourses();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  if (!schedule) {
    return <h1>No course data found</h1>;
  }

  return (
    <div className="app">
      <Banner title={schedule.title} />
      <CourseList courses={schedule.courses} />
    </div>
  );
}

export default App;