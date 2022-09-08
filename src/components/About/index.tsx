import { Fade } from 'react-awesome-reveal'
import {
  AboutContainer,
  CerticatesContainer,
  Certificate,
  ExperienceTimeContainer,
} from './styles'

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
        <p>
          Meses de estudo. Buscando se especializar em Javascript, Html e CSS
          para poder criar interfaces dinâmicas e intuitivas. Abaixo você
          encontra as principais escolas que ja estudei.
        </p>
      </ExperienceTimeContainer>

      <CerticatesContainer>
        <Fade duration={2500} fraction={0.6} triggerOnce={true}>
          <Certificate certificate={'rocketseat'}></Certificate>
        </Fade>
        <Fade duration={2500} fraction={0.6} triggerOnce={true}>
          <Certificate certificate={'sujeitoProgramador'}></Certificate>
        </Fade>
        <Fade duration={2500} fraction={0.6} triggerOnce={true}>
          <Certificate certificate={'cursoEmVideo'}></Certificate>
        </Fade>
        <Fade duration={2500} fraction={0.6} triggerOnce={true}>
          <Certificate certificate={'comingSoon'}></Certificate>
        </Fade>
      </CerticatesContainer>
    </AboutContainer>
  )
}
