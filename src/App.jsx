import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DisplayNav from './components/layout/DisplayNav'
import Home from './pages/Home'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DisplayNav />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
