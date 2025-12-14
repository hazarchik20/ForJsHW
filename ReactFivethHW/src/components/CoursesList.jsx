import React from 'react'

const CoursesList = ({children}) => {
  return (
    <div style={{
        margin:'20px auto',
        padding:'20px',
        display:"flex",
        flexWrap:"wrap",
        gap:"30px",
        maxWidth :"80%",
        boxShadow:"0 8px 10px rgba(0, 0, 0, 0.2)",
        borderRadius:"20px",
        justifyContent: "center"
    }}>
        {children}
    </div>
  )
}

export default CoursesList