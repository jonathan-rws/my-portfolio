import { SidebarContainer } from './styles'

import { FaWindowClose } from 'react-icons/fa'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <SidebarContainer isOpen={isOpen}>
      <div>
        <span>Close</span>
        <button onClick={onClose}>
          <FaWindowClose size={22} />
        </button>
      </div>
      <h1>Navegação</h1>
      <a href="#about">Sobre </a>
      <a href="#projects">Projetos</a>
      <a href="#contact">Contato</a>
      <span>Front-End web developer</span>
    </SidebarContainer>
  )
}
