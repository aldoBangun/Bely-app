import { AppBar, Container } from '@mui/material'
import LogoSmaller from '../icons/LogoSmaller'
import SearchBar from '../navigation/SearchBar'
import MenuBar from '../navigation/MenuBar'

export default function Navigation() {
  return (
    <AppBar sx={{ boxShadow: 'none' }} color="transparent" position="static">
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '4rem'
        }}
      >
        <LogoSmaller />
        <SearchBar />
        <MenuBar />
      </Container>
    </AppBar>
  )
}
