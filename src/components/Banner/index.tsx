import developerImg from '../../assets/developer.svg'
import { AsideContainer, BannerContainer, Button } from './styles'
import { FaDev, FaUser } from 'react-icons/fa'

export function Banner() {
  return (
    <BannerContainer>
      <AsideContainer>
        <span>Oi, eu sou</span>
        <strong>Jonathan Martins</strong>
        <p>Estudante de desenvolvimento web front-end</p>
        <div>
          <Button>
            <FaUser size={20} />
            Sobre
          </Button>
          <Button>
            <FaDev size={20} />
            Projetos
          </Button>
        </div>
      </AsideContainer>
      <img src={developerImg} alt="" />
    </BannerContainer>
  )
}
