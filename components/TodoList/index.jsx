/** @jsx jsx */
import { useState, useEffect } from 'react'
import { jsx } from 'theme-ui'
import TodoItem from '../TodoItem'
import loadFirestore from '../../lib/db'
import { get } from 'lodash/object'
import { useAuthUserInfo } from '../../utils/auth/hooks'

const TodoList = ({ localUserID }) => {
  const AuthUser = get(useAuthUserInfo(), 'AuthUser', null)
  const todoCollection = AuthUser && AuthUser.id ? 'todo' : 'todo_noaccount'
  console.log('todoCollection', todoCollection)
  // const userID = AuthUser && AuthUser.id ? AuthUser.id : localUserID

  const [todo, setTodo] = useState([])
  const [userID, setUserID] = useState(AuthUser ? AuthUser.id : localUserID)
  useEffect(() => {
    setUserID(AuthUser ? AuthUser.id : localUserID)
    console.log('AuthUser', AuthUser)
  })
  useEffect(() => {
    const fetchData = async () => {
      const firebase = await loadFirestore()
      console.log('UserID useeffect', userID)
      if (userID) {
        const query = firebase.firestore().collection(todoCollection).doc(userID).collection('todos').orderBy('done').limit(12)
        console.log('query', query)
        query.onSnapshot((snapshot) => {
          let data = []
          if (snapshot.size) {
            snapshot.forEach((doc) => {
              const document = { id: doc.id, ...doc.data() }
              data.push(document)
              console.log(document)
            })
            setTodo(data)
          }
        })
      }
    }
    fetchData()
  }, [userID])

  const removeTodo = async (todo) => {
    const firebase = await loadFirestore()
    firebase.firestore().collection(todoCollection).doc(userID).collection('todos').doc(todo.id).delete()
  }

  const updateTodo = async (todo) => {
    const firebase = await loadFirestore()
    const updatedTodo = { done: !todo.done, todo: todo.todo }

    firebase
      .firestore()
      .collection(todoCollection)
      .doc(userID)
      .collection('todos')
      .doc(todo.id)
      .set(updatedTodo)
      .catch((error) => console.error(error))
  }

  return <div>{todo && todo.map((item) => <TodoItem key={item.id} todo={item} removeTodo={removeTodo} updateTodo={updateTodo} />)}</div>
}

export default TodoList
