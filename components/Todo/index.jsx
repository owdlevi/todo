/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import AddTodo from './AddTodo'
import TodoList from '../TodoList'

const Todo = () => {
  return (
    <div
      sx={{
        width: '400px',
        maxWidth: '100%',
        m: '20px auto 40px',
        border: '1px solid #eee',
        borderRadius: '4px',
        p: '40px 20px',
        boxShadow: '0 0 15px 0 rgba(0,0,0,0.05)',
        backgroundColor: 'todobg',
        overflow: 'hidden',
        position: 'relative'
      }}>
      <AddTodo />
      <TodoList />
    </div>
  )
}

export default Todo
