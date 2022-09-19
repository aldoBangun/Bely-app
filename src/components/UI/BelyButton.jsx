import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'

const CustomButton = styled(Button)({
  boxShadow: 'none',
  borderRadius: 99,
  padding: '4px 24px',
  '&:hover': {
    boxShadow: 'none'
  }
})

export default function BelyButton(props) {
  return <CustomButton {...props} />
}
