/** @jsx jsx */
import { jsx } from 'theme-ui'

const TodoItem = ({ todo }) => {
  return (
    <div
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
      {todo.todo}
    </div>
  )
}

export default TodoItem
