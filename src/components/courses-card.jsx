function CourseCard({ course, reverse = false }) {
  return (
    <div className={`flex flex-wrap gap-8 w-full items-center justify-between py-16 ${reverse && 'flex-row-reverse'}`}>
      <div className="py-6 rounded max-w-sm">
        <div className="text-5xl font-bold mb-4">{course.title}</div>
        <div className="text-gray-300">{course.description}
        </div>
      </div>
      <div className="flex flex-wrap max-w-md gap-16">
        {course['icons'].map((icon, index) => (
          <img src={icon} key={index} className="w-16 basis-16" />
        ))}
      </div>
    </div>
  );
}

export default CourseCard;
