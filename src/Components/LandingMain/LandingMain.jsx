import React from 'react';
import StyledLandingMain from './StyledLandingMain'; // styled.section
import { FaBasketballBall } from 'react-icons/fa';
import styled from '@emotion/styled';

const StyleBB = styled(FaBasketballBall)`
  font-size: 30px;
`;

const StyledVG = styled(FaBasketballBall)`
  font-size: 30px;
`;

export default function LandingMain() {
  return (
    <StyledLandingMain>
      <div className="col_1">
        <h1>Lorem ipsum dolor sit amet.</h1>
        <h4>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora a
          amet dignissimos obcaecati odio. Voluptas.
        </h4>

        <div className="icons">
          <StyleBB />
          <StyledVG />
        </div>
      </div>
    </StyledLandingMain>
  );
}
