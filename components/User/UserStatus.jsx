/** @jsx jsx */
import { useState, useEffect } from 'react'
import { jsx } from 'theme-ui'
import { get } from 'lodash/object'
import { useFirebaseAuth, useAuthUserInfo } from '../../utils/auth/hooks'
import UserAvatar from './UserAvatar'
import LoginForm from './LoginForm'

const UserStatus = (props) => {
  const [showLogin, setShowLogin] = useState(false)

  const { initializing, user } = useFirebaseAuth()
  const AuthUser = get(useAuthUserInfo(), 'AuthUser', null)
  const showModal = () => {
    setShowLogin(!showLogin)
  }
  return user ? (
    <UserAvatar user={user} />
  ) : (
    <div>
      <button onClick={showModal} sx={{ variant: 'styles.linkbutton' }}>
        Sign in
      </button>
      <LoginForm showLogin={showLogin} />
    </div>
  )
}
export default UserStatus
