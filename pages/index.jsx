import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import Todo from '../components/Todo'
import Garden from '../components/Garden'
import loadFirestore from '../lib/db'
import PropTypes from 'prop-types'
import { get } from 'lodash/object'
import Link from 'next/link'
import Router from 'next/router'

const Home = props => {
  const { AuthUserInfo, data } = props
  const AuthUser = get(AuthUserInfo, 'AuthUser', null)

  const [todo, setTodo] = useState(null)
  const [completed, setCompleted] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      if (AuthUser) {
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
    }
    fetchData()
  }, [])
  return (
    <Layout>
      <p>Hi there!</p>
      {!AuthUser ? (
        <p>
          You are not signed in.{' '}
          <Link href={'/auth'}>
            <a>Sign in</a>
          </Link>
        </p>
      ) : (
        <div>
          <p>You're signed in. Email: {AuthUser.email}</p>
          <p
            style={{
              display: 'inlinelock',
              color: 'blue',
              textDecoration: 'underline',
              cursor: 'pointer'
            }}
            onClick={async () => {
              try {
                await logout()
                Router.push('/')
              } catch (e) {
                console.error(e)
              }
            }}>
            Log out
          </p>
        </div>
      )}
      {AuthUser ? (
        <div>
          <Garden todoCount={todo} completed={completed} />
          <Todo />
        </div>
      ) : (
        ``
      )}
    </Layout>
  )
}

// export default Home

// Use `withAuthUser` to get the authed user server-side, which
// disables static rendering.
// Use `withAuthUserInfo` to include the authed user as a prop
// to your component.
export default withAuthUser(withAuthUserInfo(Home))
