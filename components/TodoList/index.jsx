import React, { useState, useEffect } from 'react'
import TodoItem from '../TodoItem'
import loadFirestore from '../../lib/db'
import { get } from 'lodash/object'
import { useAuthUserInfo } from '../../utils/auth/hooks'

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

  return <div>{todo && todo.map((item) => <TodoItem key={item.id} todo={item} userID={AuthUser.id} />)}</div>
}

export default TodoList
