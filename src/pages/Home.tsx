import React from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`

const HeroSection = styled.section`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
  background: linear-gradient(120deg, #2196f3, #e91e63);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 2rem;
  max-width: 600px;
`

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 2rem;
  margin: 4rem 0;
`

const TechItem = styled(motion.div)`
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`

const ProjectsSection = styled.section`
  margin: 6rem 0;
`

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`

const ProjectCard = styled(motion.div)`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`

const ProjectContent = styled.div`
  padding: 1.5rem;
  
  h3 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }
  
  p {
    color: #666;
    margin: 0;
  }
`

const technologies = [
  'React', 'TypeScript', 'Node.js', 'GraphQL', 
  'Python', 'Docker', 'AWS', 'MongoDB'
]

const projects = [
  {
    title: 'Project Atlas',
    description: 'A cutting-edge automation platform powered by AI',
    image: 'https://picsum.photos/600/400?random=1'
  },
  {
    title: 'Smart Dashboard',
    description: 'Real-time analytics and monitoring system',
    image: 'https://picsum.photos/600/400?random=2'
  },
  {
    title: 'Cloud Integration',
    description: 'Seamless cloud service integration platform',
    image: 'https://picsum.photos/600/400?random=3'
  }
]

const Home = () => {
  return (
    <Container>
      <HeroSection>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Robert's Innovation Hub
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Crafting cutting-edge solutions with modern technologies and innovative approaches.
          Specializing in automation, AI integration, and scalable architectures.
        </Subtitle>
      </HeroSection>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <h2>Technologies & Skills</h2>
        <TechGrid>
          {technologies.map((tech, index) => (
            <TechItem
              key={tech}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {tech}
            </TechItem>
          ))}
        </TechGrid>
      </motion.section>

      <ProjectsSection>
        <h2>Featured Projects</h2>
        <ProjectGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <img src={project.image} alt={project.title} />
              <ProjectContent>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </ProjectsSection>
    </Container>
  )
}

export default Home
