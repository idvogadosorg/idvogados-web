import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const HomePage = () => (
  <StyledContainer>
    <h1>Bem vindo à plataforma do IDVG</h1>
    <Link href="/example">
      <a>Vá para a página de exemplo</a>
    </Link>
  </StyledContainer>
);

const StyledContainer = styled.div`
  padding: 1em;
  text-align: center;
  font-family: 'Roboto', 'arial', sans-serif;

  h1 {
    color: #333;
  }

  a {
    text-decoration: none;
    color: blue;
  }
`;

export default HomePage;
