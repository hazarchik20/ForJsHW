import React from 'react'
import "./CoursesCard.scss"
import clsx from 'clsx';
const CoursesCard = ({courseInfo}) => {
const{ 
    title,
    level,
    isFree,
    isNew,
    duration
    } = courseInfo;

  return (
    <div>
        <div className={clsx("course-card", isFree? "free-border": isNew? "new-border" : "nothing-border",
          {
            beginner: level==="beginner",
            intermediate: level==="intermediate",
            advanced: level==="advanced",
          })}>
            
        <div className={"badges"}>
            {isFree && <span className="badge free">FREE</span>}
            {isNew && <span className="badge new">NEW</span>}
        </div>

        <h3 className="title">{title}</h3>

        <p className="level">Level: {level}</p>
        <p className="duration">Duration: {duration}</p>
        </div>
    </div>
  )
}

export default CoursesCard