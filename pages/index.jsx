import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import Todo from '../components/Todo'
import Garden from '../components/Garden'
import loadFirestore from '../lib/db'

const Home = () => {
  const [todo, setTodo] = useState(null)
  const [completed, setCompleted] = useState(null)

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
          const completed = data.filter(todo => todo.done)

          setTodo(data.length)
          setCompleted(completed.length)
        } else {
          setTodo(data.length)
        }
      })
    }
    fetchData()
  }, [])
  return (
    <Layout>
      <Garden todoCount={todo} completed={completed} />
      <Todo />
    </Layout>
  )
}

export default Home
