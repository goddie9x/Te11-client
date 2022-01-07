import amongus from './amongus';
import spring from './spring';
import winter from './winter';

const getParticlesTheme = () => {
  const currentMonth = new Date().getMonth();

  if (currentMonth >= 0 && currentMonth < 3) {
    // summer
    return spring;
  } else if (currentMonth >= 3 && currentMonth < 11) {
    // autumn
    return amongus;
  } else {
    // winter
    return winter;
  }
};

const particlesTheme = getParticlesTheme();

export default particlesTheme;
