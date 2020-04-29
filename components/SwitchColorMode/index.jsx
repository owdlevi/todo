/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useColorMode } from 'theme-ui'

const switchColorMode = () => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <button
      sx={{
        variant: 'styles.button',
        maxHeight: '32px',
        mr: '20px'
      }}
      onClick={(e) => {
        setColorMode(colorMode === 'default' ? 'dark' : 'default')
      }}>
      Change Color
    </button>
  )
}

export default switchColorMode
