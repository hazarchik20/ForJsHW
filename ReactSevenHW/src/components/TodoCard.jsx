import React from 'react'
import "./TodoCard.scss"
import clsx from 'clsx'
const TodoCard = ({todo, onDelete, onToggle, onChangePriority}) => {
    const  {text, compleated, priority } = todo;
  return (
    <div className={clsx('card-wrapper',{
        low:priority==="low",
        medium:priority==="medium",
        high:priority==="high"
    })}>
        <input type="checkbox" checked={compleated} onChange={()=>onToggle(todo.id)}/>
        <p className={clsx({
            hideText: compleated
        })}>{text}</p>
        <select value={priority} disabled={compleated} name="priority" id="priority" onChange={(e)=> !compleated && onChangePriority(todo.id ,e.target.value)}>
            <option value="high">високий</option>
            <option value="medium">середній</option>
            <option value="low">низький</option>
        </select>
        <button className='delete-btn' onClick={()=>onDelete(todo.id)}>&times;</button>
    </div>
  )
}

export default TodoCard