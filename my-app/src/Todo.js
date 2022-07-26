import React from 'react'

export default function Todo({ todo }) {
  return (
    <div>
        <label>
          <input type="checkbox" checked={todo.complete} onChange={e => todo.completed = e.target.checked} />
          {todo.name}
        </label>
    </div>
  )
}
