import { useNavigate, useLocation } from 'react-router-dom'
import { House, FolderOpen, Briefcase } from 'lucide-react'
import Dock from './Dock'
import './Nav.css'

const NAV_ITEMS = [
  { icon: <House size={18} />,      label: 'Home',       path: '/'           },
  { icon: <FolderOpen size={18} />, label: 'Projects',   path: '/projects'   },
  { icon: <Briefcase size={18} />,  label: 'Experience', path: '/experience' },
]

export default function Nav() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const items = NAV_ITEMS.map(item => ({
    icon:      item.icon,
    label:     item.label,
    onClick:   () => navigate(item.path),
    className: pathname === item.path ? 'dock-item--active' : '',
  }))

  return (
    <div className="nav-dock-wrapper">
      <Dock
        items={items}
        magnification={1.45 * 44}
        distance={80}
        panelHeight={64}
        baseItemSize={44}
      />
    </div>
  )
}
