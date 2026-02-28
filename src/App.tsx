import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Aurora from './components/Aurora'
import BlurText from './components/BlurText'
import RotatingText from './components/RotatingText'
import GlassSurface from './components/GlassSurface'
import ScrollReveal from './components/ScrollReveal'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

const STATEMENT =
  'I build the systems that make software companies possible — backend services, cloud infrastructure, and security platforms, written in Go.'

const FOCUS_AREAS = [
  {
    title: 'Backend Engineering',
    description:
      'Designing and building reliable, high-throughput services with a focus on clean architecture and long-term maintainability.',
  },
  {
    title: 'Cloud Infrastructure',
    description:
      'Building on AWS with serverless and event-driven patterns — Lambda, DynamoDB, SQS, and beyond.',
  },
  {
    title: 'Auth & Security',
    description:
      'Implementing authentication and authorization systems using OIDC, JWT, and zero-trust principles.',
  },
  {
    title: 'Systems Design',
    description:
      'Architecting distributed systems that scale across cloud environments with resilience and observability in mind.',
  },
]

function Home() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero content drifts up and fades as you scroll past
      gsap.to('.hero-inner', {
        yPercent: -20,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      // Cards stagger up on enter
      gsap.fromTo(
        '.focus-card',
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.cards-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Connect section fades up
      gsap.fromTo(
        '.connect-inner',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.connect',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="page">
      <Aurora
        colorStops={['#3b0fa8', '#0b4f7a', '#0d7a6a']}
        amplitude={1.2}
        blend={0.6}
        speed={0.4}
      />
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-inner">
          <p className="hero-eyebrow">Software Engineer</p>
          <BlurText
            text="Quentin Roy-Foster"
            animateBy="words"
            direction="bottom"
            delay={130}
            stepDuration={0.4}
            className="hero-name"
          />
          <div className="hero-role">
            <RotatingText
              texts={['Backend Engineer', 'Go Developer', 'Cloud Architect', 'Systems Builder']}
              rotationInterval={3000}
              mainClassName="hero-rotating"
              splitBy="words"
            />
          </div>
        </div>
        <div className="scroll-cue" aria-hidden="true">
          <span className="scroll-line" />
        </div>
      </section>

      {/* ── Statement ─────────────────────────────────── */}
      <section className="statement-section">
        <div className="statement-sticky">
          <div className="statement-inner">
            <ScrollReveal
              baseOpacity={0.08}
              enableBlur
              blurStrength={5}
              baseRotation={2}
              wordAnimationEnd="bottom center"
              rotationEnd="bottom center"
              containerClassName="statement-heading"
              textClassName="statement-text"
            >
              {STATEMENT}
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Expertise cards ───────────────────────────── */}
      <section className="cards-section">
        <div className="cards-inner">
          <p className="section-label">Expertise</p>
          <h2 className="section-heading">What I focus on.</h2>
          <div className="cards-grid">
            {FOCUS_AREAS.map((area) => (
              <GlassSurface
                key={area.title}
                width="100%"
                height="auto"
                borderRadius={20}
                blur={18}
                backgroundOpacity={0.1}
                saturation={1.6}
                distortionScale={-120}
                className="focus-card"
              >
                <div className="card-body">
                  <h3 className="card-title">{area.title}</h3>
                  <p className="card-desc">{area.description}</p>
                </div>
              </GlassSurface>
            ))}
          </div>
        </div>
      </section>

      {/* ── Connect ───────────────────────────────────── */}
      <section className="connect">
        <div className="connect-inner">
          <p className="section-label">Get in touch</p>
          <h2 className="connect-heading">Let's connect.</h2>
          <div className="connect-links">
            <GlassSurface
              width="auto"
              height="auto"
              borderRadius={980}
              blur={14}
              backgroundOpacity={0.08}
              saturation={1.8}
              distortionScale={-120}
              className="connect-btn-glass"
            >
              <a
                href="https://github.com/quentinrf"
                target="_blank"
                rel="noopener noreferrer"
                className="connect-btn"
              >
                GitHub
              </a>
            </GlassSurface>
            <GlassSurface
              width="auto"
              height="auto"
              borderRadius={980}
              blur={14}
              backgroundOpacity={0.08}
              saturation={1.8}
              distortionScale={-120}
              className="connect-btn-glass"
            >
              <a
                href="https://linkedin.com/in/quentin-roy-foster"
                target="_blank"
                rel="noopener noreferrer"
                className="connect-btn"
              >
                LinkedIn
              </a>
            </GlassSurface>
          </div>
        </div>
      </section>
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
