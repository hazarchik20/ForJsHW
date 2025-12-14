import { useState } from 'react'
import './App.scss'
import CoursesList from './components/CoursesList'
import {courses} from "./mocks/coursesData"
import CoursesCard from './components/CoursesCard'
import Header from './components/Header'

function App() {
  const [level, setLevel] = useState('all')
  const [isOnlyFree, setIsOnlyFree] = useState(false)
  const [isOnlyNew, setIsOnlyNew] = useState(false)

  const filteredCourses = courses.filter((course) => {
    const levelMatch =
      level === "all" || course.level === level;
    const freeMatch =
      !isOnlyFree || course.isFree;
    const newMatch =
      !isOnlyNew || course.isNew;
    return levelMatch && freeMatch && newMatch;
  });

  return (
    <>
    <Header setLevel={setLevel} setIsOnlyFree={setIsOnlyFree} setIsOnlyNew={setIsOnlyNew}/>
     <CoursesList>{
        filteredCourses.map((c)=>(
          <CoursesCard key={c.id} courseInfo ={c} />)
        )
      }
     </CoursesList>
    </>
  )
}

export default App
