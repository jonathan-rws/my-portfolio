import { ContactContainer, FollowContainer, FormContainer } from './styles'
import { Fade } from 'react-awesome-reveal'

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaGithubSquare,
  FaWhatsappSquare,
  FaPaperPlane,
} from 'react-icons/fa'

export function Contact() {
  return (
    <ContactContainer>
      <FollowContainer>
        <Fade>
          <h1>Siga-me</h1>
          <span>Entre em contato comigo, vamos fazer mágica juntos.</span>
          <div>
            <FaFacebookSquare size={32} />
            <FaInstagramSquare size={32} />
            <FaLinkedin size={32} />
            <FaGithubSquare size={32} />
            <FaWhatsappSquare size={32} />
          </div>
        </Fade>
      </FollowContainer>
      <FormContainer>
        <Fade>
          <span>Contato</span>
          <input type="text" placeholder="Nome:" />
          <input type="text" placeholder="Email:" />
          <textarea name="" id="" placeholder="Mensagem:"></textarea>
          <button type="submit">
            <FaPaperPlane size={20} />
            Enviar
          </button>
        </Fade>
      </FormContainer>
    </ContactContainer>
  )
}
