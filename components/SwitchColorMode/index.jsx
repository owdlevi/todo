/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useColorMode, useThemeUI } from 'theme-ui'

const switchColorMode = () => {
  const [colorMode, setColorMode] = useColorMode()
  const themeColors = useThemeUI().theme.colors
  return (
    <div
      sx={{
        display: 'flex',
        alignItems: 'center',
        mr: '20px'
      }}>
      {Object.keys(themeColors.modes).map((key) => {
        return (
          <div>
            <span
              onClick={(e) => {
                setColorMode(key)
              }}
              sx={{
                display: 'inline-block',
                width: '15px',
                height: '15px',
                borderRadius: '50%',
                border: 0,
                mr: '10px',
                cursor: 'pointer',
                backgroundColor: themeColors.modes[key].background,
                boxShadow: key === colorMode ? '0 1px 2px 0 rgba(60,64,67,0.3), 0 2px 6px 2px rgba(60,64,67,0.45)' : ''
              }}></span>
          </div>
        )
      })}
    </div>
  )
}

export default switchColorMode
