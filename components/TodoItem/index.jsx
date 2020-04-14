/** @jsx jsx */
import { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { jsx } from 'theme-ui'
import loadFirestore from '../../lib/db'

const TodoItem = ({ todo, userID, bgcolor }) => {
  const [isActive, setIsActive] = useState(false)
  const [isPressed, setPressed] = useState(false)

  const showDelete = useSpring({ transform: isActive ? `translateX(0)` : `translateX(44px)` })
  const pressedStyle = useSpring({ transform: isPressed ? `scale(0.95)` : `scale(1)` })

  const handleMouse = (status) => {
    console.log(status)
    setPressed(status)
  }
  const todoActive = (active) => {
    setIsActive(active)
  }

  const removeTodo = async () => {
    const firebase = await loadFirestore()
    firebase.firestore().collection('todo').doc(userID).collection('todos').doc(todo.id).delete()
  }

  const updateTodo = async () => {
    const firebase = await loadFirestore()
    const updatedTodo = { done: !todo.done, todo: todo.todo }
    firebase
      .firestore()
      .collection('todo')
      .doc(userID)
      .collection('todos')
      .doc(todo.id)
      .set(updatedTodo)
      .catch((error) => console.error(error))
  }

  const checkboxAfter = todo.done
    ? {
        position: 'absolute',
        content: '""',
        top: '30%',
        left: '50%',
        height: '3px',
        width: '6px',
        border: 'solid #fc6c48',
        borderWidth: '0 0 2px 2px',
        transformOrigin: 'center center',
        transform: 'rotate(-45deg) translate(-50%, -50%)'
      }
    : {}
  return (
    <animated.div
      onMouseEnter={() => todoActive(true)}
      onMouseLeave={() => {
        todoActive(false)
        handleMouse(false)
      }}
      onMouseDown={() => handleMouse(true)}
      onMouseUp={() => handleMouse(false)}
      style={pressedStyle}
      sx={{
        position: 'relative',
        margin: '10px 0',
        background: '#e0e8f5',
        borderRadius: '3px',
        paddingLeft: '38px',
        paddingTop: '12px',
        paddingBottom: '12px',
        paddingRight: '49px',
        overflow: 'hidden'
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
        onClick={() => updateTodo()}
        onMouseDown={() => handleMouse(true)}
        onMouseUp={() => handleMouse(false)}
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
          backgroundColor: '#fff',
          '&:after': checkboxAfter
        }}
        htmlFor={`item_${todo.id}`}></label>
      <span
        onMouseDown={() => handleMouse(true)}
        onMouseUp={() => handleMouse(false)}
        sx={{
          textDecoration: todo.done ? 'line-through' : ''
        }}>
        {todo.todo}
      </span>
      <animated.span
        style={showDelete}
        onClick={() => removeTodo()}
        className="delete"
        sx={{
          position: 'absolute',
          height: '100%',
          top: 0,
          right: 0,
          cursor: 'pointer',
          opacity: 1,
          width: '44px',
          backgroundColor: '#f56468',
          color: '#fff',
          zIndex: 1,
          backgroundImage: 'url("https://nourabusoud.github.io/vue-todo-list/images/trash.svg")',
          backgroundPosition: ' center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '24px'
        }}></animated.span>
    </animated.div>
  )
}

export default TodoItem
