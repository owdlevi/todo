import React, { useState, useEffect } from 'react'
import { get } from 'lodash/object'
import withAuthUser from '../utils/pageWrappers/withAuthUser'
import withAuthUserInfo from '../utils/pageWrappers/withAuthUserInfo'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'

import Layout from '../components/Layout'
import Todo from '../components/Todo'

const localStorageKey = 'todoUUID'

const Index = (props) => {
  const [localUserID, setLocalUserID] = useState('')
  const { AuthUserInfo, data } = props
  const AuthUser = get(AuthUserInfo, 'AuthUser', null)

  useEffect(() => {
    if (!AuthUser && typeof window !== 'undefined') {
      const localUUID = localStorage.getItem(localStorageKey) || localStorage.setItem(localStorageKey, uuidv4())
      setLocalUserID(localUUID)
    }
  }, [])

  return (
    <Layout>
      <Todo AuthUser={AuthUser} localUserID={localUserID} />
    </Layout>
  )
}

Index.displayName = 'Index'

Index.propTypes = {
  AuthUserInfo: PropTypes.shape({
    AuthUser: PropTypes.shape({
      id: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      emailVerified: PropTypes.bool.isRequired
    }),
    token: PropTypes.string
  })
}

Index.defaultProps = {
  AuthUserInfo: null
}

// Use `withAuthUser` to get the authed user server-side, which
// disables static rendering.
// Use `withAuthUserInfo` to include the authed user as a prop
// to your component.
export default withAuthUser(withAuthUserInfo(Index))
