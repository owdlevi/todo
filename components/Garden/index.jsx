/** @jsx jsx */
import { useState, useEffect } from 'react'
import { jsx } from 'theme-ui'
import loadFirestore from '../../lib/db'
import Sun from './Sun'
import Flower from './Flower'

const Garden = ({ AuthUserID }) => {
  const [todo, setTodo] = useState(null)
  const [completed, setCompleted] = useState(null)

  const show = completed > 2 ? true : false
  useEffect(() => {
    const fetchData = async () => {
      const firebase = await loadFirestore()
      const query = firebase.firestore().collection('todo').doc(AuthUserID).collection('todos').limit(12)

      query.onSnapshot((snapshot) => {
        let data = []
        if (snapshot.size) {
          snapshot.forEach((doc) => {
            const document = { id: doc.id, ...doc.data() }
            data.push(document)
          })
          const completed = data.filter((todo) => todo.done)

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
    <div
      sx={{
        pointerEvents: 'none',
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%'
      }}>
      <div
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
          overflow: 'hidden'
        }}>
        <div
          sx={{
            width: '10rem',
            position: 'absolute',
            top: '40px',
            right: '40px'
          }}>
          <Sun completed={completed} />
        </div>
        <div
          sx={{
            width: '7.5rem',
            position: 'absolute',
            bottom: '40px',
            right: '40px'
          }}>
          <Flower show={show} />
        </div>
      </div>
    </div>
  )
}

export default Garden
