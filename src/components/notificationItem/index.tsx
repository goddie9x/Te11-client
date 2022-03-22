import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import moment from 'moment';

import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import MoodOutlinedIcon from '@mui/icons-material/MoodOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';

import TGrid from 'components/grid';
import TLink from 'components/link';
import TImage from 'components/image';
import TBox from 'components/box';
import TTypography from 'components/typography';
import NotificationWrapper from './notificationItem.styled';

import { getNotifsInfo, setNotifRead } from 'store/thunk/notif';
import { RootState } from 'store';
import { Language } from 'constants/enum/language';

//1: post, 2: schedule, 3: exam,  4: comment, 5: like, 6: follow, 7: message, 8:news
export const notifType = ['post', 'news', 'schedule', 'exam_schedule', 'comment', 'like', 'follow', 'message'];

type IconNotificationTypeProps = {
  type?: number;
};

const IconNotification = ({ type }: IconNotificationTypeProps) => {
  switch (type) {
    case 1:
      return <FeedOutlinedIcon />;
    case 2:
      return <EventNoteOutlinedIcon />;
    case 3:
      return <EventNoteOutlinedIcon />;
    case 4:
      return <ChatOutlinedIcon />;
    case 5:
      return <MoodOutlinedIcon />;
    case 6:
      return <BookmarkOutlinedIcon />;
    case 7:
      return <FeedOutlinedIcon />;
    case 8:
      return <FeedOutlinedIcon />;
    default:
      return <FeedOutlinedIcon />;
  }
};

export type NotificationsProps = {
  _id: string;
  userNameAthor?: string;
  userAthorAvatar?: string;
  url: string;
  content?: string;
  read?: string|boolean;
  //1: post, 2:news, 3: schedule, 4: exam,  5: comment, 6: like, 7: follow, 8: message
  type?: number;
  createdAt?: string;
};

const NotificationItem = ({
  _id,
  userNameAthor,
  userAthorAvatar,
  read,
  url,
  content,
  type,
  createdAt,
}: NotificationsProps) => {
  const currentPage = useSelector((state: RootState) => state.notif.page);
  const language = useSelector((state: RootState) => state.common.language);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <TLink
      underline="none"
      href={url}
      onClick={() => {
        dispatch(setNotifRead(_id));
        dispatch(getNotifsInfo({ page: currentPage }));
      }}
    >
      <NotificationWrapper
        read={read == 'true'? true : undefined}
        container
        marginX={0.4}
        spacing={0.2}
        height={9}
        minWidth={300}
        alignItems="center"
      >
        <TGrid item xs={3} height="100%" padding={0.8} position="relative" textAlign="center">
          <TImage height={50} width={50} borderradius={100}  objectFit="cover"  src={userAthorAvatar} alt={userNameAthor} />
          <TBox position="absolute" bottom={0} left="55%">
            <IconNotification type={type || 1} />
          </TBox>
        </TGrid>
        <TGrid paddingLeft={1} item xs={8}>
          <TTypography variant="body1" color="textSecondary">
            {userNameAthor}
          </TTypography>
          <TTypography variant="body2" color="textSecondary">
            {!!content ? content : t('has_created_a_new') + t(notifType[type || 0])}
          </TTypography>
          <TTypography variant="body2" color="textSecondary">
            {(moment.locale(language === Language.EN_US ? 'en' : 'vi'), moment(createdAt).fromNow().toString())}
          </TTypography>
        </TGrid>
        {(read !== 'true'&&read!=true)&& (
          <TGrid item xs={1} md={1}>
            <TBox width={8} height={8} background="#0a1929" borderradius={100} />
          </TGrid>
        )}
      </NotificationWrapper>
    </TLink>
  );
};

export default NotificationItem;
