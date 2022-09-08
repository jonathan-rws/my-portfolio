import styled from 'styled-components'

export const ContactContainer = styled.section`
  width: 100%;
  margin-top: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
  }
`
export const FollowContainer = styled.div`
  flex: 1;
  h1 {
    font-size: 2rem;
    font-weight: 600;
    line-height: 3rem;
    color: ${(props) => props.theme.primary};
  }
  span {
    display: block;

    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 2rem;
  }
  div {
    display: flex;
    align-items: center;
    gap: 1rem;
    svg {
      color: ${(props) => props.theme.primary};
    }
  }
`
export const FormContainer = styled.form`
  flex: 0.7;
  display: flex;
  flex-direction: column;
  @media (max-width: 720px) {
    width: 100%;
    margin-top: 2rem;
  }
  span {
    display: block;
    font-size: 1rem;
    font-weight: 500;
    line-height: 2rem;
    margin-bottom: 1.5rem;
  }
  input {
    width: 100%;
    height: 3.875rem;
    padding: 1rem;
    border: none;
    border-radius: 8px;
    background: ${(props) => props.theme.label};
    margin-bottom: 1rem;
    font-size: 1rem;
    color: ${(props) => props.theme.ligh};
    &::placeholder {
      font-size: 1rem;
      font-weight: 500;
      opacity: 0.5;
    }
  }
  textarea {
    width: 100%;
    height: 6.125rem;
    padding: 1rem;
    border: none;
    border-radius: 8px;
    background: ${(props) => props.theme.label};
    margin-bottom: 1rem;
    resize: none;
    font-size: 1rem;
    color: ${(props) => props.theme.ligh};
    &::placeholder {
      font-size: 1rem;
      font-weight: 500;
      opacity: 0.5;
    }
  }
  button {
    height: 3rem;
    width: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
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

    &:hover {
      filter: opacity(0.7);
    }
  }
`
