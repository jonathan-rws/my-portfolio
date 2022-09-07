import { List } from 'phosphor-react'

import { HeaderContainer, HeaderContent } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <strong>Jonathan Martins</strong>
        <nav>
          <a className="active" href="">
            Home
          </a>
          <a href="">Sobre</a>
          <a href="">Projetos</a>
          <a href="">Contato</a>
        </nav>
        <button>
          <List weight="bold" size={26} />
        </button>
      </HeaderContent>
    </HeaderContainer>
  )
}
