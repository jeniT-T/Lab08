function CourseDetail({ course }) {
    if(!course) return null;

    return(
        <div>
            <h3>Course Details</h3>
            <p>Course ID: {course.id}</p>
            <p>Title: {course.title}</p>
            <p>Lecturer: {course.lecturer}</p>
            <p>Period: {course.period}</p>
        </div>
    );
}

export default CourseDetail;