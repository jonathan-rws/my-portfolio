import {
  AboutContainer,
  CerticatesContainer,
  ExperienceTimeContainer,
} from './styles'

import rocketseatImg from '../../assets/rocketseat.jpg'
import sujeitoProgramadorImg from '../../assets/sujeito.png'
import curoEmVideoImg from '../../assets/cursoEmVideo.png'
import comingSoonimg from '../../assets/comingSoon.svg'

export function About() {
  return (
    <AboutContainer>
      <h1>Sobre:</h1>
      <p>
        {
          'Oi, meu nome é Jonathan Martins seja bem vindo(a) ao meu portifólio! Sou um estudante de desenvolvimento web que busca usar das melhores praticas do mercado e o aprendizado constante de ferramentas para resolver os mais complexos problemas do dia-a-dia. '
        }
      </p>
      <ExperienceTimeContainer>
        <strong>12+</strong>
        <span>
          Meses de estudo. Buscando se especializar em Javascript, Html e CSS
          para poder criar interfaces dinâmicas e intuitivas.
        </span>
      </ExperienceTimeContainer>
      <CerticatesContainer>
        <div>
          <img src={rocketseatImg} alt="" />
        </div>
        <div>
          <img src={sujeitoProgramadorImg} alt="" />
        </div>
        <div>
          <img src={curoEmVideoImg} alt="" />
        </div>
        <div>
          <img src={comingSoonimg} alt="" />
        </div>
      </CerticatesContainer>
    </AboutContainer>
  )
}
