import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const ProjectStyled = styled.article`
  width: 100%;
  border-radius: 12px;
  background-color: var(--bgComponents);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
`;
const ProjectImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center;
  border-radius: 12px;
`;
const TagContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  padding: 0.5rem;
`;
const Tag = styled.p`
  margin: 0.5rem 1rem;
  font-size: 1rem;
`;
const ProjectTitle = styled.h2`
  margin-top: 0;
  font-size: 24px;
  color: var(--black);
`;
const ProjectText = styled.p`
  font-size: 16px;
  color: var(--colorText);
  line-height: 1.5rem;
`;
const ContainerLink = styled.div`
  width: 100;
  display: flex;
`;
const ProjectLink = styled.a`
  outline: none;
  margin-right: 2rem;
  margin-top: 1rem;
  text-decoration: none;
  padding: 0.5rem 2.5rem;
  border: 1px solid var(--hoverFilter);
  border-radius: 12px;
`;
const ProjectDemo = styled(ProjectLink)`
  color: var(--textButton);
  background-color: var(--hoverFilter);
`;
const ProjectCode = styled(ProjectLink)`
  color: var(--hoverFilter);
`;

const Project = ({ project }) => {
  const { imagen, tags, title, text, urlDemo, urlCode } = project;
  return (
    <ProjectStyled>
      <ProjectImg src={imagen} alt={title} />
      <TagContainer>
        {tags.map((tag) => (
          <Tag key={uuidv4()}>#{tag}</Tag>
        ))}
      </TagContainer>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectText>{text}</ProjectText>
      <ContainerLink>
        <ProjectDemo href={urlDemo} target="_blank" rel="noreferrer">
          Demo
        </ProjectDemo>
        <ProjectCode href={urlCode} target="_blank" rel="noreferrer">
          Code
        </ProjectCode>
      </ContainerLink>
    </ProjectStyled>
  );
};

export default Project;
