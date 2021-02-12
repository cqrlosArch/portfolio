import React from 'react';
import styled from 'styled-components';

const ButtonFilterStyled = styled.input.attrs(() => ({
  type: 'radio',
  name: 'path',
}))`
  display: none;
  &:checked + label {
    border-color: var(--hoverFilter);
    color: var(--textButton);
    background-color: var(--hoverFilter);
  }
`;

const FilterLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  width: 85px;
  height: 33px;
  border: 1px solid;
  border-color: var(--colorTitle);
  border-radius: 12px;
  cursor: pointer;
  font-size: 12px;
  color: var(--colorTitle);
  background-color: 'inherit';
`;

const ButtonFilter = ({ filterPath, value, children }) => {
  const handleClick = () => {
    filterPath(value);
  };
  return (
    <>
      <ButtonFilterStyled data-value={value} id={value}></ButtonFilterStyled>
      <FilterLabel htmlFor={value} onClick={handleClick}>
        {children}
      </FilterLabel>
    </>
  );
};

export default ButtonFilter;
