import React from 'react'
import { teams } from "../../mocks/data-arrays"
import Team from './Team'
import "./Teams.css"

const TeamList = () => {
  return (
    <div className='team-list'>
        {teams.map(({ id, name, description,color,members }) => (
            <Team key={id} name={name} description={description} color={color} members={members}  />
        ))}
    </div>
  )
}

export default TeamList