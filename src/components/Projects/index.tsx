import { CardProject, ProjectsContainer, ProjectsWrapper } from './styles'
import { Fade } from 'react-awesome-reveal'
import coffeeDeliveryImg from '../../assets/projects/coffee-delivery.png'
import portfolioImg from '../../assets/projects/portfolio.png'
import todoImg from '../../assets/projects/todo.png'

export function Projects() {
  return (
    <ProjectsContainer>
      <h1>Projetos:</h1>
      <p>
        Eu tenho trabalho em vários projetos de desenvolvimento front-end em
        estudo, aqui você encontra os meus principais projetos.
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
              <button>Live</button>
              <button>Github</button>
            </footer>
          </CardProject>
        </Fade>
        <Fade duration={2500} fraction={0.5} triggerOnce={true}>
          <CardProject>
            <img src={portfolioImg} alt="" />
            <strong>Portifólio</strong>
            <span>
              Página criada para demonstrar trabalhos que eu mesmo desenvolvi,
              para conquistar empregadores.
            </span>
            <footer>
              <button>Live</button>
              <button>Github</button>
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
              <button>Live</button>
              <button>Github</button>
            </footer>
          </CardProject>
        </Fade>
      </ProjectsWrapper>
    </ProjectsContainer>
  )
}
