import styled from 'styled-components'

interface SidebarContainerProps {
  isOpen: boolean
}

export const SidebarContainer = styled.nav<SidebarContainerProps>`
  z-index: 1;
  width: 12rem;
  position: absolute;
  right: 0;
  top: 4rem;
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
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
