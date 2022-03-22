import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SendIcon from '@mui/icons-material/Send';
import { useHistory } from 'react-router-dom';
import io from 'socket.io-client';
import { useTranslation } from 'react-i18next';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import TBox from 'components/box';
import TInput from 'components/input';
import TIconButton from 'components/iconButton';
import { TBoxProps } from 'components/box/box.styled';
import TRoomWrapper from './room.styled';
import TTypography from 'components/typography';

import { RootState } from 'store';
import { TRoomsProps } from '..';
import TMessage, { TMessageProps } from 'components/message';
import { setHelmet } from 'store/slices/helmet';
import TButton from 'components/button';

export type TRoomProps = TBoxProps & {
  chatWrapperProps?: TBoxProps;
  roomId?: string;
  topic?: string;
  isChatToUser?: boolean;
};

const socket = io('https://te11api.herokuapp.com');

const TRoom = ({ chatWrapperProps, roomId, isChatToUser, ...props }: TRoomProps) => {
  const [messageToSend, setMessageToSend] = useState('');
  const [messages, setMessages] = useState<Array<TMessageProps> | []>([]);
  const [roomInfo, setRoomInfo] = useState<TRoomsProps | undefined>();
  const [activeScrollToBottom, setActiveScrollToBottom] = useState(false);
  const [haveNewMessage, setHaveNewMessage] = useState(false);

  const chatWindow = useRef<HTMLDivElement>(null);

  const { t } = useTranslation();
  const history = useHistory();
  const currentUser = useSelector((state: RootState) => state.auth.userData);
  const currentUserId = currentUser?._id || '';
  const dispatch = useDispatch();

  const handleNewMessage = () => {
    if (activeScrollToBottom) {
      setHaveNewMessage(true);
    } else {
      setHaveNewMessage(false);
      setTimeout(() => {
        if (chatWindow && chatWindow.current) {
          chatWindow.current.scrollTop = chatWindow.current.scrollHeight;
        }
      }, 1000);
    }
  };

  const handleScrollChatWindow = () => {
    if (chatWindow.current) {
      const chatWindowHeight = chatWindow.current.clientHeight;
      const chatWindowScrollHeight = chatWindow.current.scrollHeight;
      const chatWindowScrollTop = chatWindow.current.scrollTop;
      if (chatWindowScrollTop + chatWindowHeight < chatWindowScrollHeight - 100) {
        setActiveScrollToBottom(true);
      } else {
        setActiveScrollToBottom(false);
        setHaveNewMessage(false);
      }
    }
  };

  const handleUnloadEvent = () => {
    fetch('https://te11api.herokuapp.com/chat-room/leave/' + roomId, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ tokenUser: localStorage.getItem('tokenUser') }),
    });
    socket.emit('chat-room:user-leave', {
      _id: roomId,
      username: currentUser?.fullName || currentUser?.account,
      userId: currentUser?._id || '',
    });
  };
  const handleSendMessage = () => {
    if (messageToSend.trim() === '') {
      setMessageToSend('');
      return;
    }
    socket.emit('chat-room:user-chat', {
      _id: roomId,
      message: messageToSend,
      userId: currentUserId,
      username: currentUser?.fullName || currentUser?.account,
      avatar: currentUser?.image || '',
      time: new Date(),
    });
    setMessageToSend('');
    setTimeout(() => {
      if (chatWindow && chatWindow.current) {
        chatWindow.current.scrollTop = chatWindow.current.scrollHeight;
      }
    }, 1000);
  };
  const handleEnterEvent = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Enter') {
      return;
    } else {
      if (!event.shiftKey) {
        handleSendMessage();
      } else {
        setMessageToSend(messageToSend + '\n');
      }
    }
  };
  useEffect(() => {
    dispatch(setHelmet({ title: t('chat_room') }));
    fetch('https://te11api.herokuapp.com/chat-room/join/' + roomId, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ tokenUser: localStorage.getItem('tokenUser') }),
    })
      .then((res) => {
        if (res.status >= 400) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((res) => {
        if (!res) {
          throw new Error('not_found');
        }
        setRoomInfo(res);
        document.title = res.topic;
      })
      .catch(() => {
        history.push('/not_found');
      });
  }, []);
  useEffect(() => {
    socket.on('chat-room-' + roomId + '-message', (data: TMessageProps) => {
      setMessages((messages) => [...messages, data]);
      handleNewMessage();
    });
    socket.on('chat-room-leave-' + roomId, (data) => {
      setMessages((prewMessgage) => {
        const newMessage = [
          ...prewMessgage,
          {
            specialMessgage: t('user_has_left_the_group', { user: data.username }),
          },
        ];
        return newMessage;
      });
      handleNewMessage();
    });
    socket.on('chat-room-join-' + roomId, (data) => {
      setMessages((prewMessgage) => {
        const newMessage = [
          ...prewMessgage,
          {
            specialMessgage: t('user_has_joined_the_group', { user: data.username }),
          },
        ];
        return newMessage;
      });
      handleNewMessage();
    });
    return () => {
      socket.off('chat-room-' + roomId + '-message');
      socket.off('chat-room-join-' + roomId);
      socket.off('chat-room-leave-' + roomId);
    };
  }, []);
  useEffect(() => {
    if (isChatToUser) {
      return;
    }
    if (currentUserId) {
      socket.emit('chat-room:user-connected', {
        _id: roomId,
        username: currentUser?.fullName || currentUser?.account,
        userId: currentUserId,
      });
    }
  }, [currentUserId]);
  useEffect(() => {
    window.addEventListener('beforeunload', handleUnloadEvent);
    window.addEventListener('unload', handleUnloadEvent);

    return () => {
      handleUnloadEvent();
      window.removeEventListener('beforeunload', handleUnloadEvent);
      window.removeEventListener('unload', handleUnloadEvent);
    };
  }, []);
  useEffect(() => {
    if (chatWindow && chatWindow.current) {
      chatWindow.current.addEventListener('scroll', handleScrollChatWindow);
    }
    return () => {
      if (chatWindow && chatWindow.current) {
        chatWindow.current.removeEventListener('scroll', handleScrollChatWindow);
      }
    };
  });
  return (
    <TBox {...props}>
      <TTypography variant="h3" color="primary" textalign="center" marginY={2}>
        {roomInfo?.topic}
      </TTypography>
      <TRoomWrapper
        display="flex"
        flexDirection="column"
        {...chatWrapperProps}
        height="70vh"
        overflow="auto"
        position="relative"
        ref={chatWindow}
      >
        {messages.map((message, index) => {
          return (
            <TMessage
              isCurrentUser={message.userId === currentUserId}
              hideAvatar={index > 1 && message.userId == messages[index - 1].userId}
              {...message}
              key={index}
            />
          );
        })}
        {activeScrollToBottom && (
          <TBox position="sticky" bottom={16} marginRight={2} textalign="right" animation="bounce 3s infinite">
            {haveNewMessage ? (
              <TButton
                padding={0}
                onClick={() => {
                  if (chatWindow && chatWindow.current) {
                    chatWindow.current.scrollTop = chatWindow.current.scrollHeight;
                  }
                }}
                variant="outlined"
              >
                <TTypography variant="body2" color="primary" display="flex" alignItems="center">
                  <KeyboardArrowDownIcon />
                  {t('have_new_message')}
                </TTypography>
              </TButton>
            ) : (
              <TIconButton
                onClick={() => {
                  if (chatWindow && chatWindow.current) {
                    chatWindow.current.scrollTop = chatWindow.current.scrollHeight;
                  }
                }}
                width={1.5}
                height={1.5}
              >
                <KeyboardArrowDownIcon />
              </TIconButton>
            )}
          </TBox>
        )}
      </TRoomWrapper>
      <TBox display="flex" flexWrap="nowrap">
        <TInput
          multiline
          lineheight={2}
          minheight={5}
          label={t('message')}
          name="message"
          value={messageToSend}
          onKeyPress={handleEnterEvent}
          fullWidth
          onChange={(e) => setMessageToSend(e.target.value)}
        />
        <TIconButton variant="extended" shape="curved" onClick={() => handleSendMessage()}>
          <SendIcon />
        </TIconButton>
      </TBox>
    </TBox>
  );
};

export default TRoom;
