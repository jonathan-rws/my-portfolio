import styled from 'styled-components'

export const SlideContainer = styled.div`
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-10rem * 11));
    }
  }

  height: 10rem;
  background: ${(props) => props.theme.dark};
  overflow: hidden;
  margin-top: 1rem;
`

export const Marquee = styled.div`
  width: 50000px;

  .content {
    display: flex;
    height: 10rem;
    align-items: center;
    animation: scroll 20s linear infinite;
    &:hover {
      animation-play-state: paused;
    }

    .slide {
      width: 10rem;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: filter 0.2s;
      &:hover {
        filter: opacity(0.7);
      }
      img {
        width: 5.5rem;
      }
    }
  }
`
