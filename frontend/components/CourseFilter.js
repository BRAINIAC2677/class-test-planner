export const CourseFilter = ({ value, onChange, courses }) => (
    <div className="absolute top-8 right-8 z-20">
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="bg-white border border-gray-200 px-5 py-2.5 rounded-lg text-gray-900 text-sm cursor-pointer outline-none transition-all shadow-md hover:border-accent hover:shadow-lg"
        >
            <option value="all">All Courses</option>
            {courses.map((course) => (
                <option key={course.COURSE_ID} value={course.COURSE_ID}>{course.COURSE_CODE}</option>
            ))}
        </select>
    </div>
);
