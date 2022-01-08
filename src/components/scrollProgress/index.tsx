import TLinearProgress from 'components/progress';
import { TLinearProgressProps } from 'components/progress/progress.styled';
import React, { useEffect } from 'react';
import { useState } from 'react';

const TScrollProgress = (props: TLinearProgressProps) => {
  const [progress, setProgress] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || window.scrollTo(0, 0) || 0;
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight  || 0;
    const clientHeight = document.documentElement.clientHeight || document.body.clientHeight || 0;
    const scrolled = Math.floor((scrollTop / (scrollHeight - clientHeight)) * 100);
    
    setProgress(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  return <TLinearProgress value={progress} {...props} />;
};

export default TScrollProgress;
