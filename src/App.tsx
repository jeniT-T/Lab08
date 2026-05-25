import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Course from './components/Course'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import CourseDetail from "./components/CourseDetail";

const courses = [
  {id: "WD101",
   title: "Web Development",
   lecturer: "DR Smith",
   period: "2026"},
   {id: "DB202",
   title: "Database",
   lecturer: "DR Lee",
   period: "2026"},
   {id: "SE303",
   title: "Software Engineering",
   lecturer: "DR Brown",
   period: "2026"},
   {id: "AI404",
   title: "Artificial Intelligence",
   lecturer: "DR Green",
   period: "2026"},
   {id: "UX505",
   title: "User Experince Design",
   lecturer: "DR whwite",
   period: "2026"}
 ];
 
function App() {
  
  const [selectedCourse, setselectedCourse] = useState(null);

 return (
  <>
  <h1>My Courses List With Info</h1>
  
<ul>
  {courses.map(course => (
    <li key={course.id}
    onClick={() => setselectedCourse(course)}
    style={{
      cursor: "pointer",
      fontWeight: course === selectedCourse ? "bold" : "normal"
    }}>
      {course.id}-{course.title}
    </li>
  ))}
</ul>
    <CourseDetail course={selectedCourse}/>
</>
 );
}

export default App
