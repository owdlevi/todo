/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import AddTodo from './AddTodo'

const Todo = () => {
  return (
    <div
      sx={{
        maxWidth: 650,
        mx: 'auto',
        display: 'flex',
        alignItems: 'baseline',
        flexFlow: 'column'
      }}>
      <Styled.h1>Fun Todo</Styled.h1>
      <AddTodo />
    </div>
  )
}

export default Todo
