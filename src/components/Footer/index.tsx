import { FooterContainer, FooterContent } from './styles'

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaGithubSquare,
  FaWhatsappSquare,
} from 'react-icons/fa'

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <div>
          <span>@2022 Jonathan Martins</span>
          <span>Front-End web developer</span>
          <span>Open to work!</span>
          <span>{'Hello world : )'}</span>
        </div>
        <div>
          <FaFacebookSquare size={32} />
          <FaInstagramSquare size={32} />
          <FaLinkedin size={32} />
          <FaGithubSquare size={32} />
          <FaWhatsappSquare size={32} />
        </div>
      </FooterContent>
    </FooterContainer>
  )
}
