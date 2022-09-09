import styled from 'styled-components'

export const HeaderContainer = styled.header`
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
    color: ${(props) => props.theme.ligh};
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
export const Menu = styled.nav`
  z-index: 1;
  width: 12rem;
  position: absolute;
  right: 0;
  top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  background: ${(props) => props.theme.dark};
  padding: 0 1rem 2rem;
  border-bottom-left-radius: 8px;
  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme.secondary};
  }
  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.5rem;
    span,
    svg {
      color: ${(props) => props.theme.ligh};
    }
    button {
      border: none;
      background: transparent;
      line-height: 0;
      cursor: pointer;
    }
  }
  a {
    padding: 0.5rem 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    text-decoration: none;
    color: ${(props) => props.theme.primary};
    font-weight: 700;
    background: ${(props) => props.theme.background};
    border-radius: 8px;
  }
  > span {
    margin-top: 1rem;
    font-size: 0.625rem;
    color: ${(Props) => Props.theme.low};
  }
`
