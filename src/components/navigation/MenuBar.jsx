import { Box, IconButton, Button } from '@mui/material'
import { ShoppingCartOutlined, NotificationsOutlined, EmailOutlined } from '@mui/icons-material'

export default function MenuBar() {
  const authenticated = false

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
          <Button variant="contained">Login</Button>
          <Button variant="outlined" color="gray">Sign Up</Button>
        </Box>
      )}
    </Box>
  )
}
