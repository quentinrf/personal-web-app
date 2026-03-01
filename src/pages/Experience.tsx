import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Experience.css'
import tackleLogo    from '../assets/logos/tackle.png'
import trendLogo     from '../assets/logos/trendmicro.png'
import hexoLogo      from '../assets/logos/hexo.png'
import crcLogo       from '../assets/logos/crc.png'

gsap.registerPlugin(ScrollTrigger)

interface Role {
  company:  string
  title:    string
  period:   string
  location: string
  bullets:  string[]
  logo?:    string
}

const ROLES: Role[] = [
  {
    company:  'Tackle.io',
    logo:     tackleLogo,
    title:    'Senior Software Engineer',
    period:   '2024 – Present',
    location: 'Ottawa, ON',
    bullets: [
      'Architected OIDC authentication service supporting 650+ customer AWS and Azure accounts',
      'Redesigned Salesforce field mapping with graph-based traversal for sub-200ms query performance',
      'Rebuilt AWS cloud connector, consolidating 10 CloudFormation stacks into a unified self-service architecture',
      'Built live field-mapping preview, reducing customer support cases and enabling CS team self-service',
      'Led critical incident remediation; developed Snowflake analysis query later productized into a customer dashboard',
    ],
  },
  {
    company:  'Trend Micro',
    logo:     trendLogo,
    title:    'Software Developer (Team Lead)',
    period:   '2021 – 2024',
    location: 'Ottawa & Montreal',
    bullets: [
      'Promoted to lead a 5-person team building OIDC-authenticated cloud integrations for AWS, Azure, and GCP',
      'Architected CloudFormation StackSet deployment across AWS Organizations, unlocking enterprise customer tier',
      'Built audit trail microservice processing 10+ event sources into DynamoDB, serving 1M+ daily API requests',
      'Owned core IAM services supporting 11 security products across 6 global regions',
      'Implemented SBOM vulnerability scanner using Grype for client AWS environments',
      'Hired 2 engineers and mentored 1 to promotion through code reviews and 1-on-1s',
    ],
  },
  {
    company:  'Trend Micro',
    logo:     trendLogo,
    title:    'Software Developer Intern',
    period:   '2020',
    location: 'Ottawa, ON',
    bullets: [
      'Developed IAM microservices in Go with a CI/CD pipeline using Jenkins and AWS CodePipeline',
    ],
  },
  {
    company:  'Hexo Corp',
    logo:     hexoLogo,
    title:    'Software Developer Intern',
    period:   '2019',
    location: 'Ottawa, ON',
    bullets: [
      'Automated database integration via REST APIs in Python, deployed on Azure',
    ],
  },
  {
    company:  'Communications Research Centre',
    logo:     crcLogo,
    title:    'Software Developer Intern',
    period:   '2018',
    location: 'Ottawa, ON',
    bullets: [
      'Built an Augmented Reality mobile application in Java on AWS',
    ],
  },
]

function CompanyLogo({ src, company }: { src?: string; company: string }) {
  const [failed, setFailed] = useState(false)
  if (!src || failed) {
    return (
      <div className="company-logo company-logo--fallback">
        {company[0]}
      </div>
    )
  }
  return (
    <img
      className="company-logo"
      src={src}
      alt={`${company} logo`}
      onError={() => setFailed(true)}
    />
  )
}

export default function Experience() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.role-block').forEach((block) => {
        gsap.fromTo(
          block,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: block,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        )

        const bullets = block.querySelectorAll('.role-bullet')
        gsap.fromTo(
          bullets,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: block,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="page experience-page">
      <div className="page-inner">
        <p className="section-label">Background</p>
        <h1 className="section-heading">Experience.</h1>

        <div className="timeline">
          {ROLES.map((role, i) => (
            <div key={i} className="role-block">
              <div className="timeline-left">
                <div className="timeline-node" />
                {i < ROLES.length - 1 && <div className="timeline-line" />}
              </div>
              <div className="timeline-right">
                <div className="role-header">
                  <CompanyLogo src={role.logo} company={role.company} />
                  <div className="role-header-text">
                    <h2 className="role-company">{role.company}</h2>
                    <p className="role-title">{role.title}</p>
                  </div>
                </div>
                <div className="role-meta">
                  <span className="role-period">{role.period}</span>
                  <span className="role-location">{role.location}</span>
                </div>
                <ul className="role-bullets">
                  {role.bullets.map((bullet, j) => (
                    <li key={j} className="role-bullet">{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
