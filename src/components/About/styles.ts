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
  }
`
export const ExperienceTimeContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 1.5rem;

  strong {
    font-size: 6rem;
    font-weight: 600;
    line-height: 6rem;
    color: ${(props) => props.theme.primary};
    margin-right: 1.5rem;
  }
  span {
    font-size: 1.5rem;
    color: ${(props) => props.theme.ligh};
  }
`
export const CerticatesContainer = styled.div`
  width: 100%;
  height: 15rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-top: 2rem;
  div {
    background: ${(props) => props.theme.secondary};
    flex: 1;
    overflow: hidden;
    border-radius: 8px;
    img {
      width: 100%;
      height: 100%;
    }
  }
`
