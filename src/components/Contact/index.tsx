import { ContactContainer, FollowContainer, FormContainer } from './styles'
import { Fade } from 'react-awesome-reveal'
import { api } from '../api/axios'
import {
  FaSpinner,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaGithubSquare,
  FaWhatsappSquare,
  FaPaperPlane,
} from 'react-icons/fa'
import { FormEvent, useState } from 'react'

export function Contact() {
  const [isLoading, setIsLoading] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    setIsLoading(true)
    console.log(event)

    api
      .post('5cf4127c75235deb4c332fb50dedf9f3 ', {
        name,
        email,
        message,
      })
      .then((res) => {
        setIsLoading(false)
        setName('')
        setEmail('')
        setMessage('')
      })
      .catch((err) => console.log(err))
  }

  return (
    <ContactContainer id="contact">
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
      <FormContainer onSubmit={handleSubmit}>
        <Fade>
          <span>Contato</span>
          <input
            name="name"
            type="text"
            placeholder="Nome:"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            name="email"
            type="email"
            placeholder="Email:"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            name="message"
            id="message"
            placeholder="Mensagem:"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          {isLoading ? (
            <button type="submit">
              <FaSpinner size={22} className="spinner" />{' '}
            </button>
          ) : (
            <button type="submit">
              <FaPaperPlane size={20} /> Enviar
            </button>
          )}
        </Fade>
      </FormContainer>
    </ContactContainer>
  )
}
