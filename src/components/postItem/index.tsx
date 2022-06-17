import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import io from 'socket.io-client';

import TGrid from 'components/grid';
import TLink from 'components/link';
import TCard from 'components/card';
import TImage from 'components/image';
import TButton from 'components/button';
import TTypography from 'components/typography';
import { TGridProps } from 'components/grid/grid.styled';
import TDefaultImage from 'assets/images/T_Default.png';
import TBox from 'components/box';

import { PublicType } from 'constants/enum/postType';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { setLoading } from 'store/slices/common';
import { setAlert } from 'store/slices/alert';

export type TPostItemProps = TGridProps & {
  _id?: string;
  slug?: string;
  authorId?: string;
  avatarUrl?: string;
  title?: string;
  description?: string;
  updatedAt?: string;
  tag?: Array<string>;
  colorTag?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  publicType?: number;
};

const socket = io('https://te11api.herokuapp.com');

const TPostItem = ({
  slug,
  avatarUrl,
  authorId,
  title,
  description,
  updatedAt,
  tag,
  colorTag,
  publicType,
  ...props
}: TPostItemProps) => {
  const [editable, setEditable] = useState(false);
  const [deteled, setDeteled] = useState(false);
  const { t } = useTranslation();
  const date = moment(updatedAt).format('DD / MM / YYYY');
  const userData = useSelector((state: RootState) => state.auth.userData);

  const dispatch = useDispatch();

  const deletePost = () => {
    dispatch(setLoading(true));
    fetch('https://te11api.herokuapp.com/posts/' + slug, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ tokenUser: localStorage.getItem('tokenUser') }),
    }).then((res) => {
      if (res.status >= 400) {
        throw new Error('Bad response from server');
      }
      socket.emit('posts:updated');
      dispatch(setLoading(false));
      dispatch(setAlert({ type: 'success', message: t('post_deleted'), title: t('success') }));
      setDeteled(true);
    })
      .catch(() => {
        dispatch(setLoading(false));
        dispatch(setAlert({ type: 'error', message: t('cannot_delete_post'), title: t('error') }));
      });
  };

  useEffect(() => {
    if (userData && (userData._id == authorId || userData.role < 2)) {
      setEditable(true);
    } else {
      setEditable(false);
    }
  }, [userData, authorId]);
  return deteled ? null : (
    <TGrid container {...props} position="relative">
      {editable && (
        <TBox position="absolute" right={16} top={8}>
          <TLink href={'/posts/modify/' + slug}>
            <TButton marginright={1} color="warning" padding={0.5} variant="contained" shape="curved">
              {t('edit')}
            </TButton>
          </TLink>
          <TButton variant="contained" color="error" padding={0.5} shape="curved" onClick={() => deletePost()}>
            {t('delete')}
          </TButton>
        </TBox>
      )}
      <TGrid item xs={12} sm={6} md={5} lg={3}>
        <TLink href={!!slug ? '/posts/' + slug : '/'}>
          <TCard height="100%" width="100%" borderradius={6.25}>
            <TImage
              borderradius={50}
              src={avatarUrl || TDefaultImage}
              alt={title}
              objectFit="cover"
              height="100%"
              width="100%"
              minwidth={280}
              minheight={280}
            />
          </TCard>
        </TLink>
      </TGrid>
      <TGrid paddingleft={3} paddingY={0.75} item xs={12} sm={6} md={7} lg={9}>
        <TBox marginbottom={2}>
          {tag &&
            tag.length > 0 &&
            tag.map((value, index) => (
              <TLink key={index} href={'/posts/?tag=' + value}>
                <TButton color={colorTag || 'primary'} marginright={1} shape="round" padding={0.5} variant="contained">
                  {value}
                </TButton>
              </TLink>
            ))}
        </TBox>
        <TLink href={!!slug ? '/posts/' + slug : '/'}>
          <TTypography variant="h3" marginbottom={1}>
            {title}
          </TTypography>
        </TLink>
        <TTypography
          minHeight={10}
          maxHeight={146}
          marginBottom={2}
          overflow="hidden"
          textOverflow="ellipsis"
          dangerouslySetInnerHTML={{ __html: description || t('empty') }}
          variant="body1"
          marginbottom={2}
        />
        <TTypography variant="body1">
          {date + ' •'}{' '}
          <TTypography variant="body1" display="inline">
            {t(PublicType[publicType || 0])}
          </TTypography>
        </TTypography>
      </TGrid>
    </TGrid>
  );
};

export default TPostItem;
