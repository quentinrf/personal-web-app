import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import SpotlightCard from '../components/SpotlightCard'
import './Projects.css'

interface Project {
  title:       string
  tagline:     string
  description: string
  tech:        string[]
  github?:     string
  demo?:       string
}

const PROJECTS: Project[] = [
  {
    title:       'Project Alpha',
    tagline:     'High-throughput event pipeline at scale.',
    description: 'A distributed event processing system built for reliability and throughput. Handles millions of events per day using Kafka as the message broker, with Go consumers and Terraform-managed infrastructure on AWS.',
    tech:        ['Go', 'Kafka', 'AWS', 'Terraform'],
    github:      '#',
  },
  {
    title:       'Project Beta',
    tagline:     'Serverless auth microservice with zero cold-starts.',
    description: 'An authentication and authorization microservice built on AWS Lambda with DynamoDB. Uses OIDC and JWT standards, with provisioned concurrency to eliminate cold starts in production.',
    tech:        ['TypeScript', 'Lambda', 'DynamoDB', 'JWT'],
    github:      '#',
  },
]

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  return (
    <div className="page projects-page">
      <div className="page-inner">
        <p className="section-label">Work</p>
        <h1 className="section-heading">Projects.</h1>

        <div className="cards-grid">
          {PROJECTS.map((project) => (
            <button
              key={project.title}
              className="project-card-btn"
              onClick={() => setSelected(project)}
              aria-label={`View details for ${project.title}`}
            >
              <SpotlightCard
                className="project-card"
                spotlightColor="rgba(88, 28, 220, 0.10)"
              >
                <div className="card-body">
                  <h3 className="card-title">{project.title}</h3>
                  <p className="card-desc">{project.tagline}</p>
                  <div className="tech-badges">
                    {project.tech.map(t => (
                      <span key={t} className="tech-badge">{t}</span>
                    ))}
                  </div>
                  <span className="card-hint">View details →</span>
                </div>
              </SpotlightCard>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="modal-panel"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ type: 'spring', mass: 0.1, stiffness: 150, damping: 12 }}
              onClick={e => e.stopPropagation()}
            >
              <h2 className="modal-title">{selected.title}</h2>
              <p className="modal-tagline">{selected.tagline}</p>
              <p className="modal-desc">{selected.description}</p>
              <div className="tech-badges modal-badges">
                {selected.tech.map(t => (
                  <span key={t} className="tech-badge">{t}</span>
                ))}
              </div>
              <div className="modal-links">
                {selected.github && (
                  <a href={selected.github} target="_blank" rel="noopener noreferrer" className="modal-link">
                    GitHub
                  </a>
                )}
                {selected.demo && (
                  <a href={selected.demo} target="_blank" rel="noopener noreferrer" className="modal-link">
                    Live Demo
                  </a>
                )}
              </div>
              <button className="modal-close" onClick={() => setSelected(null)} aria-label="Close">
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
