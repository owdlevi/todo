/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useState } from 'react'
import loadFirestore from '../../lib/db'

const AddTodo = () => {
  const [todo, setTodo] = useState('')

  const handleChange = e => {
    const value = e.target.value
    setTodo(value)
  }

  const storeTodo = async () => {
    const firebase = await loadFirestore()
    // These lines are new
    if (todo.length > 5) {
      const item = {
        status: false,
        todo
      }
      firebase
        .firestore()
        .collection('data')
        .doc()
        .set(item)
        .then(() => setTodo(''))
        .catch(error => console.error(error))
    }
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
      {/* <input value={todo} type="text" onChange={event => onChange(event)} /> */}
      <input
        sx={{
          variant: 'styles.input',
          border: '1px solid #ddd',
          minWidth: '80%',
          transition: 'all ease-in 0.25s'
        }}
        value={todo}
        type="text"
        onChange={e => handleChange(e)}
      />
      <button
        onClick={() => storeTodo()}
        sx={{
          variant: 'styles.input',
          border: '1px solid #ddd',
          backgroundColor: 'background',
          color: 'text',
          ml: 20,
          outline: 0,
          cursor: 'pointer'
        }}>
        +
      </button>
    </div>
  )
}

export default AddTodo
