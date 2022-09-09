import styled from 'styled-components'

export const SidebarContainer = styled.div`
  max-height: 0;
  width: 15rem;
  z-index: 1;
  position: absolute;
  top: 4rem;
  right: 0;
  overflow: hidden;
  background: ${(props) => props.theme.dark};
  display: flex;
  flex-direction: column;
  color: #fff;
  transition: max-height 0.5s ease-in-out;
  border-bottom-left-radius: 10px;
  &.opened {
    max-height: 1000px;
  }
  &.closed {
  }
`

export const SidebarContent = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 3rem;
  h1 {
    margin: 2rem 0 1rem 1rem;
  }
  a {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.25rem 1rem;
    width: 100%;
    color: ${(props) => props.theme.primary};
    text-decoration: none;
    font-size: 1.125rem;
  }
  span {
    font-size: 0.75rem;
    color: ${(props) => props.theme.low};
    margin-top: 2rem;
    margin-left: 1rem;
  }
`
