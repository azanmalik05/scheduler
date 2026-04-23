import { useState } from "react";
import { Link, useParams } from "react-router-dom";

type Course = {
  term: string;
  number: string;
  meets: string;
  title: string;
};

type CourseEditorProps = {
  courses: {
    [key: string]: Course;
  };
};

function CourseEditor({ courses }: CourseEditorProps) {
  const { id } = useParams();
  const course = id ? courses[id] : null;

  const [title, setTitle] = useState(course ? course.title : "");
  const [meets, setMeets] = useState(course ? course.meets : "");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  if (!course) {
    return <p>Course not found.</p>;
  }

  return (
    <form className="course-form" onSubmit={handleSubmit}>
      <h2>Edit CS {course.number}</h2>

      <label className="form-field">
        <span>Title</span>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>

      <label className="form-field">
        <span>Meeting Times</span>
        <input
          type="text"
          name="meets"
          value={meets}
          onChange={(e) => setMeets(e.target.value)}
        />
      </label>

      <div className="form-actions">
        <Link className="cancel-button" to="/">
          Cancel
        </Link>
      </div>
    </form>
  );
}

export default CourseEditor;