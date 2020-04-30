/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useThemeUI } from 'theme-ui'
import Link from 'next/link'

const Logo = () => {
  const themeColors = useThemeUI().theme.colors
  return (
    <Link href="/">
      <a
        sx={{
          variant: 'styles.navlink',
          fontSize: 5,
          color: 'primary',
          py: 2
        }}>
        <svg
          viewBox="0 0 98 42"
          fill="none"
          sx={{
            height: '100%'
          }}>
          <path
            d="M45.5 14.8h-5.2V29h-3.5V14.8h-5.2v-2.9h14v2.9zM44 22.5c0-1.2.2-2.3.7-3.3.5-1 1.2-1.8 2-2.3 1-.5 2-.8 3.3-.8 1.7 0 3 .5 4.2 1.6 1 1 1.6 2.4 1.8 4.2v.9c0 2-.6 3.5-1.6 4.7a5.7 5.7 0 01-4.4 1.7c-1.8 0-3.3-.6-4.4-1.7a6.8 6.8 0 01-1.6-4.8v-.2zm3.4.3c0 1.2.2 2.1.6 2.8.5.6 1.1.9 2 .9.8 0 1.5-.3 2-1 .4-.6.6-1.6.6-3 0-1.1-.2-2-.7-2.7-.4-.6-1-1-2-1-.8 0-1.4.4-1.9 1-.4.6-.6 1.6-.6 3zM63.6 29V12h5.2c1.5 0 2.8.3 4 1a7 7 0 012.8 2.8c.7 1.3 1 2.7 1 4.3v.8c0 1.6-.3 3-1 4.2A7 7 0 0173 28a8 8 0 01-4 1h-5.3zM67 14.8v11.4h1.7c1.3 0 2.4-.5 3.1-1.4A6 6 0 0073 21v-1c0-1.7-.3-3-1-3.9-.8-.9-1.8-1.3-3.2-1.3h-1.7zm11 7.7c0-1.2.2-2.3.7-3.3.5-1 1.2-1.8 2-2.3 1-.5 2-.8 3.2-.8 1.8 0 3.2.5 4.2 1.6 1.1 1 1.7 2.4 1.8 4.2v.9c0 2-.5 3.5-1.6 4.7a5.7 5.7 0 01-4.3 1.7c-1.9 0-3.3-.6-4.4-1.7a6.8 6.8 0 01-1.6-4.8v-.2zm3.3.3c0 1.2.3 2.1.7 2.8.5.6 1.1.9 2 .9.8 0 1.4-.3 1.9-1 .5-.6.7-1.6.7-3 0-1.1-.2-2-.7-2.7-.5-.6-1.1-1-2-1-.8 0-1.4.4-1.9 1-.4.6-.7 1.6-.7 3z"
            fill={themeColors.background}
          />
          <path d="M21 31H1c-.6 0-1-.4-1-1V10c0-.6.4-1 1-1h20c.6 0 1 .4 1 1v20c0 .6-.4 1-1 1z" fill={themeColors.logo} />
          <path d="M22 15.9L14.8 23l-4.6-4.5c-.6-.6-1.4-.5-2 0-.5.5-.5 1.4 0 1.9l5.5 5.4c.5.5 1.4.5 1.9 0l6.3-6.1v-3.8h.1z" fill="white" />
        </svg>
      </a>
    </Link>
  )
}

export default Logo
