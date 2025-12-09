import React from 'react'

const Member = ({ name, role, avatar, skills }) => {
  return (
    <div className="member">
      <img className="member-avatar" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgpnmY-O9iz09Jka-vGvK2Lv-U-pL3H18CfA&s"} alt={""} />
      <div className="info">
        
        <h2 className="member-name">{name}</h2>
        <p className="member-role">{role}</p>

        {skills && skills.length > 0 && (
          <ul className="skills">
            {skills.map((s, index) => (
              <li key={index}>{s}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Member