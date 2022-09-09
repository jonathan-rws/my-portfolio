import { SidebarContainer, SidebarContent } from './styles'
import { FiTerminal, FiUser, FiMail } from 'react-icons/fi'

interface SidebarProps {
  isOpen: boolean
}

export function Sidebar({ isOpen }: SidebarProps) {
  return (
    <SidebarContainer className={isOpen ? 'opened' : 'closed'}>
      <SidebarContent>
        <h1>Navegaçao</h1>
        <a href="">
          <FiUser />
          Sobre
        </a>
        <a href="">
          <FiTerminal />
          Projetos
        </a>
        <a href="">
          <FiMail />
          Contato
        </a>
        <span>@2022 Jonathan Martins</span>
      </SidebarContent>
    </SidebarContainer>
  )
}
