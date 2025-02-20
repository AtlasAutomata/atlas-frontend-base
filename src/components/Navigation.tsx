import React from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 0;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  z-index: 1000;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(120deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-decoration: none;
`

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: var(--text-color);
  font-weight: 500;
  position: relative;
  padding: 0.5rem 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(120deg, var(--primary-color), var(--secondary-color));
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`

const Navigation = () => {
  return (
    <Nav>
      <NavContainer>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Logo to="/">Robert's Portfolio</Logo>
        </motion.div>
        <NavLinks>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <NavLink to="/">Home</NavLink>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <NavLink to="/about">About</NavLink>
          </motion.div>
        </NavLinks>
      </NavContainer>
    </Nav>
  )
}

export default Navigation
