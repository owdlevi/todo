/** @jsx jsx */
import { useState, useEffect, useRef } from 'react'
import { jsx } from 'theme-ui'
import clamp from 'lodash/clamp'
import swap from 'lodash-move'
import { useDrag } from 'react-use-gesture'
import { useSprings, animated, interpolate } from 'react-spring'
import TodoItem from '../TodoItem'
import loadFirestore from '../../lib/db'
import { get } from 'lodash/object'
import { useAuthUserInfo } from '../../utils/auth/hooks'

// Returns fitting styles for dragged/idle items
const fn = (order, down, originalIndex, curIndex, y) => (index) =>
  down && index === originalIndex
    ? { y: curIndex * 66 + y, scale: 1.1, zIndex: '1', shadow: 15, immediate: (n) => n === 'y' || n === 'zIndex' }
    : { y: order.indexOf(index) * 66, scale: 1, zIndex: '0', shadow: 1, immediate: false }

function DraggableList({ todo, userID }) {
  const order = useRef(todo.map((_, index) => index)) // Store indicies as a local ref, this represents the item order
  const [springs, setSprings] = useSprings(todo.length, fn(order.current)) // Create springs, each corresponds to an item, controlling its transform, scale, etc.
  const bind = useDrag(({ args: [originalIndex], down, movement: [, y] }) => {
    const curIndex = order.current.indexOf(originalIndex)
    const curRow = clamp(Math.round((curIndex * 66 + y) / 66), 0, todo.length - 1)
    const newOrder = swap(order.current, curIndex, curRow)
    setSprings(fn(newOrder, down, originalIndex, curIndex, y)) // Feed springs new style data, they'll animate the view without causing a single render
    if (!down) order.current = newOrder
  })
  console.log(order)
  return (
    todo &&
    todo.length && (
      <div
        sx={{
          position: 'relative',
          width: '320px',
          height: '240px'
        }}
        style={{ height: todo.length * 66 }}>
        {springs.map(({ zIndex, shadow, y, scale }, i) => (
          <animated.div
            {...bind(i)}
            key={i}
            style={{
              zIndex,
              boxShadow: shadow.to((s) => `rgba(0, 0, 0, 0.15) 0px ${s}px ${2 * s}px 0px`),
              y,
              scale
            }}>
            <TodoItem key={todo[i].id} todo={todo[i]} userID={userID} />
          </animated.div>
        ))}
      </div>
    )
  )
  // return <div>{todo && todo.map((item) => <TodoItem key={item.id} todo={item} userID={AuthUser.id} />)}</div>
}
const TodoList = () => {
  const AuthUser = get(useAuthUserInfo(), 'AuthUser', null)

  const [todo, setTodo] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const firebase = await loadFirestore()
      const query = firebase.firestore().collection('todo').doc(AuthUser.id).collection('todos').limit(12)

      query.onSnapshot((snapshot) => {
        let data = []
        if (snapshot.size) {
          snapshot.forEach((doc) => {
            const document = { id: doc.id, ...doc.data() }
            data.push(document)
          })
          setTodo(data)
        } else {
          setTodo(data)
        }
      })
    }
    fetchData()
  }, [])

  return todo && todo.length && <DraggableList todo={todo} userID={AuthUser.id} />
}

export default TodoList
