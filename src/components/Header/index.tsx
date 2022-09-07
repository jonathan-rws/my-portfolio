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
      </HeaderContent>
    </HeaderContainer>
  )
}
