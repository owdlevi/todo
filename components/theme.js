export default {
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace'
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  colors: {
    text: '#000',
    background: '#30336B',
    todobg: '#f4f7fc',
    primary: '#E55039',
    primaryText: '#FFFFFF',
    modes: {
      dark: {
        text: '#000',
        background: 'salmon',
        todobg: '#f4f7fc',
        primary: '#E55039',
        primaryText: '#FFFFFF'
      }
    }
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading'
    }
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body'
    },
    header: {
      width: '100%',
      fontSize: '14px',
      height: '64px',
      padding: '0 24px',
      boxShadow: '0 1px 2px 0 rgba(60,64,67,0.3), 0 2px 6px 2px rgba(60,64,67,0.15)',
      background: 'white',
      display: 'flex',
      zIndex: 100,
      // position: 'fixed',
      top: 0
    },
    navlink: {
      color: 'color.text'
    },
    linkbutton: {
      fontWeight: '500',
      cursor: 'pointer',
      px: 3,
      py: 2,
      borderRadius: '3px',
      bg: 'primary',
      color: 'primaryText',
      display: 'inline-block',
      fontWeight: '500',
      fontSize: '15px',
      lineHeight: '18px',
      border: 0
    },
    button: {
      color: 'color.text',
      background: 'color.background'
    },
    input: {
      lineHeight: '2em',
      borderRadius: '3px',
      border: 0,
      display: 'inline-block',
      margin: '15px 0',
      padding: '0.2em 1em',
      fontSize: '1em'
    },
    h1: {
      variant: 'text.heading',
      fontSize: 5
    },
    h2: {
      variant: 'text.heading',
      fontSize: 4
    },
    h3: {
      variant: 'text.heading',
      fontSize: 3
    },
    h4: {
      variant: 'text.heading',
      fontSize: 2
    },
    h5: {
      variant: 'text.heading',
      fontSize: 1
    },
    h6: {
      variant: 'text.heading',
      fontSize: 0
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit'
      }
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit'
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    }
  }
}
