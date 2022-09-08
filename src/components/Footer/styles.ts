import styled from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100%;
  background: ${(props) => props.theme.dark};
  margin-top: 2rem;
  padding: 1rem 0;
`
export const FooterContent = styled.div`
  div {
    padding: 0 2rem;
    max-width: 70rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    @media (max-width: 720px) {
      padding: 0 1rem;
    }
    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme.low};
      font-size: 0.7rem;
      &:nth-child(1) {
        @media (max-width: 720px) {
          display: none;
        }
      }
    }
    + div {
      margin-top: 1rem;
      justify-content: center;
      gap: 1rem;
      color: ${(props) => props.theme.primary};
    }
  }
`
