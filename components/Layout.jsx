/** @jsx jsx */
import { ThemeProvider, jsx, Container } from 'theme-ui'
import Link from 'next/link'
import Head from 'next/head'
import theme from './theme'
import UserStatus from './User/UserStatus'
import SwitchColorMode from './SwitchColorMode'

const Layout = ({ children, title = 'This is the default title' }) => (
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
        // backgroundImage: 'linear-gradient(#89cff0 0%, #ef5081 100%)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        margin: 0,
        minHeight: '100vh',
        position: 'relative'
      }}>
      <header
        sx={{
          variant: 'styles.header'
        }}>
        <Container
          p={4}
          bg="muted"
          sx={{
            maxWidth: '100%',
            mx: 'auto',
            display: 'flex',
            alignItems: 'baseline'
          }}>
          <Link href="/">
            <a
              sx={{
                variant: 'styles.navlink',
                fontSize: 5,
                color: 'primary',
                py: 2
              }}>
              To Do
            </a>
          </Link>
          <div sx={{ mx: 'auto' }} />
          {/* <SwitchColorMode
            sx={{
              variant: 'styles.button',
              ml: 3,
              py: 2
            }}
          /> */}
          <div
            sx={{
              ml: 3,
              py: 2
            }}>
            <UserStatus />
          </div>
        </Container>
      </header>
      <Container>{children}</Container>
    </div>
  </ThemeProvider>
)

export default Layout
