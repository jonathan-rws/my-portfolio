import styled from 'styled-components'

interface HeaderContainerProps {
  isOpen: boolean
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
  width: 100%;
  height: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.dark};
`
export const HeaderContent = styled.div`
  display: flex;
  width: 70rem;
  padding: 1rem 2rem;
  justify-content: space-between;
  align-items: center;
  strong {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${(props) => props.theme.primary};
  }
  button {
    background: transparent;
    border: none;
    color: ${(props) => props.theme.primary};
    cursor: pointer;
    @media (min-width: 720px) {
      display: none;
    }
  }
  nav {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    align-items: center;
    a {
      text-decoration: none;
      font-size: 1rem;
      color: ${(props) => props.theme.ligh};
      transition: color 0.2s;
      border: 1px solid transparent;
      line-height: 2rem;

      &.active {
        color: ${(props) => props.theme.primary};
        border-bottom-color: ${(props) => props.theme.primary};
        transition: filter 0.2s;
        &:hover {
          filter: opacity(0.7);
        }
      }
      &:hover {
        color: ${(props) => props.theme.primary};
      }
    }
    @media (max-width: 720px) {
      display: none;
    }
  }
  @media (max-width: 720px) {
    padding: 1rem 1rem;
  }
`
