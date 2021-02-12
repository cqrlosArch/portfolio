import * as React from 'react';
import styled from 'styled-components';

const ToolsStyled = styled.section.attrs(() => ({
  className: 'section',
}))`
  grid-area: tools;
  display: flex;
  flex-direction: column;
  color: var(--colorTitle);
`;
const ToolTitle = styled.h2`
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
`;
const ToolContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const ToolName = styled.p`
  font-size: 14px;
  margin-top: 0;
  margin-bottom: 0.3rem;
  width: 120px;
`;
const ToolProgress = styled.progress`
  margin-left: 1rem;
  width: 100%;
`;

const Tools = () => {
  return (
    <ToolsStyled>
      <ToolTitle>Skills</ToolTitle>
      <ToolContainer>
        <ToolName>React</ToolName>
        <ToolProgress value="70" max="100" />
      </ToolContainer>
      <ToolContainer>
        <ToolName>Javascript</ToolName>
        <ToolProgress value="80" max="100" />
      </ToolContainer>
      <ToolContainer>
        <ToolName>CSS</ToolName>
        <ToolProgress value="80" max="100" c />
      </ToolContainer>
      <ToolContainer>
        <ToolName>html5</ToolName>
        <ToolProgress value="95" max="100" />
      </ToolContainer>
      <ToolContainer>
        <ToolName>NodeJS</ToolName>
        <ToolProgress value="70" max="100" />
      </ToolContainer>
    </ToolsStyled>
  );
};

export default Tools;
