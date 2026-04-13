import { Routes, Route } from 'react-router-dom'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { Cursor } from './components/Cursor'
import Home from './pages/Home'
import Work from './pages/Work'
import About from './pages/About'
import Resume from './pages/Resume'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <>
      <Cursor />
      <Nav />
      <Routes>
        <Route path="/"       element={<Home />} />
        <Route path="/work"   element={<Work />} />
        <Route path="/about"  element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*"       element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}
