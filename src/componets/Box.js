import styled from "styled-components";

export const Box = styled.div`
  background: #FFFFFF;
  border-radius: 0.5rem;
  padding: 1rem;
  /* CSS Pré-Pronto */
  margin-bottom: 0.625rem;

  img {
    border-radius: 0.5rem;
  }

  .boxLink {
    font-size: 0.875rem;
    color: #2E7BB4;
    text-decoration: none;
    font-weight: 800;
  }

  .title {
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 1.25rem;
  }

  .subTitle {
    font-size: 1.125rem;
    font-weight: 400;
    margin-bottom: 1.25rem;
  }

  .smallTitle {
    margin-bottom: 1.25rem;
    font-size: 1rem;
    font-weight: 700;
    color: #333333;
  }

  hr {
    margin-top: 0.75rem;
    margin-bottom: 0.5rem;
    border-color: transparent;
    border-bottom-color: #ECF2FA;
  }

  input {
    width: 100%;
    background-color: #F4F4F4;
    color: #333333;
    border: 0;
    padding: 0.875rem 1rem;
    margin-bottom: 0.875rem;
    border-radius: 1rem;

    ::placeholder {
      color: #333333;
      opacity: 1;
    }
  }

  button {
    border: 0;
    padding: 0.5rem 0.75rem;
    color: #FFFFFF;
    border-radius: 1rem;
    background-color: #6F92BB;
  }
`;