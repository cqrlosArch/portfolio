import * as React from 'react';
import imgGit from '../assets/github.png';
import styled from 'styled-components';

const GitStyled = styled.section.attrs(() => ({
  className: 'section',
}))`
  grid-area: git;
  display: grid;
  grid-template-columns: 40% 60%;
`;
const GitTitle = styled.h2`
  font-size: 24px;
  color: var(--black);
  max-width: 100px;
`;
const GitText = styled.div`
  line-height: 20pt;
  grid-column: span 2;
  margin: 10px auto;
  padding: 5px;
  font-size: 14px;
  color: var(--colorText);
  height: 200px;
`;
const GitLink = styled.a`
  font-size: 12px;
  line-height: 20px;
  color: var(--blue);
  text-decoration: none;
`;

const Blog = () => {
  return (
    <GitStyled>
      <GitTitle>My GitHub Page</GitTitle>
      <img src={imgGit} alt="images github" />
      <GitText>
        <p>
          En mis repositorios de GitHub se ve la evolución de mi trayectoria
          como desarrollador.
        </p>
        <p>
          Me gusta compartir todos mi proyector y colaborar con otros
          desarrolladores.
        </p>
      </GitText>
      <GitLink
        href="https://github.com/cqrlosArch"
        target="_blank"
        rel="noreferrer"
      >
        github.com
      </GitLink>
    </GitStyled>
  );
};

export default Blog;
