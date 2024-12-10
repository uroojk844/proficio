import CourseCard from "@/components/courses-card";
import courses from "@/assets/courses.json";

function Courses() {
  return (
    <section id="courses" className="min-h-dvh max-w-5xl xl:max-w-6xl mx-auto px-4 py-24">
      {courses.map((course, index) => (
        <CourseCard course={course} key={index} reverse={index % 2 == 0} />
      ))}
    </section>
  );
}

export default Courses;
