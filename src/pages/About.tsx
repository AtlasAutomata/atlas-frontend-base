import React from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`

const AboutSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin: 4rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

const ImageContainer = styled(motion.div)`
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    right: -20px;
    bottom: -20px;
    background: linear-gradient(120deg, var(--primary-color), var(--secondary-color));
    z-index: -1;
    border-radius: 10px;
  }

  img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
`

const Content = styled.div`
  h1 {
    font-size: 3rem;
    margin-bottom: 2rem;
    background: linear-gradient(120deg, var(--primary-color), var(--secondary-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 1.1rem;
    color: var(--text-light);
    margin-bottom: 1.5rem;
  }
`

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`

const StatItem = styled(motion.div)`
  text-align: center;
  padding: 1.5rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 2.5rem;
    color: var(--primary-color);
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: var(--text-light);
    margin: 0;
  }
`

const About = () => {
  return (
    <Container>
      <AboutSection>
        <ImageContainer
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="https://picsum.photos/600/800?random=4" 
            alt="Professional workspace"
          />
        </ImageContainer>
        <Content>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>About Robert</h1>
            <p>
              A passionate technologist and innovator with a focus on creating cutting-edge 
              solutions that push the boundaries of what's possible. With extensive experience 
              in full-stack development, cloud architecture, and AI integration, I bring ideas 
              to life through clean, efficient, and scalable code.
            </p>
            <p>
              My approach combines technical expertise with creative problem-solving, 
              ensuring that every project not only meets but exceeds expectations. I'm 
              particularly interested in automation, AI-driven development, and creating 
              systems that make complex processes simple and intuitive.
            </p>
          </motion.div>

          <Stats>
            {[
              { number: '10+', label: 'Years Experience' },
              { number: '50+', label: 'Projects Completed' },
              { number: '30+', label: 'Happy Clients' }
            ].map((stat, index) => (
              <StatItem
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </StatItem>
            ))}
          </Stats>
        </Content>
      </AboutSection>
    </Container>
  )
}

export default About
