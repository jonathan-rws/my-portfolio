import developerImg from '../../assets/developer.svg'
import { AsideContainer, BannerContainer, Button } from './styles'
import { Article, User } from 'phosphor-react'

export function Banner() {
  return (
    <BannerContainer>
      <AsideContainer>
        <span>Oi, eu sou</span>
        <strong>Jonathan Martins</strong>
        <p>Estudante de desenvolvimento web front-end</p>
        <div>
          <Button>
            <User weight="bold" size={22} />
            Sobre
          </Button>
          <Button>
            <Article size={22} weight="bold" />
            Projetos
          </Button>
        </div>
      </AsideContainer>
      <img src={developerImg} alt="" />
    </BannerContainer>
  )
}
