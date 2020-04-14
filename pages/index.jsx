import React from 'react'
import Layout from '../components/Layout'
import Todo from '../components/Todo'
import Garden from '../components/Garden'

import PropTypes from 'prop-types'
import { get } from 'lodash/object'
import withAuthUser from '../utils/pageWrappers/withAuthUser'
import withAuthUserInfo from '../utils/pageWrappers/withAuthUserInfo'

const Index = (props) => {
  const { AuthUserInfo, data } = props
  const AuthUser = get(AuthUserInfo, 'AuthUser', null)

  return (
    <Layout>
      {AuthUser ? (
        <div>
          <Garden AuthUserID={AuthUser.id} />
          <Todo AuthUserID={AuthUser.id} />
        </div>
      ) : (
        ``
      )}
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
