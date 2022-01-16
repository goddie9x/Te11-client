import React from 'react';
import { useTheme } from '@mui/material';

import TRightModalStyled, { TRightModalWrapper, TRightModalProps } from './rightModal.styled';
import TBox from 'components/box';
import TTypography from 'components/typography';
import TDivider from 'components/divider';

import CloseIcon from '@mui/icons-material/Close';
import TIconButton from 'components/iconButton';

const TRightModal = ({ children, title, ...props }: TRightModalProps) => {
  const theme = useTheme();

  return (
    <TRightModalStyled {...props} >
      <TRightModalWrapper
        background={theme.palette.mode === 'dark' ? 'rgb(10, 25, 41)' : '#fff'}
        position="absolute"
        top={0}
        right={0}
        bottom={0}
        minwidth={40}
        borderRadius="8px 0 0 8px"
        {...props}
      >
        {title && (
          <>
            <TBox padding={2}>
              <TTypography variant="h6" color="textPrimary" height={6} lineheight={2.5}>
                {title}
              </TTypography>
            </TBox>
            <TDivider marginbottom={3} />
          </>
        )}
        <TBox position="absolute" top={2} right={2}>
          <TIconButton
            background={theme.palette.mode === 'dark' ? '#fff' : theme.palette.primary.contrastText}
            width={3}
            height={3}
            onClick={(event) => {
              props.onClose?.(event, 'escapeKeyDown');
            }}
          >
            <CloseIcon />
          </TIconButton>
        </TBox>
        <TBox padding={2}>{children}</TBox>
      </TRightModalWrapper>
    </TRightModalStyled>
  );
};

export default TRightModal;
