import { AlertTitle, Slide } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';

import { clearAlert } from 'store/slices/alert';

import TAlertStyled, { TAlertProps } from './alert.styled';

const TAlert = (props: TAlertProps) => {
  const { title, message } = useSelector((state: RootState) => state.alert);
  const dispatch = useDispatch();

  const handleCloseAlert = () => {
    dispatch(clearAlert());
  };

  useEffect(() => {
    const timerAutoClose = setTimeout(() => {
      dispatch(clearAlert());
    }, 3000);

    return () => {
      clearTimeout(timerAutoClose);
      dispatch(clearAlert());
    };
  }, []);

  return (
    <Slide direction="up" in={!!message} mountOnEnter unmountOnExit>
      <TAlertStyled position="fixed"  top={4} right={4} zindex={2000} onClose={handleCloseAlert} {...props}>
        <AlertTitle>{title}</AlertTitle>
        {message}
      </TAlertStyled>
    </Slide>
  );
};

export default TAlert;
