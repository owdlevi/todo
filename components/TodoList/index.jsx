import React, { useState, useEffect } from 'react'
import TodoItem from '../TodoItem'
import loadFirestore from '../../lib/db'

const TodoList = () => {
  const [todo, setTodo] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const firebase = await loadFirestore()
      const query = firebase
        .firestore()
        .collection('data')
        .limit(12)

      query.onSnapshot(snapshot => {
        let data = []
        if (snapshot.size) {
          snapshot.forEach(doc => {
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

  return <div>{todo && todo.map(item => <TodoItem key={item.id} todo={item} />)}</div>
}

export default TodoList
