import React from 'react'
import Member from './Member'
import "./Teams.css"
const Team = (props) => {
  return (
    <div className='team' style={{
        border: `3px solid ${props.color}` 
      }}>
        <div className="name">{props.name}</div>
        <p className="description">{props.description}</p>
        {props.members.map(({id,name,role,avatar,skills})=>(
            <Member key={id} name={name} role={role} avatar={avatar} skills={skills}/>
        ))}
    </div>
  )
}

export default Team