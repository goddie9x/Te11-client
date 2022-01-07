import React from 'react';
import TParticlesStyled from './particles.styled';

import particlesTheme from 'theme/particles';


const TParticles = () => {
  return <TParticlesStyled options={particlesTheme} />;
};

export default TParticles;
