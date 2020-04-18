/** @jsx jsx */
import { jsx } from 'theme-ui'

import Garden from '../Garden'
import AddTodo from './AddTodo'
import TodoList from '../TodoList'

const Todo = ({ AuthUser, localUserID }) => {
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
      {AuthUser && <Garden AuthUserID={AuthUser.id} />}
      <AddTodo AuthUser={AuthUser} localUserID={localUserID} />
      <TodoList AuthUser={AuthUser} localUserID={localUserID} />
    </div>
  )
}

export default Todo
