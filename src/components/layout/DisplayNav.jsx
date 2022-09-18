import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'

export default function DisplayNav() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  )
}
