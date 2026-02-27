import { Routes, Route } from 'react-router-dom'
import Aurora from './components/Aurora'
import BlurText from './components/BlurText'
import RotatingText from './components/RotatingText'
import FadeContent from './components/FadeContent'
import SpotlightCard from './components/SpotlightCard'
import './App.css'

const FOCUS_AREAS = [
  {
    icon: '⬡',
    title: 'Backend Engineering',
    description: 'Designing and building reliable, high-throughput services with a focus on clean architecture and long-term maintainability.'
  },
  {
    icon: '☁',
    title: 'Cloud Infrastructure',
    description: 'Building on AWS with serverless and event-driven patterns — Lambda, DynamoDB, SQS, and beyond.'
  },
  {
    icon: '🔐',
    title: 'Auth & Security',
    description: 'Implementing authentication and authorization systems using OIDC, JWT, and zero-trust principles.'
  },
  {
    icon: '⚙',
    title: 'Systems Design',
    description: 'Architecting distributed systems that scale across cloud environments with resilience and observability in mind.'
  }
]

function Home() {
  return (
    <div className="page">
      <div className="aurora-wrap">
        <Aurora
          colorStops={['#1a1a2e', '#4f46e5', '#0f172a']}
          amplitude={1.2}
          blend={0.6}
          speed={0.4}
        />
      </div>

      <main className="content">
        <section className="hero">
          <FadeContent delay={100} duration={600}>
            <span className="greeting">Hi, I'm</span>
          </FadeContent>

          <BlurText
            text="Quentin Roy-Foster"
            animateBy="words"
            direction="top"
            delay={120}
            className="name"
          />

          <FadeContent delay={800} duration={700}>
            <div className="role-line">
              <span className="role-prefix">Senior </span>
              <RotatingText
                texts={['Backend Engineer', 'Go Developer', 'Cloud Architect', 'Systems Builder']}
                rotationInterval={3000}
                mainClassName="rotating-text"
                splitBy="words"
              />
            </div>
          </FadeContent>

          <FadeContent delay={1100} duration={700}>
            <p className="bio">
              I build backend systems and cloud infrastructure that power modern software products.
              My work lives at the intersection of distributed systems, security, and developer experience —
              with Go as my language of choice.
            </p>
          </FadeContent>

          <FadeContent delay={1300} duration={600}>
            <div className="social-links">
              <a
                href="https://github.com/quentinrf"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                GitHub
              </a>
              <span className="social-divider">·</span>
              <a
                href="https://linkedin.com/in/quentin-roy-foster"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                LinkedIn
              </a>
            </div>
          </FadeContent>
        </section>

        <FadeContent delay={1500} duration={700}>
          <section className="cards-grid">
            {FOCUS_AREAS.map((area) => (
              <SpotlightCard
                key={area.title}
                spotlightColor="rgba(99, 102, 241, 0.15)"
                className="focus-card"
              >
                <span className="card-icon">{area.icon}</span>
                <h3 className="card-title">{area.title}</h3>
                <p className="card-desc">{area.description}</p>
              </SpotlightCard>
            ))}
          </section>
        </FadeContent>
      </main>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App
