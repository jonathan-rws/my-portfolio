import { CardProject, ProjectsContainer, ProjectsWrapper } from './styles'

import coffeeDeliveryImg from '../../assets/projects/coffee-delivery.png'
import portfolioImg from '../../assets/projects/portfolio.png'

export function Projects() {
  return (
    <ProjectsContainer>
      <h1>Projetos:</h1>
      <p>
        Eu tenho trabalho em vários projetos de desenvolvimento front-end em
        estudo, aqui você encontra os meus principais projetos.
      </p>
      <ProjectsWrapper>
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
        <CardProject>
          <img src="https://github.com/jonathan-rws.png" alt="" />
          <strong>coffee-delivery</strong>
          <span>
            Aplicação web para delivery de cafés, com carrinho de compras e
            cadastro de endereços.
          </span>
          <footer>
            <button>Live</button>
            <button>Github</button>
          </footer>
        </CardProject>
      </ProjectsWrapper>
    </ProjectsContainer>
  )
}
