/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useState } from 'react'
import config from './../../config/config'

const AddTodo = () => {
  const [todo, setTodo] = useState('')

  const handleChange = e => {
    const value = e.target.value
    setTodo(value)
  }

  const storeTodo = () => {
    let todosList = localStorage.getItem(config.localStorageKey) || []
    console.log(typeof todosList)
    todosList.push(todo)
    localStorage.setItem(config.localStorageKey, todosList)
    setTodo('')
  }

  return (
    <div
      sx={{
        maxWidth: 650,
        mx: 'auto',
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'flex-start'
      }}>
      <div>
        {/* <input value={todo} type="text" onChange={event => onChange(event)} /> */}
        <input sx={{ color: 'text' }} value={todo} type="text" onChange={e => handleChange(e)} />
      </div>
      <button onClick={() => storeTodo()}>Add</button>
    </div>
  )
}

export default AddTodo
