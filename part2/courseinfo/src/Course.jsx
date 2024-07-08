import Header from "./Header";
import Content from "./Content";

const Course = ({ course }) => {
  const total = course.parts.reduce((acc, curr) => acc + curr.exercises, 0);

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <strong>total of {total} exercises</strong>
    </div>
  );
};

export default Course;
