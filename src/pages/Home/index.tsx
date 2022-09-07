import { About } from '../../components/About'
import { Banner } from '../../components/Banner'
import { Projects } from '../../components/Projects'
import { Skills } from '../../components/Skills'
import { MainContainer } from './styles'

export function Home() {
  return (
    <MainContainer>
      <Banner />
      <Skills />
      <About />
      <Projects />
    </MainContainer>
  )
}
