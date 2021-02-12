import * as React from 'react';
import photoWebp from '../assets/photo_personal.webp';
import styled from 'styled-components';

const PersonalInfoStyled = styled.section.attrs(() => ({
  className: 'section',
}))`
  grid-area: personal;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
const PersonalImg = styled.img`
  max-width: 140px;
  @media only screen and (min-width: 768px) {
    max-width: 30%;
  }
`;
const PersonalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (min-width: 768px) {
    height: 100%;
    align-items: flex-start;
    margin-left: 1rem;
  }
`;
const PersonalTitle = styled.h1`
  font-weight: 600;
  font-size: 24px;
  color: var(--colorTitle);
  @media only screen and (min-width: 768px) {
    margin: 0;
  }
`;
const PersonalSubtitle = styled.h2`
  font-size: 16px;
  line-height: 22px;
  color: var(--colorText);
`;
const PersonalText = styled.p`
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: var(--colorText);
  @media only screen and (min-width: 768px) {
    text-align: left;
    padding-right: 4rem;
  }
`;
const PersonalContact = styled.div`
  align-self: flex-start;
`;
const PersonalContactBlock = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  color: var(--colorTitle);
`;
const PersonalLink = styled.a`
  padding: 0.5rem;
  margin-left: 1rem;
  text-decoration: none;
  color: var(--colorTitle);
  @media only screen and (min-width: 768px) {
    font-size: 0.8rem;
  }
`;

const IconTheme = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  @media only screen and (min-width: 768px) {
    position: relative;
    margin: 0;
    display: flex;
    justify-content: flex-end;
  }

  &::after {
    content: '';
    display: block;
    height: 50px;
    width: 50px;
    background-image: ${({ theme }) =>
      theme === 'light'
        ? 'url("../assets/moon.svg")'
        : 'url("../assets/sun.svg")'};
    background-repeat: no-repeat;
    background-size: 30px;
    cursor: pointer;
  }
`;

const PersonalInfo = ({ theme, themeToggler }) => {
  return (
    <PersonalInfoStyled>
      <PersonalImg src={photoWebp} alt="Imagen Personal" />
      <PersonalContainer>
        <PersonalTitle>Carlos Díaz Flores</PersonalTitle>
        <PersonalSubtitle>Front-end developer</PersonalSubtitle>
        <PersonalText>
          Desarrollador autodidacta, dispuesto a aprender y crear aplicaciones
          de interfaz de usuario excepcionales.
        </PersonalText>
      </PersonalContainer>
      <PersonalContact>
        <IconTheme theme={theme} onClick={themeToggler} />
        <PersonalContactBlock>
          <span className="material-icons">mail</span>
          <PersonalLink href="mailto:diaz.flores.c@gmail.com">
            diaz.flores.c@gmail.com
          </PersonalLink>
        </PersonalContactBlock>
        <PersonalContactBlock>
          <span className="material-icons">phone</span>
          <PersonalLink href="tel:+34617696682">617 696 682</PersonalLink>
        </PersonalContactBlock>
      </PersonalContact>
    </PersonalInfoStyled>
  );
};

export default PersonalInfo;
