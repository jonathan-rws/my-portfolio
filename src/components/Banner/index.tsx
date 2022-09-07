import developerImg from '../../assets/developer.svg'
import { AsideContainer, BannerContainer, Button } from './styles'

export function Banner() {
  return (
    <BannerContainer>
      <AsideContainer>
        <span>Oi, eu sou</span>
        <strong>Jonathan Martins</strong>
        <p>Estudante de desenvolvimento web front-end</p>
        <div>
          <Button>Sobre</Button>
          <Button>Projetos</Button>
        </div>
      </AsideContainer>
      <img src={developerImg} alt="" />
    </BannerContainer>
  )
}
