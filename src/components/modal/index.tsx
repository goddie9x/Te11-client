import React, { ReactNode } from 'react';
import { Backdrop,  Fade, Modal, ModalProps, useTheme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { TModalCloseButton, TModalWrapper } from './modal.styled';
import TBox from 'components/box';
import TTypography from 'components/typography';

export type TModalProps = Omit<ModalProps, 'children'> & { title?: string; children: ReactNode; width?: number };

const TModal = ({ title, width, ...props }: TModalProps) => {
  const theme = useTheme();

  return (
    <Modal
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 100,
      }}
      {...props}
    >
      <Fade in={props.open}>
        <TModalWrapper width={width}>
          {title && (
            <TBox textAlign="center" marginBottom={2}>
              <TTypography variant="h6" color={theme.palette.primary.main}>
                {title}
              </TTypography>
            </TBox>
          )}
          <TBox>{props.children}</TBox>
          <TModalCloseButton
            onClick={() => {
              props.onClose?.({}, 'escapeKeyDown');
            }}
          >
            <CloseIcon />
          </TModalCloseButton>
        </TModalWrapper>
      </Fade>
    </Modal>
  );
};

export default TModal;