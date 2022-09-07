import styled from 'styled-components'

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
  @media (max-width: 720px) {
    display: inline;
  }
  strong {
    font-size: 6rem;
    font-weight: 600;
    line-height: 6rem;
    color: ${(props) => props.theme.primary};
    margin-right: 1.5rem;
    @media (max-width: 720px) {
      float: left;
      font-size: 5rem;
      margin-right: 1rem;
      line-height: 4.5rem;
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
    background: ${(props) => props.theme.secondary};
    max-height: 9rem;

    flex: 1;
    overflow: hidden;
    border-radius: 8px;
    @media (max-width: 1080px) {
      max-height: 8rem;
    }
    @media (max-width: 720px) {
      max-height: 7.5rem;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
`
