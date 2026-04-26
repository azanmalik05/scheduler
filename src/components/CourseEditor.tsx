import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { courseResolver, type Course } from "../types/courses";

type CourseEditorProps = {
  courses: {
    [key: string]: Course;
  };
};

function CourseEditor({ courses }: CourseEditorProps) {
  const { id } = useParams();
  const course = id ? courses[id] : null;

  const { register, handleSubmit, formState: { errors } } = useForm<Course>({
    defaultValues: course || {
      term: "Fall",
      number: "",
      title: "",
      meets: "",
    },
    mode: "onChange",
    resolver: courseResolver,
  });

  function onSubmit() {
  }

  if (!course) {
    return <p>Course not found.</p>;
  }

  return (
    <form className="course-form" onSubmit={handleSubmit(onSubmit)}>
      <h2>Edit CS {course.number}</h2>

      <label className="form-field">
        <span>Term</span>
        <input type="text" {...register("term")} />
        {errors.term && <p className="form-error">{errors.term.message}</p>}
      </label>

      <label className="form-field">
        <span>Number</span>
        <input type="text" {...register("number")} />
        {errors.number && <p className="form-error">{errors.number.message}</p>}
      </label>

      <label className="form-field">
        <span>Title</span>
        <input type="text" {...register("title")} />
        {errors.title && <p className="form-error">{errors.title.message}</p>}
      </label>

      <label className="form-field">
        <span>Meeting Times</span>
        <input type="text" {...register("meets")} />
        {errors.meets && <p className="form-error">{errors.meets.message}</p>}
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