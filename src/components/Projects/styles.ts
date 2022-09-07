import styled from 'styled-components'

export const ProjectsContainer = styled.section`
  width: 100%;
  margin-top: 2rem;

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
export const ProjectsWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`

export const CardProject = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: ${(props) => props.theme.label};
  border-radius: 8px;
  img {
    border-radius: 8px;
    width: 100%;
    height: 10rem;
    border: 2px solid ${(props) => props.theme.primary};
  }
  strong {
    color: ${(props) => props.theme.primary};
    font-size: 1.5rem;
    line-height: 2.125rem;
    font-weight: 600;
    margin-top: 1rem;
  }
  span {
    font-size: 1.125rem;
    color: ${(props) => props.theme.ligh};
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
  footer {
    margin-top: 2rem;
    width: 100%;
    display: flex;
    gap: 1rem;
    margin-top: auto;

    button {
      flex: 1;
      height: 3rem;
      border-radius: 8px;
      background: ${(props) => props.theme.primary};
      border: none;
      color: ${(props) => props.theme.ligh};
      font-size: 1rem;
      font-weight: 600;
      line-height: 24px;
      transition: filter 0.2s;
      cursor: pointer;
      + button {
        background: transparent;
        border: 2px solid ${(props) => props.theme.primary};
      }
      &:hover {
        filter: opacity(0.7);
      }
    }
  }
`
