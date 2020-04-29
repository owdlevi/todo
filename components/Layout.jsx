/** @jsx jsx */
import { ThemeProvider, jsx } from 'theme-ui'
import Link from 'next/link'
import Head from 'next/head'
import theme from './theme'
import UserStatus from './User/UserStatus'
import SwitchColorMode from './SwitchColorMode'
import Logo from './Logo'
// import LoginForm from './User/LoginForm'
import { get } from 'lodash/object'
import { useFirebaseAuth, useAuthUserInfo } from '../utils/auth/hooks'

const Layout = ({ children, title = 'To Do with a twist!' }) => {
  const { initializing, user } = useFirebaseAuth()
  const AuthUser = get(useAuthUserInfo(), 'AuthUser', null)
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div
        sx={{
          fontSize: '15px',
          fontFamily: "'Open Sans', sans-serif",
          backgroundColor: 'background',
          margin: 0,
          minHeight: '100vh',
          position: 'relative',
          overflow: 'hidden',
          zIndex: 1
        }}>
        <header
          sx={{
            variant: 'styles.header'
          }}>
          <Logo />
          <div sx={{ mx: 'auto', display: 'flex', alignItems: 'center' }} />
          <div
            sx={{
              ml: 3,
              py: 2,
              display: 'flex',
              alignItems: 'center'
            }}>
            <SwitchColorMode />
            <UserStatus />
          </div>
        </header>
        <div
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 'calc(100vh - 64px)',
            position: 'relative',
            zIndex: 2
          }}>
          {children}
        </div>
        {/* {!user && <LoginForm />} */}
      </div>
    </ThemeProvider>
  )
}

export default Layout
