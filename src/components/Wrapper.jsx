import * as React from 'react';
import styled from 'styled-components';

const WrapperStyled = styled.div`
  width: 95%;
  margin: 1rem auto;
  display: grid;
  grid-template-areas:
    'personal personal personal'
    'tools tools tools'
    'git git git'
    'hobbies hobbies hobbies'
    'experiencie experiencie experiencie'
    'filter filter filter'
    'projects projects projects';
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 1.5rem;

  @media only screen and (min-width: 768px) {
    width: 85%;
    grid-template-areas:
      'personal personal personal'
      'tools git git'
      'hobbies git git'
      'hobbies experiencie experiencie'
      'hobbies experiencie experiencie'
      'filter filter filter'
      'projects projects projects'
      '... ... pagination';
  }
`;

const Wrapper = ({ children }) => {
  return <WrapperStyled>{children}</WrapperStyled>;
};

export default Wrapper;
