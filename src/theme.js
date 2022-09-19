import { createTheme } from '@mui/material'

export default createTheme({
  spacing: 8,
  palette: {
    primary: {
      main: '#DB3022'
    },
    error: {
      main: '#D84242'
    },
    success: {
      main: '#2AA952'
    },
    info: {
      main: '#4290D8'
    },
    warning: {
      main: '#FFBA49'
    },
    gray: {
      main: '#8E8E93'
    }
  },
  shadows: {
    soft: '0px 6px 40px rgba(173, 173, 173, 0.25)'
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          borderRadius: 99,
          '&:hover': {
            boxShadow: 'none'
          }
        }
      }
    }
  }
})
