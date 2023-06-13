import React from 'react';
import Navbar from '../../Components/Nav/Navbar';
import LandingMain from '../../Components/LandingMain/LandingMain';
import StyledLading from './StyledLanding'; // styled section

export default function Landing() {
  return (
    <StyledLading>
      <Navbar />
      <LandingMain />
    </StyledLading>
  );
}
