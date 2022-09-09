import { useState } from 'react'
import { FiX, FiMenu } from 'react-icons/fi'
import { Sidebar } from '../Sidebar'

import { HeaderContainer, HeaderContent } from './styles'

export function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  function hadleChangeSidebar() {
    setIsSidebarOpen((status) => !status)
  }

  return (
    <HeaderContainer isOpen={isSidebarOpen}>
      <HeaderContent>
        <strong>Jonathan Martins</strong>
        <nav>
          <a href="#about">Sobre </a>
          <a href="#projects">Projetos</a>
          <a href="#contact">Contato</a>
        </nav>
        <button onClick={hadleChangeSidebar}>
          {!isSidebarOpen ? <FiMenu size={26} /> : <FiX size={26} />}
        </button>
      </HeaderContent>

      <Sidebar isOpen={isSidebarOpen} />
    </HeaderContainer>
  )
}
