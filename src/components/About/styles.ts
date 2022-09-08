import styled from 'styled-components'

import rocketseatImg from '../../assets/rocketseat.jpg'
import sujeitoProgramadorImg from '../../assets/sujeito.png'
import curoEmVideoImg from '../../assets/cursoEmVideo.png'
import comingSoonimg from '../../assets/comingSoon.webp'

export const AboutContainer = styled.section`
  margin-top: 3rem;
  h1 {
    font-weight: 600;
    font-size: 2rem;
    line-height: 3rem;
    color: ${(props) => props.theme.primary};
  }
  p {
    font-weight: 400;
    color: ${(props) => props.theme.ligh};
    text-align: justify;
    font-size: 1.125rem;
    margin-top: 1rem;
    @media (max-width: 720px) {
      font-size: 0.875rem;
    }
  }
`
export const ExperienceTimeContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 1.5rem;
  display: inline;

  strong {
    float: left;
    font-size: 6rem;
    font-weight: 600;
    line-height: 6rem;
    color: ${(props) => props.theme.primary};
    margin-right: 1.5rem;
    @media (max-width: 720px) {
      font-size: 4rem;
      margin-right: 1rem;
      line-height: 4rem;
    }
  }
  p {
    font-size: 2rem;
    color: ${(props) => props.theme.ligh};
    @media (max-width: 720px) {
      font-size: 1rem;
    }
  }
`
export const CerticatesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-top: 2rem;
  @media (max-width: 720px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  div {
    flex: 1;
  }
`
interface CertificateProps {
  certificate:
    | 'rocketseat'
    | 'sujeitoProgramador'
    | 'cursoEmVideo'
    | 'comingSoon'
}

const backgroundImg = {
  rocketseat: rocketseatImg,
  sujeitoProgramador: sujeitoProgramadorImg,
  cursoEmVideo: curoEmVideoImg,
  comingSoon: comingSoonimg,
}

export const Certificate = styled.div<CertificateProps>`
  display: flex;
  border-radius: 8px;
  background: url(${(props) => backgroundImg[props.certificate]});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;

  &::before {
    content: '';
    height: 0;
    float: left;
    padding-bottom: calc(100% / (16 / 10));
  }
  &::after {
    content: '';
    display: block;
    clear: both;
  }
`
