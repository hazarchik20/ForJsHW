import React from 'react'
import "./Task1.css"
const Sсhedules = ({date,children}) => {
  console.log(date);
  
  const dayArr =["Неділя","Понеділок","Вівторок","Середа","Четвер","П’ятниця","Субота"];
  const monthsArr = ["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"];
  return (
    <div className="main-wrapper card-shadow"> 
      <h2 className="main-title">Розклад на {dayArr[date.getDay()]}</h2>
      <p className="date-text">{`${date.getDate()} ${monthsArr[date.getMonth()]} ${date.getFullYear()}`}</p>
      <div className="schedules-list">
        {children}
      </div>
    </div>
  );
};

export default Sсhedules