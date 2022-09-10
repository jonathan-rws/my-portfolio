import developerImg from '../../assets/developer.svg'
import { AsideContainer, BannerContainer, Button } from './styles'
import { FiTerminal, FiUser } from 'react-icons/fi'

export function Banner() {
  return (
    <BannerContainer>
      <AsideContainer>
        <span>Oi, eu sou</span>
        <strong>Jonathan Martins</strong>
        <p>Estudante de desenvolvimento web front-end</p>
        <div>
          <Button href="#about">
            <FiUser size={20} />
            Sobre
          </Button>
          <Button href="#projects">
            <FiTerminal size={20} />
            Projetos
          </Button>
        </div>
      </AsideContainer>
      <img src={developerImg} alt="" />
    </BannerContainer>
  )
}
