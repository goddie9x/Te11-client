import amongus from './amongus';
import spring from './spring';
import winter from './winter';

const getParticlesTheme = (bg: string) => {
  const currentMonth = new Date().getMonth();

  if (currentMonth >= 0 && currentMonth < 3) {
    // summer
    return spring(bg);
  } else if (currentMonth >= 3 && currentMonth < 11) {
    // autumn
    return amongus(bg);
  } else {
    // winter
    return winter(bg);
  }
};

export default getParticlesTheme;
