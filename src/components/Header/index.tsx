import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Sidebar } from '../Sidebar'

import { HeaderContainer, HeaderContent } from './styles'

export function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  function closeSidebar() {
    setIsSidebarOpen(false)
  }
  function openSidebar() {
    setIsSidebarOpen(true)
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <strong>Jonathan Martins</strong>
        <nav>
          <a href="#about">Sobre </a>
          <a href="#projects">Projetos</a>
          <a href="#contact">Contato</a>
        </nav>
        <button onClick={openSidebar}>
          <FaBars size={26} />
        </button>
      </HeaderContent>
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </HeaderContainer>
  )
}
