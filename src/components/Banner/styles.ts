import styled from 'styled-components'

export const BannerContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  img {
    width: 27rem;
  }
`
export const AsideContainer = styled.aside`
  span {
    font-weight: 500;
    font-size: 2rem;
    line-height: 3rem;
    color: ${(props) => props.theme.white};
    display: block;
  }
  strong {
    font-weight: 600;
    font-size: 3.25rem;
    line-height: 4.8rem;
    color: ${(props) => props.theme.white};
  }
  p {
    font-size: 1.125rem;
    color: ${(props) => props.theme.white};
    margin-bottom: 3rem;
  }
`
export const Button = styled.button`
  width: 10rem;
  height: 3rem;
  background: ${(props) => props.theme.primary};
  border: 2px solid ${(props) => props.theme.primary};
  border-radius: 8px;
  color: ${(props) => props.theme.white};
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: filter 0.2;
  & + button {
    margin-left: 2rem;
    background: transparent;
  }
  &:hover {
    filter: opacity(0.7);
  }
`
