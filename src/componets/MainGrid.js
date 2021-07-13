import styled from "styled-components";

export const MainGrid = styled.main`
  width: 100%;
  grid-gap: 0.625rem;
  margin: 0 auto;
  //max-width: 500px;
  padding: 1rem ;

  .profileArea {
    display: none;
    @media (min-width: 860px) {
      display: block;
    }
  }

  @media (min-width: 860px) {
    //max-width: 1110px;
    width: 75%;

    display: grid;
    grid-template-areas: 
      "profileArea welcomeArea profileRelationsArea";
    grid-template-columns: 1fr 4fr 2fr;
  }
`;