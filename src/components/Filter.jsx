import React, { useContext } from 'react';
import styled from 'styled-components';
import ButtonFilter from './ButtonFilter';
import { AppContext } from '../context/AppContext';

const FilterStyled = styled.section.attrs(() => ({
  className: 'section',
}))`
  grid-area: filter;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;
const FilterName = styled.h2`
  font-size: 18px;
  color: var(--colorTitle);
`;
const FilterContainer = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  @media only screen and (min-width: 768px) {
    width: 500px;
  }
`;

const Filter = () => {
  const { filterPath, filterProjects } = useContext(AppContext);

  return (
    <FilterStyled>
      <FilterName>Projects ({filterProjects.length})</FilterName>
      <FilterContainer>
        <ButtonFilter value="react" filterPath={filterPath}>
          React
        </ButtonFilter>
        <ButtonFilter value="nodejs" filterPath={filterPath}>
          Nodejs
        </ButtonFilter>
        <ButtonFilter value="responsive" filterPath={filterPath}>
          Reponsive
        </ButtonFilter>
      </FilterContainer>
    </FilterStyled>
  );
};

export default Filter;
