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
    if (todo) {
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
      <div>
        {/* <input value={todo} type="text" onChange={event => onChange(event)} /> */}
        <input sx={{ color: 'text' }} value={todo} type="text" onChange={e => handleChange(e)} />
      </div>
      <button onClick={() => storeTodo()}>Add</button>
    </div>
  )
}

export default AddTodo
