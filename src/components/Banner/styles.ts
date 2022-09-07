import styled from 'styled-components'

export const BannerContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  img {
    width: 27rem;

    @media (max-width: 1080px) {
      width: 19rem;
    }
    @media (max-width: 720px) {
      display: none;
    }
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
    @media (max-width: 720px) {
      font-size: 2.5rem;
      line-height: 3.25rem;
    }
  }
  p {
    font-size: 1.125rem;
    color: ${(props) => props.theme.white};
    margin-bottom: 3rem;
    @media (max-width: 720px) {
      font-size: 1rem;
    }
  }
  div {
    width: 100%;
    display: flex;
    gap: 1rem;
  }
`
export const Button = styled.a`
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  & + a {
    background: transparent;
  }
  &:hover {
    filter: opacity(0.7);
  }
`
