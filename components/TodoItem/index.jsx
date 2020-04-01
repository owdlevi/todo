/** @jsx jsx */
import { jsx } from 'theme-ui'
import loadFirestore from '../../lib/db'

const TodoItem = ({ todo }) => {
  const removeTodo = async () => {
    const firebase = await loadFirestore()
    firebase
      .firestore()
      .collection('data')
      .doc(todo.id)
      .delete()
  }
  const updateTodo = async () => {
    const firebase = await loadFirestore()
    const updatedTodo = { done: !todo.done, todo: todo.todo }

    firebase
      .firestore()
      .collection('data')
      .doc(todo.id)
      .set(updatedTodo)
      .catch(error => console.error(error))
  }
  return (
    <div
      onClick={() => updateTodo()}
      sx={{
        position: 'relative',
        margin: '10px 0',
        background: '#e0e8f5',
        borderRadius: '3px',
        paddingLeft: '38px',
        paddingTop: '12px',
        paddingBottom: '12px',
        paddingRight: '49px',
        overflow: 'hidden',
        hover: {}
      }}>
      <input
        sx={{
          position: 'absolute',
          opacity: '0',
          display: 'none'
        }}
        className="todo-checkbox"
        id={`item_${todo.id}`}
        type="checkbox"
      />
      <label
        sx={{
          position: 'absolute',
          cursor: 'pointer',
          left: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '22px',
          height: '22px',
          borderRadius: '2px',
          border: '1px solid #cfdcec',
          backgroundColor: '#fff'
        }}
        htmlFor={`item_${todo.id}`}></label>
      <span
        sx={{
          textDecoration: todo.done ? 'line-through' : ''
        }}>
        {todo.todo}
      </span>
      <span
        onClick={() => removeTodo()}
        className="delete"
        sx={{
          position: 'absolute',
          height: '100%',
          top: '50%',
          right: 0,
          transform: 'translateY(-50%)',
          cursor: 'pointer',
          opacity: 1,
          width: '44px',
          backgroundColor: '#f56468',
          color: '#fff',
          transition: 'all ease-in 0.25s',
          '::after': {
            position: 'absolute',
            content: "''",
            width: '16px',
            height: '16px',
            top: '50%',
            left: '50%',
            backgroundImage: 'url("https://nourabusoud.github.io/vue-todo-list/images/trash.svg")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            transform: 'translate(-50%, -50%) scale(1)',
            transition: 'all ease-in 0.25s'
          }
        }}></span>
    </div>
  )
}

export default TodoItem
