import { Box, Input, IconButton } from '@mui/material'
import { Search, FilterAltOutlined } from '@mui/icons-material'

export default function SearchBar() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Input
        sx={{
          border: '1px solid gray',
          borderColor: 'gray.main',
          pl: 2,
          pr: 1,
          borderRadius: 99,
          width: {
            md: '200px',
            lg: '400px'
          }
        }}
        type="text"
        placeholder="search"
        disableUnderline
        endAdornment={<Search color="gray" />}
      />

      <IconButton
        color="gray"
      >
        <FilterAltOutlined />
      </IconButton>
    </Box>
  )
}
