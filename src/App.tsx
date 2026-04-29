import { Route, Routes } from "react-router-dom";
import Banner from "./components/Banner";
import TermPage from "./components/TermPage";
import CourseEditor from "./components/CourseEditor";
import { useDataQuery } from "./utilities/firebase";

type Course = {
  term: "Fall" | "Winter" | "Spring" | "Summer";
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
  const [json, loading, error] = useDataQuery("/");

  if (error) {
    return <h1>Loading error</h1>;
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!json) {
    return <h1>No data found</h1>;
  }

  const schedule = json as Schedule;

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