import { CardProject, ProjectsContainer, ProjectsWrapper } from './styles'
import { Fade } from 'react-awesome-reveal'
import coffeeDeliveryImg from '../../assets/projects/coffee-delivery.png'
import portfolioImg from '../../assets/projects/portfolio.png'
import todoImg from '../../assets/projects/todo.png'
import { FiGithub, FiGlobe } from 'react-icons/fi'

export function Projects() {
  return (
    <ProjectsContainer id="projects">
      <h1>Projetos:</h1>
      <p>
        Eu tenho trabalhado em vários projetos de desenvolvimento front-end
        utilizando React para estudo, aqui você encontra os meus principais
        projetos.
      </p>
      <ProjectsWrapper>
        <Fade duration={2500} fraction={0.5} triggerOnce={true}>
          <CardProject>
            <img src={coffeeDeliveryImg} alt="" />
            <strong>Coffee Delivery</strong>
            <span>
              Aplicação web para delivery de cafés, com carrinho de compras e
              cadastro de endereços.
            </span>
            <footer>
              <a href="https://desafio-02-coffee-delivery.vercel.app/">
                <FiGlobe size={20} />
                Live
              </a>
              <a href="https://github.com/jonathan-rws/desafio-02-coffee-delivery">
                <FiGithub size={20} />
                Github
              </a>
            </footer>
          </CardProject>
        </Fade>
        <Fade duration={2500} fraction={0.5} triggerOnce={true}>
          <CardProject>
            <img src={portfolioImg} alt="" />
            <strong>Portifólio</strong>
            <span>
              Página criada para demonstrar trabalhos que eu mesmo desenvolvi e
              conquistar empregadores.
            </span>
            <footer>
              <a href="https://jonathanportifolio.vercel.app/">
                <FiGlobe size={20} />
                Live
              </a>
              <a href="https://github.com/jonathan-rws/my-portfolio">
                <FiGithub size={20} />
                Github
              </a>
            </footer>
          </CardProject>
        </Fade>
        <Fade duration={2500} fraction={0.5} triggerOnce={true}>
          <CardProject>
            <img src={todoImg} alt="" />
            <strong>Todo List</strong>
            <span>
              Ferramenta desenvolvida em react para salvar tarefas e marcar como
              concluída quando efetuada.
            </span>
            <footer>
              <a href="https://desafio-01-todolist.vercel.app/">
                <FiGlobe size={20} />
                Live
              </a>
              <a href="https://github.com/jonathan-rws/desafio-01-todolist">
                <FiGithub size={20} />
                Github
              </a>
            </footer>
          </CardProject>
        </Fade>
      </ProjectsWrapper>
    </ProjectsContainer>
  )
}
