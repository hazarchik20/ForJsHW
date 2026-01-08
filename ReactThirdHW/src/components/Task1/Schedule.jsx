import React from 'react'
import "./Task1.css"
const Sсhedule = ({p}) => {
  const {time, duration, subject, classroom, teacher, color} = p
  console.log(color);
  
 return (
<div className="schedule-item">

      <div className="timeline-marker-wrapper">
        <div className="timeline-line" style={{backgroundColor: color}}></div>
        
      </div>
      
      <div className="time-info">
        <h4 className="time">{time}</h4>
        <p className="duration">{duration}</p>
      </div>
      
      
      <div className="subject-info">
        <h3 className="subject-title">{subject}</h3>
        <p className="classroom">{classroom}</p>
        {teacher && (<p className="teacher">Викладач:{teacher}</p>)}
      </div>
    </div>
  );
};

export default Sсhedule