import * as React from 'react';
import styled from 'styled-components';

const ExperiencieStyled = styled.section.attrs(() => ({
  className: 'section',
}))`
  grid-area: experiencie;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const ExperiencieTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 2rem;
`;
const ExperiencieCard = styled.article`
  width: 100%;
  display: grid;
  grid-template-columns: 100%;

  @media only screen and (min-width: 768px) {
    grid-template-columns: 30% 70%;
  }
`;
const ExperiencieImg = styled.img`
  width: 100%;
`;
const ExperiencieContainer = styled.div`
  margin-bottom: 2rem;
  @media only screen and (min-width: 768px) {
    padding-left: 2rem;
  }
`;
const CardData = styled.p`
  font-size: 14px;
  line-height: 17px;
  color: var(--colorText);
`;
const CardTitle = styled.p`
  font-size: 18px;
  color: var(--black);
  font-weight: 600;
  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
const CardText = styled.p`
  color: var(--colorText);
  font-size: 16px;
`;

const Experiencie = () => {
  return (
    <ExperiencieStyled>
      <ExperiencieTitle>Experiences</ExperiencieTitle>
      <ExperiencieCard className="card">
        <ExperiencieImg
          src="assets/9tec.webp"
          alt="9technology"
          className="card__img"
        />
        <ExperiencieContainer>
          <CardData>Feb 2020 - 2020</CardData>
          <CardTitle>Front-end developer</CardTitle>
          <CardText>Creación de contenido. SEO y desarrollo web</CardText>
        </ExperiencieContainer>
      </ExperiencieCard>
      <ExperiencieCard className="card">
        <ExperiencieImg
          src="assets/logo-feval.png"
          alt="feval"
          className="card__img"
        />
        <ExperiencieContainer>
          <CardData>Aug 2016 - Feb 2018</CardData>
          <CardTitle>Full-stack developer</CardTitle>
          <CardText>Diseño web</CardText>
        </ExperiencieContainer>
      </ExperiencieCard>
    </ExperiencieStyled>
  );
};

export default Experiencie;
