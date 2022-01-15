import React, {  useEffect } from 'react';

import TAppRouter from './app';
import TAuthRouter from './auth';

import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'store';
import { getCurrentUserData } from 'store/thunk/auth';

const TRouter = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  useEffect(() => {
    dispatch(getCurrentUserData());
    console.log('getCurrentUserData');
  }, []);

  return isLoggedIn ? <TAppRouter /> : <TAuthRouter />;
};

export default TRouter;
