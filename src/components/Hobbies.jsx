import * as React from 'react';
import styled from 'styled-components';

const HobbiesStyled = styled.section.attrs(() => ({
  className: 'section',
}))`
  grid-area: hobbies;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media only screen and (min-width: 768px) {
    justify-content: space-between;
  }
`;
const HobbieTitle = styled.h2`
  font-size: 24px;
  color: var(--colorTitle);
`;
const Card = styled.figure`
  margin: 0;
  margin-bottom: 2rem;
`;
const CardImg = styled.img`
  width: 100%;
  max-height: 140px;
  object-fit: cover;
  object-position: bottom;
  @media only screen and (min-width: 768px) {
    max-height: none;
  }
`;
const CardTitle = styled.p`
  font-weight: 600;
  font-size: 18px;
  color: var(--black);
  margin: 0.5rem 0;
`;
const CardText = styled.figcaption`
  font-size: 16px;
  color: var(--colorText);
`;

const Hobbies = () => {
  return (
    <HobbiesStyled>
      <HobbieTitle>Hobbies</HobbieTitle>
      <Card>
        <CardImg src="./assets/hobbie1.jpg" alt="gamming" />
        <CardTitle>Gaming</CardTitle>
        <CardText>Me gustan los juegos de estrategia</CardText>
      </Card>
      <Card>
        <CardImg src="./assets/hobbie2.jpg" alt="cooking" />
        <CardTitle>Cooking</CardTitle>
        <CardText>
          Paso gran parte de mi tiempo de ocio preparando platos especiales
        </CardText>
      </Card>
      <Card>
        <CardImg src="./assets/hobbie3.jpg" alt="Furniture Restorer" />
        <CardTitle>Forniture</CardTitle>
        <CardText>
          Realizo restauración de muebles antiguos en mi tiempo libre
        </CardText>
      </Card>
    </HobbiesStyled>
  );
};

export default Hobbies;
