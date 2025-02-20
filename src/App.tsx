import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled from '@emotion/styled'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import About from './pages/About'

const MainContent = styled.main`
  padding-top: 80px; /* Space for fixed navigation */
  min-height: 100vh;
  background: linear-gradient(
    135deg,
    rgba(33, 150, 243, 0.1),
    rgba(233, 30, 99, 0.1)
  );
`

function App() {
  return (
    <Router>
      <Navigation />
      <MainContent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </MainContent>
    </Router>
  )
}

export default App
