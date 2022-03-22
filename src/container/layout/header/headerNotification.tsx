import { useTheme } from '@mui/material';
import React, { memo, useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import { useTranslation } from 'react-i18next';

import NotificationsIcon from '@mui/icons-material/Notifications';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';

import TBox from 'components/box';
import TTooltip from 'components/toolTip';
import TIconButton from 'components/iconButton';
import { TBoxProps } from 'components/box/box.styled';
import TTypography from 'components/typography';
import { getNotifsInfo } from 'store/thunk/notif';
import TMenu from 'components/menu';
import NotificationItem from 'components/notificationItem';
import { NotificationContainer } from './header.styled';

const socket = io('https://te11api.herokuapp.com/');

const THeaderNotification = (props: TBoxProps) => {
  const [page, setPage] = useState(1);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const notifRef = useRef<HTMLDivElement>(null);
  const notifWrapperRef = useRef<HTMLDivElement>(null);

  const { amountNotifsNotRead, notifs } = useSelector((state: RootState) => state.notif);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const theme = useTheme();
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  useEffect(() => {
    socket.on('notif:created', () => {
      dispatch(getNotifsInfo({ page: page }));
    });
    return () => {
      socket.off('notif:created');
    };
  }, []);
  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      dispatch(getNotifsInfo({ page: page }));
    }
    return () => {
      isSubscribed = false;
    };
  }, [page]);

  return (
    <TBox {...props} ref={notifRef}>
      <TTooltip title={t('notification')} onClick={handleOpenNavMenu}>
        <TIconButton
          position="relative"
          width={6}
          height={6}
          shape="curved"
          aria-label="account of current user"
          aria-haspopup="true"
          onClick={() => dispatch(getNotifsInfo({ page: page }))}
        >
          {!!amountNotifsNotRead ? (
            <TTypography
              variant="body1"
              top={0}
              right={0}
              position="absolute"
              backgroundColor="red"
              width={3}
              height={3}
              lineHeight={1.6}
              borderRadius={10}
              color={theme.palette.common.white}
            >
              {amountNotifsNotRead}
            </TTypography>
          ) : null}
          <NotificationsIcon />
        </TIconButton>
      </TTooltip>
      <TMenu
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        padding={1}
      >
        <TTypography variant="h3" padding={2} marginbottom={1}>
          {t('notification')}
        </TTypography>
        {notifs && notifs.length ? (
          <NotificationContainer
            ref={notifWrapperRef}
            maxHeight="80vh"
            onScroll={(e) => {
              const { scrollTop, scrollHeight, clientHeight } = e.target as HTMLDivElement;
              if (scrollTop + clientHeight >= scrollHeight) {
                setPage(page + 1);
              }
            }}
          >
            {notifs.map((notif, index) => (
              <NotificationItem key={index} {...notif} />
            ))}
          </NotificationContainer>
        ) : (
          <TBox height={58} minWidth={300}>
            <TTypography variant="body1" lineheight={4} textalign="center">
              {t('no_notification')}
            </TTypography>
          </TBox>
        )}
      </TMenu>
    </TBox>
  );
};

export default memo(THeaderNotification);
