import { useState } from 'react'
import { Box, IconButton } from '@mui/material'
import { ShoppingCartOutlined, NotificationsOutlined, EmailOutlined } from '@mui/icons-material'
import BelyButton from '../UI/BelyButton'

export default function MenuBar() {
  const [authenticated, setAuthenticated] = useState(false)

  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <IconButton>
        <ShoppingCartOutlined color="gray" />
      </IconButton>

      {authenticated ? (
        <>
          <IconButton>
            <NotificationsOutlined color="gray" />
          </IconButton>

          <IconButton>
            <EmailOutlined color="gray" />
          </IconButton>
        </>
      ) : (
        <Box sx={{ display: 'flex', gap: 1 }}>
          <BelyButton variant="contained" onClick={() => setAuthenticated(true)}>Login</BelyButton>
          <BelyButton variant="outlined" color="gray">Sign Up</BelyButton>
        </Box>
      )}
    </Box>
  )
}
